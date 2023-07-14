const pets = [];

const resolvers = {
    getAllPets: () => pets,
    getPetById: (args) => pets.find((pet) => pet.id === args.id),
    createPet: (args) => {
        const pet = {
            id: Math.random().toString(),
            name: args.name,
            age: args.age,
        };
        pets.push(pet);
        return pet;
    },
    updatePet: (args) => {
        const pet = pets.find((pet) => pet.id === args.id);
        if (!pet) return null;
        if (args.name) pet.name =args.name;
        if (args.age) pet.age = args.age;
        return pet;
    },
    deletePet: (args) => {
        const index = pets.findIndex((pet) => pet.id === args.id);
        if (index === -1) return null;
        const pet = pets[index];
        pets.splice(index,1);
        return pet;
    },
};

module.exports = resolvers;