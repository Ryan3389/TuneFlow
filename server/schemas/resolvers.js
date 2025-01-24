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
        },
        getMedia: () => {
            const url = `https://itunes.apple.com/search?term=action&media=podcast&limit=10`
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    return data
                })

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
        },
        login: async (_, { email, password }) => {
            // Search for email 
            try {
                const user = await User.findOne({ email })

                if (!user) {
                    throw new Error("Incorrect credentials")
                }
                const isCorrectPw = user.isCorrectPassword(password)

                if (!isCorrectPw) {
                    throw new Error("Incorrect credentials")
                }

                const token = signToken(user)

                return { token, user }

            } catch (error) {
                console.error("Error logging in user: ", error)
            }

        }
    }
}

module.exports = resolvers