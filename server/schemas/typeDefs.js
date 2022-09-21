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
    title: String
    bio: String
    skills: [String]
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    jobs: [Job]
  }

  type Mutation {
    addUser(
      username: String!
      email: String!
      password: String!
      type: String!
    ): Auth
    login(email: String!, password: String!): Auth
    updateUser(title: String, bio: String, skills: [String]): User
    addJob(
      jobtitle: String!
      jobdescription: String!
      companyname: String!
      skills: [String]
    ): Job
  }

  type Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;
