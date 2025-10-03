const express = require('express') //Express
const { connectToMongoose } =  require('./database') // Database Connection
require('dotenv').config() //Dotenv
const PORT = process.env.PORT
const bodyParser = require('body-parser')

const passport = require('passport') // Authentication
const sessionConfig = require('./configs/sessions.config')
const connectEnsureLogin = require('connect-ensure-login')

const userModel = require('./models/users.models')

const BookRoute = require('./routes/books.routes')

const app = express()

// Connecting to MongoDB instance
connectToMongoose()

app.use(sessionConfig) // Call the Session Middleware

app.use(passport.initialize()) // Initialize Passport
app.use(passport.session()) // Use Passport Session

passport.use(userModel.createStrategy()) // Use the user model to create a strategy

// Serialize and Deserialize User
passport.serializeUser(userModel.serializeUser())
passport.deserializeUser(userModel.deserializeUser())

// Set View Engine
app.set('views', 'views')
app.set('view engine', 'ejs')


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


// App Code Starts

app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/signup', (req, res)=>{
    res.render('signup')
})

app.get('/login', (req, res)=>{
    res.render('login')
})

app.post('/signup', (req, res)=>{
    const user = req.body
    userModel.register(new userModel({username: user.username}), user.password, (err, user)=>{
        if (err){
            console.log(err)
            res.status(400).send(err)
        }else{
            passport.authenticate('local')(req, res, ()=>{
                res.redirect('/books');  // redirect instead of render
            })
        }
    })
})
app.use('/books',connectEnsureLogin.ensureLoggedIn(), BookRoute) //Secure the Book Route

app.post('/login', passport.authenticate('local', {failureRedirect: '/login'}), (req, res)=>{
    res.redirect('/books')
})

app.post('/logout', (req, res, next) => {
  req.logout(err => {
    if (err) { return next(err) }
    res.redirect('/')
  })
})


app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})