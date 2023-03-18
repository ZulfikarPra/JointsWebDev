const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    isbn: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    isTrending: {
        type: Boolean,
        required: false,
        default: false
    }
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book