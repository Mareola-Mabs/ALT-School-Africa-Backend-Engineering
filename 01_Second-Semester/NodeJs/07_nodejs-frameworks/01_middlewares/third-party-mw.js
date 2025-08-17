const express = require('express')

const logger = require('morgan')

const bodyParser = require('body-parser')

const app = express()

const port = 3000


const path = require('node:path')



// Adding a thirdparty middleware to parse the body
app.use(bodyParser.json())



// A third party middleware to log all requests to the console
app.use(logger('dev'))



app.get('/', (req, res)=>{
    res.status(200).send("Hello Third Party Middleware")
})


app.use('/users', (req, res, next)=>{
    const apiKey = req.body.apiKey

    if (!apiKey){
        res.status(401).send("Unauthorized")
    }
    next()
})

app.get('/users', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, 'public', 'users.json'))
})










app.listen(port, ()=>{
    console.log(`server running on http://localhost:${port}`)
})



