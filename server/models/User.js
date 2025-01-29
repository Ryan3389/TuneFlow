// Imports for user schema and password hash
const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt');

// User Schema
const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        match: [/.+@.+\..+/, 'Must match an email address'],
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    media: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Media'
        }
    ]
})

// Hash password if it is new or modified
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next()
})

// Create a method that checks if the password is correct
userSchema.methods.isCorrectPassword = async function (password) {
    await bcrypt.compare(password, this.password);
}

// Create the User model
const User = model("User", userSchema);


// Export User model
module.exports = User;