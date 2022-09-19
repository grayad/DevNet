import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
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
        username
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($title: String, $bio: String, $skills: [String]) {
    updateUser(title: $title, bio: $bio, skills: $skills) {
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
