const asyncHandler = require('express-async-handler')
const Book = require('../models/bookModel')

const getBooks = asyncHandler(async (req, res) => {
    const books = await Book.find({})
    res.json(books)
})

const addBooks = asyncHandler(async (req, res) => {
    const { name, isbn, author, isTrending } = req.body

    const book = await Book.create({
        name,
        isbn,
        author,
        isTrending
    })

    res.json(book)
})

const deleteBooks = asyncHandler(async (req, res) => {
    const bookID = req.params.id
    const book = await Book.deleteOne({ _id: bookID })
    res.json(book)
})

const updateBooks = asyncHandler(async (req, res) => {
    const bookID = req.params.id
    const { name, isbn, author, isTrending } = req.body

    const book = await Book.findById(bookID)

    book.name = name
    book.isbn = isbn
    book.author = author
    book.isTrending = isTrending

    await book.save()
    res.json(book)
})

module.exports = {
    getBooks,
    addBooks,
    deleteBooks,
    updateBooks
}