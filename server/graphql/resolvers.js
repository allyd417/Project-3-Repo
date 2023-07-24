<<<<<<< Updated upstream
const Pet = require('../models/Pets');
=======
const Pet = require('../models/Pet');
>>>>>>> Stashed changes
const User = require('../models/User');

const resolvers = {
  Query: {
    getAllPets: async () => await Pet.find({}),
    getPetById: async (parent, args) => await Pet.findById(args.id),
    getAllUsers: async () => await User.find({}),
    getUserById: async (parent, args) => await User.findById(args.id),
  },

  Mutation: {
    createPet: async (parent, args) => {
      let pet = new Pet({
        name: args.name,
        species: args.species,
        age: args.age,
        image: args.image,
        description: args.description,
      });

      return await pet.save();
    },

    updatePet: async (parent, args) => {
      return await Pet.findByIdAndUpdate(args.id, args, { new: true }); // { new: true } ensures the updated doc is returned
    },

    deletePet: async (parent, args) => {
      return await Pet.findByIdAndDelete(args.id);
    },

    createUser: async (parent, args) => {
      let user = new User({
        username: args.username,
        email: args.email,
        password: args.password,
      });

      return await user.save();
    },

    updateUser: async (parent, args) => {
      return await User.findByIdAndUpdate(args.id, args, { new: true });
    },

    deleteUser: async (parent, args) => {
      return await User.findByIdAndDelete(args.id);
    },

    addPetToUser: async (parent, args) => {
      return await User.findByIdAndUpdate(
        args.userId,
        { $addToSet: { savedPets: args.petId } },
        { new: true }
      ).populate('savedPets');
    },
  },
};

module.exports = resolvers;
