const express = require('express');
const path = require('path');
const { graphqlHTTP } = require('express-graphql');
const axios = require('axios');
const cors = require('cors');

require('dotenv').config({ path: './.env' });

const mongoose= require('mongoose');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const app = express();
const PORT = 3001;

let PETFINDER_TOKEN = null;

// Function to fetch the token

async function fetchToken() {
    try {
        const response = await axios.post('https://api.petfinder.com/v2/oauth2/token', {
            grant_type: 'client_credentials',
            client_id: process.env.PETFINDER_KEY,
            client_secret: process.env.PETFINDER_SECRET
        });

        PETFINDER_TOKEN = response.data.access_token;
        console.log('Fetched Petfinder token');
    } catch (error) {
        console.error('Error fetching Petfinder token:', error);
    }
}

fetchToken(); // Fetch the token when the server starts

// Refresh the token every hour
setInterval(fetchToken, 1000 * 60 * 60);

//serve static files from public  folder 
app.use(express.static(path.join(__dirname, '../client/build')));

app.use(cors());


//Handle request for home page
app.get('/', (req, res) =>{
   res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

//serve static files from the css folder
app.use('/css', express.static(path.join(__dirname, '../client/src/components/css')));

app.use(
   '/graphql',
   graphqlHTTP({
       schema,
       rootValue: resolvers,
       graphiql: true,
   })
);

app.get('/animals', async (req, res) => {
    const type = req.query.type;
  
    try {
      const { data } = await axios.get('https://api.petfinder.com/v2/animals', {
        headers: { Authorization: `Bearer ${PETFINDER_TOKEN}` },
        params: { type,}
      });
      res.json(data);
    } catch (error) {
      console.error('Error fetching animals:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

mongoose.connect('mongodb://localhost/petfinder', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
   console.log('Connected to database');
});

app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
})


