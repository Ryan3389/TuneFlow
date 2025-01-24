const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');

require('dotenv').config()

const secret = process.env.SECRET
const expiration = '2h'

module.exports = {
    AuthenticationError: new GraphQLError('Could not authenticate user.', {
        extensions: {
            code: 'UNAUTHENTICATED',
        },
    }),

    signToken: function ({ firstName, lastName, email, _id }) {
        try {
            const payload = { firstName, lastName, email, _id }
            return jwt.sign({ data: payload }, secret, { expiresIn: expiration })
        } catch (error) {
            console.error('JWT token error: ', error)
        }
    }
}
