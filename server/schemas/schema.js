// const schema = buildSchema(`
//   type Pet {
//     id: ID!
//     name: String!
//     species: String!
//     age: Int!
//     image: String
//     description: String
//   }

//   type User {
//     id: ID!
//     username: String!
//     email: String!
//     savedPets: [Pet!]!
//   }

//   type Query {
//     getAllPets: [Pet!]!
//     getPetById(id: ID!): Pet
//     getAllUsers: [User!]!
//     getUserById(id: ID!): User
//   }

//   type Mutation {
//     createPet(name: String!, species: String!, age: Int!, image: String, description: String): Pet!
//     updatePet(id: ID!, name: String, species: String, age: Int, image: String, description: String): Pet
//     deletePet(id: ID!): Pet
//     createUser(username: String!, email: String!, password: String!): User!
//     updateUser(id: ID!, username: String, email: String, password: String): User
//     deleteUser(id: ID!): User
//     addPetToUser(userId: ID!, petId: ID!): User
//   }
// `);


// module.exports = schema;