const express = require('express')

const booksRouter = express.Router()



const books = [
    {
        title: "War and Peace",
        id: 1,
        year: 2023
    },
    {
        title: "Things Fall Apart",
        id: 2,
        year: 2022
    },
    {
        title: "Geh Geh",
        id: 3,
        year: 2025
    }
]


// Promise for Fetching Books
function fetchBooks(req, res){
    return new Promise((resolve, reject)=>{
        if (req.body.username === "Mabs"){
            resolve(books)
        }
        else{
            return reject("Unauthorized")
        }

    })
}

// Fetching all Books
booksRouter.get('/', (req, res)=>{

    fetchBooks(req, res).then(book =>{
        res.status(200).send(book)
    }).catch(err =>{
        res.status(404).send(err)
    })
})


// Fetching a Particular Book
booksRouter.get('/:id', (req, res)=>{
    const id = req.params.id

    const book = books.find(book => book.id === parseInt(id))

    if (!book){
       return res.status(404).send("Book not Found")
    }
    res.status(200).send(book)
})


// Creating a Book
booksRouter.post('/', (req, res)=>{
    const book = req.body
    if (!book){
        return res.status(400).send("Bad Request")
    }

    book.id = !books? 1 : books[books.length - 1].id + 1
    
    books.push(book)

    res.status(200).send(books)
})

// Updating a Book
booksRouter.put('/:id', (req, res)=>{
    const id = parseInt(req.params.id)


    const newItem = req.body

    const bookUpdate = books.findIndex(index => index.id === id)

    if (bookUpdate === -1){
        return res.status(400).send("Book Does not Exist")
    }


    books[bookUpdate] = {...books[bookUpdate], ...newItem}


    res.status(200).send(books)


})


// Deleting a Book
booksRouter.delete('/:id', (req, res)=>{
    const id = parseInt(req.params.id)

    const booksId = books.findIndex(index => index.id === id)

    if (booksId === -1){
        return res.status(400).send("Book Does not Exist")
    }

    books.splice(booksId, 1)

    res.status(200).send(books)

})

module.exports = booksRouter