const typeDefs = `
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        password: String
        media: [Media]
    }

    type Media {
        _id: ID
        artistName: String
        trackName: String
        imgUrl: String
    }

    type Auth {
        token: ID!
        user: User
    }

   
  input MediaInput{
        artistName: String
        trackName: String,
        imgUrl: String,
    }
    
    type Query {
        users: [User]!
        getSingleUser(userId: ID!): User
        getMedia: [Media]
    }

    type Mutation {
        createUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth 
        login(email: String!, password: String!): Auth
        addMedia(userId: ID! mediaInput: MediaInput!): User
    }
    
    `

module.exports = typeDefs



