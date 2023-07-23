const { Schema, model } = require('mongoose');

const petSchema = new Schema({
  petText: {
    type: String,
    required: 'You need to leave a pet!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  petAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const Pet = model('Pet', petSchema);

module.exports = Pet;
