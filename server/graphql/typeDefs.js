const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Pet {
        _id: ID
        name: String
        type: String
        description: String
        imageUrl: String
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
    }
  
    type Auth {
        token: ID!
        user: User
    }
   
    type Query {
        users: [User]
        user(username: String!): User
        pets: [Pet]
        pet(name: String!): Pet
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        saveSearch(userId: ID!, searchCriteria: String!, results: [ID]!): User
    }
`;

module.exports = typeDefs;
