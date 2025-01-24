const typeDefs = `
    type User {
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
    }

    type Mutation {
        createUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth 
    }
    
    `

module.exports = typeDefs