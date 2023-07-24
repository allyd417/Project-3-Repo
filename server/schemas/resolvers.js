const { AuthenticationError } = require('apollo-server-express');
const { User, Pets } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('pets');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    getAllPets: async () => Pets.find(),
    // Add the resolver for the searchPets operation
    searchPets: async (parent, { species }) => {
      return Pets.find({ species });
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
   
 
    

    savePet: async (parent, { petId }, context) => {
      // Check if the user is authenticated
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in to save pets.');
      }

      // Find the pet by ID
      const pet = await Pets.findOne({ _id: petId });
      if (!pet) {
        throw new Error('Pet not found.');
      }

      // Add the pet's ID to the user's savedPets array and save the user document
      const user = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { savedPets: petId } },
        { new: true }
      );

      return user;
    },
  },
};

module.exports = resolvers;