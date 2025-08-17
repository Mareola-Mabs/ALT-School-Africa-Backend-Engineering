const express = require('express')

const logger = require('morgan')

const bodyParser = require('body-parser')

const app = express()

const port = 3000



// Adding a static middleware
app.use(express.static('public'))




// Home route
app.get('/', (req, res)=>{
    res.status(200).send("Hello World")
})

app.listen(port, ()=>{
    console.log(`server running on http://localhost:${port}`)
})