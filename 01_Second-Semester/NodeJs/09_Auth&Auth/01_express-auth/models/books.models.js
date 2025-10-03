const mongoose = require('mongoose')

const { Schema } = mongoose

const bookSchema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    year: {type: Number, required: true, max: [2030, 'Year must be less than or equal to 2022']},
    isbn: {type: String, required: true, unique: [true, 'ISBN must be Unique']},
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()}
})

 module.exports = mongoose.model('books', bookSchema)