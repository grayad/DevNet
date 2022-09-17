import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $password: String!
    $email: String!
    $type: String!
  ) {
    addUser(
      username: $username
      password: $password
      email: $email
      type: $type
    ) {
      token
      user {
        _id
      }
    }
  }
`;
