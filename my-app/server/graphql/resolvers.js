const pets = [];
const axios = require('axios');

const resolvers = {
    getAllPets: async () => {
        try {
            const response = await axios.get('http://api.example.com/pets');
            return response.data;
        } catch (error) {
            console.log('Error fetching pets:', error);
            throw new Error('Failed to fecth pets');
        }
    },
    createPet: async (args) => {
        try {
            const response = await axios.post('https://api.example.com/pets', args);
            return response.data;
        } catch (error) {
            console.error('Error creating pet:', error);
            throw new Error('Failed to create pet');
        }
    },
};

module.exports = resolvers;