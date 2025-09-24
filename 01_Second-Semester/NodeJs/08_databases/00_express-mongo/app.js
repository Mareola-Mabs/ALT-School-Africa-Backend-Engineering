const express = require('express')
const { connectToMongoose } =  require('./books/00_books.database')
require('dotenv').config()

const BookRoute = require('./books/02_books.routes')


const app = express()

// Connecting to MongoDB instance
connectToMongoose()

const PORT = process.env.PORT

app.use(express.json())


app.get('/', (req, res)=>{
    res.send('Welcome Home!')
})

app.use('/books', BookRoute)


app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})