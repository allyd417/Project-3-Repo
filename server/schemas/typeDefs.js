const { gql } = require('apollo-server-express');


const typeDefs = gql`
    type Pet {
        _id: ID
        name: String
        species: String
        age: Int
        description: String
        image: String
    }


    type PetSearch {
        _id: ID
        searchCriteria: String
        results: [Pet]
    }


    type User {
        _id: ID
        username: String
        email: String
        password: String
        savedSearches: [PetSearch]
        savedPets: [ID]
    }
 
    type Auth {
        token: ID!
        user: User
    }
   
    type Query {
        users: [User]
        user(username: String!): User
        getAllPets: [Pet]
        pet(name: String!): Pet
        me: User
        searchPets(species: String!): [Pet]
    }


    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        saveSearch(userId: ID!, searchCriteria: String!, results: [ID]!): User
        savePet(userId: ID!, petId: ID!): User
    }
`;


module.exports = typeDefs;

