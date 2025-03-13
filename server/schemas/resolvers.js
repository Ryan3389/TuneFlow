//Incorrect import 

// const { User } = require('../models/User')

//Correct import 
const User = require('../models/User')
const Media = require("../models/Media")

const { signToken, AuthenticationError } = require('../utils/auth')

const resolvers = {
    Query: {
        users: async () => {
            try {
                return await User.find().populate("media")
            } catch (error) {
                console.log("Error finding users: ", error)
            }
        },
        // Finish this later
        getSingleUser: async (_, { userId }) => {
            try {
                return User.findOne({ _id: userId }).populate('media')


            } catch (error) {
                console.log(error)
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

        },

        addMedia: async (_, { userId, mediaInput }) => {
            try {
                // Create new song / media to be saved
                const savedMedia = await Media.create(mediaInput)

                // Update user -> search by id, add media to array
                const updatedUser = await User.findByIdAndUpdate(
                    userId,
                    { $push: { media: savedMedia._id } },
                    { new: true }
                ).populate("media")

                // Return updated user
                return updatedUser
            } catch (error) {
                console.log("Error saving media: ", error)
            }
        },

        removeMedia: async (_, { userId, mediaId }) => {
            try {
                const updatedUser = await User.findByIdAndUpdate(
                    userId,
                    { $pull: { media: mediaId } },
                    { new: true }
                ).populate("media")

                return updatedUser
            } catch (error) {
                console.error('Error removing media', error)
            }
        }

    }

}

module.exports = resolvers