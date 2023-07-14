
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const axios = require('axios');
const mongoose = require('mongoose');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const app = express();
const PORT = 3000;

// Step 1: Request an access token using your API Key and Secret
const API_KEY = 'Qs2l3jr5sxotRfOwsVS2GYGejxJRp94wIMuTRc5nsWAF2I6Ebh';
const API_SECRET = 'raenefLoG4j7VsMRIG9gwu7qGK2FRYzuyORi4e4X';

axios
  .post('https://api.petfinder.com/v2/oauth2/token', {
    grant_type: 'client_credentials',
    client_id: API_KEY,
    client_secret: API_SECRET,
  })
  .then((response) => {
    const accessToken = response.data.access_token;
    startServer(accessToken);
  })
  .catch((error) => {
    console.error('Error fetching access token:', error);
    process.exit(1);
  });

// Step 2: Start the server with the access token
function startServer(accessToken) {
  mongoose.connect('mongodb://localhost/petfinder', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.once('open', () => {
    console.log('Connected to database');
  });

  app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      rootValue: resolvers,
      graphiql: true,
    })
  );

  // Step 3: Include the access token in the header of every API request
  app.use((req, res, next) => {
    req.headers['Authorization'] = `Bearer ${accessToken}`;
    next();
  });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
