// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    title: String
    bio: String
    skills: [String]
  }

  input profileInput {
    _id: ID
    username: String!
    email: String!
    title: String
    bio: String
    skills: [String]
  }

  type Query {
    users: [User]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    updateUser(input: profileInput!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;
