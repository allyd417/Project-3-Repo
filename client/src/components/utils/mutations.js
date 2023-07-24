import { gql } from '@apollo/client';

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
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_SEARCH = gql`
  mutation saveSearch($userId: ID!, $searchCriteria: String!, $results: [ID]!) {
    saveSearch(userId: $userId, searchCriteria: $searchCriteria, results: $results) {
      _id
      savedSearches {
        _id
        searchCriteria
        results {
          _id
          name
          type
          description
          imageUrl
        }
      }
    }
  }
`;
