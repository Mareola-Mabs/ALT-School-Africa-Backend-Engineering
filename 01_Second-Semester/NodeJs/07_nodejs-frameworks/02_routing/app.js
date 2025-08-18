const express = require('express')

const port = 4000

const app = express()


app.use(express.static('public'))

// Home Route
app.get('/', (req, res)=>{
    res.status(200).send('Hello World')
})

// About Route
app.get('/about', (req, res)=>{
    res.status(200).send('About Page')
})

// Contacts Route
app.get('/contacts', (req, res)=>{
    res.status(200).send('Contact Page')
})




app.listen(port, ()=>{
    console.log(`App running on http://localhost:${port}`)

})