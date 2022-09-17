import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      skill
      biography
      connectionCount
      connections {
        _id
        username
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      skills
      biography
      connectionCount
      connections {
        _id
        username
      }
    }
  }
`;

