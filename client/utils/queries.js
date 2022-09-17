import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      type
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
