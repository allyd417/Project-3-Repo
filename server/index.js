
const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// Load environment variables from .env file
require('dotenv').config({ path: './.env' });

const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const AuthService = require('./utils/auth');

const app = express();
const PORT = 3001;

// Middleware for parsing JSON and URL-encoded bodies
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(req.headers);
  next();
});

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, '../client/build')));

app.use(cors());

// Handle request for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Serve static files from the "css" folder
app.use('/css', express.static(path.join(__dirname, '../client/src/components/css')));

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost/petfinder', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
  console.log('Connected to the database');
});

// Create the Apollo Server instance
const apolloServer = new ApolloServer({
  typeDefs: schema,
  resolvers,
  uploads: false, // Set this to true to enable file uploads
});

// Start the Apollo Server and wait for it to be ready
async function startApolloServer() {
  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    path: '/graphql',
  });
}

// Start the Apollo Server
startApolloServer().catch((err) => console.error(err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
