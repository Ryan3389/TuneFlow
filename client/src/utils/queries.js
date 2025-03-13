import { gql } from "@apollo/client"

export const GET_SINGLE_USER = gql`
query Query($userId: ID!) {
  getSingleUser(userId: $userId) {
    _id
    firstName
    lastName
    media {
      _id
      artistName
      trackName
      imgUrl
    }
  }
}
`