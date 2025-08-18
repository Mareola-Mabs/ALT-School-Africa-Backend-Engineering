const express = require('express')

const fs = require('node:fs')

const path = require('node:path')

const bodyParser = require('body-parser')

const PORT = 5000

const app = express()

const usersFilePath = path.join(__dirname, 'db', 'users.json')


app.use(bodyParser.json())


app.get('/', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, 'public', 'home.html'))
})


// Getting Parameters from a request using the req.params and colon
app.get('/users/:id', (req, res)=>{
    const id = req.params.id


        fs.readFile(usersFilePath, 'utf-8', (err, data)=>{
            if(!data){
                return res.status(500).send("Error Reading From Database");
            }

            if (err){
                res.status(500).send("Error Reading Database")
            }

            let parsedData

            try{
                parsedData = JSON.parse(data)
            }
            catch(err){
                console.error("Invalid JSON format:", err.message);
                return res.status(500).send("Database is corrupted");
            }



            const user = parsedData.find(user => user.id === parseInt(id))

            if(!user){
                return res.status(404).send('User not Found')
            }

            res.status(200).send(user)
        })
    
    
})


// Getting multiple params from a request
app.get('/users/:id/:name', (req, res)=>{
    const id = req.params.id
    const name = req.params.name

    fs.readFile(usersFilePath, 'utf-8', (err, data)=>{
            if(!data){
                return res.status(500).send("Error Reading From Database");
            }

            if (err){
                res.status(500).send("Error Reading Database")
            }

            let parsedData

            try{
                parsedData = JSON.parse(data)
            }
            catch(err){
                console.error("Invalid JSON format:", err.message);
                return res.status(500).send("Database is corrupted");
            }


            const user = parsedData.find(user => user.id === parseInt(id) && user.name === name)


            if(!user){
                return res.status(404).send('User not Found')
            }

            res.status(200).send(user)
        })

})


// Using Regular Expressions ID must be numeric
app.get(/^\/items\/(\d+)$/, (req, res)=>{
    const id = req.params[0]

    res.send(id)
})


// Getting Query Parameters
app.get('/items/search', (req, res)=>{
    res.status(200).send(`The type is ${req.query.type}, and the Location is ${req.query.location}`)
})


// Getting Request Body
app.post('/items', (req, res)=>{
    res.status(200).send(`The type item is ${req.body['name']}, and the Location is ${req.body.location}`)
})


// Catch all Route
app.get('/*splat', (req, res) => {
    res.status(404).send("Page Not Found");
});



// Listening to Port
app.listen(PORT, ()=>{
    console.log(`App running on http://localhost:${PORT}`)
})



