const db = require('../databases/database')

const BooksModel = db.books

function getAllBooks(){
    return BooksModel.findAll()
}

function getByIds(id){
    return BooksModel.findOne({ where: { id: id} })
}



function createBooks(data){
    return BooksModel.create(data)
}

function updateBooks(data, id){
    return BooksModel.update(data, {
            where: {
                id: id
            }
        })
}

function deleteBooks(id){
    return BooksModel.destroy({ where: { id: id} })

}




module.exports = {getAllBooks, createBooks, updateBooks, getByIds, deleteBooks}