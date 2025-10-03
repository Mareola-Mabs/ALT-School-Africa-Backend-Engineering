const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')


const userModel = new mongoose.Schema({
    username: String,
    password: String
})


userModel.plugin(passportLocalMongoose) //Hashing, Salting, etc Using Passport


module.exports = mongoose.model('users', userModel)