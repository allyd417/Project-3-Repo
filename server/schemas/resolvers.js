const { AuthenticationError } = require('apollo-server-express');
const { User, Pets } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
              return User.findOne({ _id: context.user._id }).populate('cakes');
            }
            throw new AuthenticationError('You need to be logged in!');
          },
    getAllPets:async () => Pets.find(),
   

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
    
    // updatePet: (args) => {
    //     const pet = pets.find((pet) => pet.id === args.id);
    //     if (!pet) return null;
    //     if (args.name) pet.name =args.name;
    //     if (args.age) pet.age = args.age;
    //     return pet;
    // },
    // deletePet: (args) => {
    //     const index = pets.findIndex((pet) => pet.id === args.id);
    //     if (index === -1) return null;
    //     const pet = pets[index];
    //     pets.splice(index,1);
    //     return pet;
    // },
}
};

module.exports = resolvers;