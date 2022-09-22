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

  type Job {
    _id: ID
    jobTitle: String
    jobDescription: String
    companyName: String
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
      jobTitle: String
      jobDescription: String
      companyName: String
      skills: [String]
    ): Job
    removeJob(_id: ID!): Job
  }

  type Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;
