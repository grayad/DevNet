import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      type
      title
      bio
      skills
    }
  }
`;

export const QUERY_USERS = gql`
  query {
    users {
      _id
      username
      email
      type
      title
      bio
      skills
    }
  }
`;

export const QUERY_SINGLEUSER = gql`
  query getSingleUser($username: String!) {
    user(username: $username) {
      _id
      username
      email
      type
      title
      bio
      skills
    }
  }
`;

export const QUERY_JOBS = gql`
  query {
    user {
      _id
      username
      email
      description
      skills
    }
  }
`;

// export const QUERY_JOBSS = gql`
//   query getJob($jobTitle: String!) {
//     user(username: $username) {
//       _id
//       username
//       email
//       description
//       skills
//     }
//   }
// `;