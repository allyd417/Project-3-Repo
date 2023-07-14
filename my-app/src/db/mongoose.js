// mongoose.js

const mongoose = require('mongoose');

// Connection URL
const mongoURI = 'mongodb://localhost:27017/mydatabase'; // Replace 'mydatabase' with the name of your database

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Get the default connection
const db = mongoose.connection;

// Event handlers for connection status
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;
