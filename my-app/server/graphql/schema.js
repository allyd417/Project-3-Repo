const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Pet {
    id: ID!
    name: String!
    age: Int!
  }

  type Query {
    getAllPets: [Pet!]!
    getPetById(id: ID!): Pet
  }

  type Mutation {
    createPet(name: String!, age: Int!): Pet!
    updatePet(id: ID!, name: String, age: Int): Pet
    deletePet(id: ID!): Pet
  }
`);

module.exports = schema;