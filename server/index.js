
const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
// const { graphqlUploadExpress } = require('graphql-upload');
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

const apolloServer = new ApolloServer({
  typeDefs: schema,
  resolvers,
  uploads: false, // Set this to true to enable file uploads
});

// Apply the Apollo Server middleware with file upload handling
apolloServer.applyMiddleware({
  app,
  path: '/graphql',
});
// Route to handle user signup
app.post('/signup', (req, res) => {
    // Get username, email, and password from the request body
    const { username, email, password } = req.body;

    // Implement the signup logic using the AuthService
    if (AuthService.signupUser(username, email, password)) {
        // If signup is successful, return a response with the token
        const token = AuthService.generateToken(email); // You may have a different method for token generation
        res.status(201).json({ token });
    } else {
        // If signup fails, return an error response
        res.status(400).json({ error: 'Signup failed' });
    }
});

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost/petfinder', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
    console.log('Connected to the database');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})




