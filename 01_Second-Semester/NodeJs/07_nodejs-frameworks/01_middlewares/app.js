const express = require('express')

const path = require('node:path')

const app = express()

const PORT = 8000







// Defining first middleware
app.use((req, res, next)=>{
    console.log(req.method, req.path)
    next()
})

app.use((req, res, next)=>{
    console.log(JSON.stringify(req.headers))
    console.log(req.headers['user-agent'])
    next()
})


// Home Route
app.get('/', (req, res)=>{
    res.status(200)
    res.sendFile(path.join(__dirname, "public", "home.html"))
})





// Middleware to Check API Key
app.use('/users', (req, res, next)=>{
    const APIKEYS = req.query.apikey

    APIKEYS? next(): res.status(401).send("Unauthorized")
})

app.get('/users', (req, res)=>{
    res.sendFile(path.join(__dirname, "public", "users.json")) 
})






// Error handling middleware
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send(err.message || "Something broke!");
});



// Listening to Port
app.listen(PORT, ()=>{
    console.log(`App running on http://localhost:${PORT}`)
})