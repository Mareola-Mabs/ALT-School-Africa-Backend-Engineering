const express = require('express')
const bookRoute = express.Router()

const { getAllBook, createBook, updateBook, getById, deleteBook } = require('../controllers/book.controller') 


// READ all books fro DB
bookRoute.get('/', getAllBook)

bookRoute.get('/:id', getById)

bookRoute.post('/',  createBook)

bookRoute.put('/:id',  updateBook)

bookRoute.delete('/:id',  deleteBook)






module.exports = bookRoute