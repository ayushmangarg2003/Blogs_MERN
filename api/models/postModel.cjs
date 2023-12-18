// Imports
// import { Schema, model } from 'mongoose';
const mongoose = require('mongoose')

// User Schema
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    descr: {
        type: String,
        required: true,
    },
    cat: {
        type: String,
    },
    img: {
        type: String,
    },
    date:{
        type: Date
    },
    uid: {
        type: String,
    }
});

// User Register Method
postSchema.statics.post = async function (title, descr, img, uid, date, cat) {
    if (!title || !descr || !img) {
        throw Error('All fields must be filled')
    }
    const blog = await this.create({ title, descr, img, uid, date, cat })
    return blog
}

module.exports = mongoose.model('Blogs', postSchema);
