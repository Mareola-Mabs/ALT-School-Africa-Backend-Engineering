const {getAllBooks, createBooks, updateBooks, getByIds, deleteBooks} = require('../services/book.services')


async function getAllBook(req, res){
    try{
        const books = await getAllBooks()
        if (book === null){
            return res.status(404).json({message: "Book Not Found"})
        }
        res.status(200).json(books)
    }
    catch(err){
        res.status(500).json({error: err.message})
    }
}

async function getById(req, res){
    try{
        const book = await getByIds(req.params.id)
            if (book === null){
            return res.status(404).json({message: "Book Not Found"})
        }
        res.status(200).json(book)
    }
    catch(err){
        res.status(400).json({error: 'Book Not Found'})
    }
}

async function createBook(req, res){
    try{
        const book = await createBooks(req.body)
        res.status(201).send({
            message: 'Book Created Successfully',
            data: book
        })
    }
    catch(err){
        res.status(400).json({error: err.message})
    }
}

async function updateBook(req, res){
    const data = req.body
    try{
        const book = await updateBooks(data, req.params.id)
        res.status(201).send({
            message: 'Book Updated Successfully',
            data: book
        })
    }
    catch(err){
        res.status(400).json({error: err.message})
    }
}

async function deleteBook(req, res){
    try{
        const book = await deleteBooks(req.params.id)
        res.status(201).send({
            message: 'Book Deleted Successfully',
            data: book
        })
    }
    catch(err){
        res.status(400).json({error: err.message})
    }
}



module.exports = { getAllBook, createBook, updateBook, getById, deleteBook }