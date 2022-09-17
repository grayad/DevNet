// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    type: String
    title: String
    bio: String
    skills: [String]
  }

  input profileInput {
    _id: ID
    username: String
    email: String
    type: String
    title: String
    bio: String
    skills: [String]
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    addUser(
      username: String!
      email: String!
      password: String!
      type: String!
    ): Auth
    login(email: String!, password: String!): Auth
    updateUser(input: profileInput!): User
  }

  type Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;
