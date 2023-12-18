// Imports
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

// User Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
});

// User Register Method
userSchema.statics.register = async function (name, email, password) {
    if (!name || !email || !password) {
        throw Error('All fields must be filled')
    }
    if (!validator.isEmail(email)) {
        throw Error('Enter a valid Email ID')
    }

    // const exists = await this.findOne({ email })
    // if (exists) {
    //     throw Error('User already exists')
    // }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const user = await this.create({ name, email, password: hash })
    return user
}

// User Login Method
userSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw Error('All fields must be filled')
    }

    const user = await this.findOne({ email })
    if (!user) {
        throw Error('User does not exist')
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        throw Error('Incorrect Credentials')
    }

    return user
}

// Exporting User Model
module.exports = mongoose.model('User', userSchema);
