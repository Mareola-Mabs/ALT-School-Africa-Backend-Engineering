const express = require('express')

const app = express()

const bodyParser = require('body-parser')

const path = require('node:path')


// Global Middleware
app.use(bodyParser.json())


// Importing Routers
const booksRouter1 = require('./routes/books')

// Using the books router
app.use('/books', booksRouter1)


app.set('view engine', 'ejs')
app.set('views', 'views')


app.use(express.static('./'))


// Default Routes
app.get('/', (req, res) => {
    res.render('index', {
        name: 'John', 
        age: 20})
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'app.html'))
})

app.get('/contact', (req, res) => {
    res.send('Contact Page')
})




app.use((req, res)=>{
    res.status(404).send("Page Not Found")
})








// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});