const express = require('express')

const { getAllBook, createBook, getById, updateBook, deleteBook } = require('./04_books.controller')

const bookRoute = express.Router()

// READ all books fro DB
bookRoute.get('/', getAllBook)

bookRoute.get('/:id', getById)

bookRoute.post('/',  createBook)

bookRoute.put('/:id',  updateBook)

bookRoute.delete('/:id',  deleteBook)






module.exports = bookRoute