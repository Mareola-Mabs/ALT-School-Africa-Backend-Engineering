const BooksModel = require('../models/books.models')

function getAllBooks(){
    return BooksModel.find()
}

function getByIds(data){
    return BooksModel.findById(data)
}



function createBooks(data){
    return BooksModel.create(data)
}

function updateBooks(id, data){
    return BooksModel.findByIdAndUpdate(id, data, {new: true})
}

function deleteBooks(data){
    return BooksModel.findByIdAndDelete(data)
}




module.exports = {getAllBooks, createBooks, getByIds, updateBooks, deleteBooks}