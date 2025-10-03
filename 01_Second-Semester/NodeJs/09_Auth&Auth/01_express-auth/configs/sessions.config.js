const session = require('express-session') // Session Middleware
require('dotenv').config()

const sessionConfig = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60 * 60 * 1000 }, // 1 hour
  secure: true, // only send cookie over HTTPS
  httpOnly: true, // prevent client-side JS access (good security)
  sameSite: 'strict' // protect against CSRF
})


module.exports = sessionConfig