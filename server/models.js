const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
    unique: true
  }
});

const SearchSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  // Your search parameters go here, for example:
  animalType: String,
  breed: String,
  location: String
});

const User = mongoose.model('User', UserSchema);
const Search = mongoose.model('Search', SearchSchema);

module.exports = { User, Search };
