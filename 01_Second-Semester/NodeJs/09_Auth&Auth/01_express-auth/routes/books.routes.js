const express = require('express')


const bookRoute = express.Router()

const { getAllBook, createBook, getById, updateBook, deleteBook } = require('../controllers/books.controller')




bookRoute.get('/', getAllBook)

bookRoute.get('/:id', getById)

bookRoute.post('/',  createBook)

bookRoute.put('/:id',  updateBook)

bookRoute.delete('/:id',  deleteBook)






module.exports = bookRoute