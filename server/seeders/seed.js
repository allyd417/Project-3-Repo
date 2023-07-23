const db = require('../config/connection');
const { User, Pet } = require('../models');
const userSeeds = require('./userSeeds.json');
const petSeeds = require('./petSeeds.json');

db.once('open', async () => {
    try {
        await User.deleteMany({});
        await Pet.deleteMany({});
    
        const pets = await Pet.create(petSeeds);
        const users = await User.create(userSeeds);

        // associate the first pet with the first user
        users[0].savedPets = [pets[0]._id];
        await users[0].save();

        // associate the second pet with the second user
        users[1].savedPets = [pets[1]._id];
        await users[1].save();

        console.log('all done!');
        process.exit(0);
    } catch (err) {
        throw err;
    }
});