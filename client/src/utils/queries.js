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
  query Users{
    users {
      _id
      username
      email
      type
      title
      bio
      skills
      connectionCount
      connections {
        _id
        username
      }
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
      connectionCount
      connections {
        _id
        username
      }
    }
  }
`;

export const QUERY_JOBS = gql`
  query Jobs {
    jobs {
      _id
      jobTitle
      jobDescription
      companyName
      hiringEmail
      skills
    }
  }
`;
