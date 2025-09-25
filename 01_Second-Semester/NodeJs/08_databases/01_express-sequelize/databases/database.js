const { Sequelize, DataTypes } = require('sequelize')

const CONFIG = require('../config/db.config')

const sequelize = new Sequelize(CONFIG.DB_NAME, CONFIG.DB_USER, CONFIG.DB_PASSWORD, {
  host: CONFIG.DB_HOST,
  dialect: CONFIG.DB_DIALECT
})


sequelize.authenticate().then(()=>{
    console.log('connection successful')
}).catch((err)=>{
    console.log(err)
})

const db = {}

db.sequelize = sequelize
db.Sequelize = Sequelize

// Adding the model
db.books = require('../models/book.model')(sequelize, DataTypes)

// Sync all models
db.sequelize.sync({ force: false}) // force:false will not drop the table if it already exists
    .then(()=>{
        console.log('Table sync successful')
    }).catch((err)=>{
        console.log(err)
    })

  
module.exports = db