const mongoose = require('mongoose')

require('dotenv').config()

const CONNECTION_URL = process.env.MONGO_DB_CONNECTION_URL

async function connectToMongoose() {
  try {
    await mongoose.connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log("MongoDB Connection Successful")

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB Error:", err.message)
    })

    mongoose.connection.on("disconnected", () => {
      console.warn("MongoDB Disconnected")
    })

    mongoose.connection.on("reconnected", () => {
      console.log("MongoDB Reconnected")
    })
  } catch (err) {
    console.error("Initial MongoDB Connection Failed:", err.message)
    process.exit(1); // exit app if DB connection fails at startup
  }
}

module.exports = {
  connectToMongoose,
}