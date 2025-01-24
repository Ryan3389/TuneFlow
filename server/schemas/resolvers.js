//Incorrect import 

// const { User } = require('../models/User')

//Correct import 
const User = require('../models/User')
const { signToken, AuthenticationError } = require('../utils/auth')

const resolvers = {
    Query: {
        users: async () => {
            try {
                return await User.find()
            } catch (error) {
                console.log("Error finding users: ", error)
            }
        }
    },

    Mutation: {
        createUser: async (_, { firstName, lastName, email, password }) => {
            try {
                const user = await User.create({ firstName, lastName, email, password })
                const token = signToken(user)
                return { token, user }
            } catch (error) {
                console.log("Error creating user: ", error)
            }
        }
    }
}

module.exports = resolvers