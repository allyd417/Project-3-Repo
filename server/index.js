const express = require('express');
const path = require('path');
const { graphqlHTTP } = require('express-graphql');
const axios = require('axios');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// Load environment variables from .env file
require('dotenv').config({ path: './.env' });

const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const AuthService = require('./utils/auth'); // Replace with the correct path to your auth.js file

const app = express();
const PORT = 3001;

let PETFINDER_TOKEN = null;

// Middleware for parsing JSON and URL-encoded bodies
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, '../client/build')));

app.use(cors());

// Handle request for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Serve static files from the "css" folder
app.use('/css', express.static(path.join(__dirname, '../client/src/components/css')));

// Set up GraphQL endpoint
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
            params: { type },
        });
        res.json(data);
    } catch (error) {
        console.error('Error fetching animals:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route to handle user login
app.post('/login', (req, res) => {
    // Get email and password from the request body
    const { email, password } = req.body;

    // Implement the login logic using the AuthService
    // For example:
    if (AuthService.loginUser(email, password)) {
        // If login is successful, return a response with the token
        const token = AuthService.generateToken(email); // You may have a different method for token generation
        res.status(200).json({ token });
    } else {
        // If login fails, return an error response
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

// Route to handle user signup
app.post('/signup', (req, res) => {
    // Get username, email, and password from the request body
    const { username, email, password } = req.body;

    // Implement the signup logic using the AuthService
    // For example:
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




