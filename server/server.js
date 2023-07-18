const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const path = require('path'); // Import the path module
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const app = express();

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

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

// Serve the React application
app.use(express.static(path.join(__dirname, 'client/src/components')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/src/components/App.js'));
});
