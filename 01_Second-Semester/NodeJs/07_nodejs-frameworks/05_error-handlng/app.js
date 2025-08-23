const express = require('express')

const app = express()

const fsPromises = require('node:fs').promises


app.use(express.json())
app.use(express.static('public'))


// Set EJS as the view engine
app.set('view engine', 'ejs')

// Set the views directory to 'public'
app.set('views', 'public')


// Simple route
app.get('/', (req, res) => {
    res.status(200).render('error', {
        errors: 'An Error Occurred (404)'
    }) // Looks for 'views/index.ejs'
})


// Getting a file that doesn't exist
app.get('/file', async (req, res)=>{
    let file
     try{
        file = await fsPromises.readFile('./no-such-file.txt')
        res.send(file)
     }
     catch(errors){
        res.render('error', {
        errors: 'Error Reading File'
    }) // Looks for 'views/index.ejs'
     }
})

app.get('/files', async (req, res, next)=>{
    let file
     try{
        file = await fsPromises.readFile('./no-such-file.txt')
        res.send(file)
     }
     catch(err){
        err.type = 'Not Found'
        next(err)
     }
})

app.get('/user', async (req, res, next)=>{
    let file
     try{
        file = await fsPromises.readFile('./no-such-file.txt')
        res.send(file)
     }
     catch(err){
        err.type = 'Redirect'
        next(err)
     }
})



app.use((req, res)=>{
    res.status(404).send("Page Not Found")
})


app.use((err, req, res, next)=>{
    console.log("Error handling Middleware Called")
    console.log('path', req.path)
    console.log("Error", err)


    if (err.type === 'Redirect'){
        res.redirect('error.html')
    }
    else if (err.type === 'Not Found'){
        res.status(404).send("File Not Found")
    }
    else{
        res.status(500).send(err)

    }

    next()
})




// Start server on port 3000
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
})