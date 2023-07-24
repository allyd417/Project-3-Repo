const { Schema, model } = require('mongoose');

const petSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  species: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Pet = model('Pet', petSchema);

module.exports = Pet;
