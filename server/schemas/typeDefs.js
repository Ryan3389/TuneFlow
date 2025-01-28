const typeDefs = `
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        password: String
        media: [String]
    }

    type Media {
        artistName: String
        trackName: String
        kind: String
        imgUrl: String
        collectionUrl: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]!
        getMedia: [Media]
    }

    type Mutation {
        createUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth 
        login(email: String!, password: String!): Auth
    }
    
    `

module.exports = typeDefs