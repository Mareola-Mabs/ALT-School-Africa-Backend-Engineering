const express = require('express')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT



const BookRoute = require('./routes/books.routes')

app.use(express.json())

app.use('/books', BookRoute)

app.get('/', (req, res)=>{
    res.send("Welcome to the Book API")
})

app.use((err, req, res, next)=>{
    console.log(err)
    res.status(500).json({
        error: err.message
    })
})



app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})



