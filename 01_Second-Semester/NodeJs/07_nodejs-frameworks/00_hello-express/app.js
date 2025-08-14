// Importing the express module
const express = require('express')

// Creating the Express App
const app = express()

const PORT = 8000


// Adding a Route for Home
app.get('/', (req, res) => {

    res.status(200)
    res.json({
        message: "Hello World"
    })
})

app.listen(PORT, ()=>{
    console.log(`app running on http://localhost:${PORT}`)
})