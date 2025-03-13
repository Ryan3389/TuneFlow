import { gql } from '@apollo/client'

export const CREATE_USER = gql`
    mutation Mutation($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    createUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    token
    user {
      firstName
      lastName
      email
      password
    }
  }
}

`

export const LOGIN_USER = gql`
    mutation Mutation($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      email
      password
    }
  }
}
`


export const ADD_MEDIA = gql`
  mutation Mutation($userId: ID!, $mediaInput: MediaInput!) {
  addMedia(userId: $userId, mediaInput: $mediaInput) {
    firstName
    lastName
    media {
      artistName
      trackName
      imgUrl
    }
  }
}
`

export const REMOVE_MEDIA = gql`
mutation Mutation($userId: ID!, $mediaId: ID!) {
  removeMedia(userId: $userId, mediaId: $mediaId) {
    media {
      _id
      artistName
      trackName
      imgUrl
    }
  }
}

`