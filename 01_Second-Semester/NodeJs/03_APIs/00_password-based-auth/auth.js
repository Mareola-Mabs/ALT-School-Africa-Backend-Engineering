const fs = require('node:fs')
const path = require('node:path')

const userDbPath = path.join(__dirname, 'db', 'users.json')

// Get ALl Users
function getAllUsers(){
    return new Promise((resolve, reject)=>{
        fs.readFile(userDbPath, 'utf-8', (err, data)=>{
            if (err){
                return reject(err)
            }

            resolve(JSON.parse(data))


        })
    })
}

// Auth Function
function authenticate(req, res){
    return new Promise((resolve, reject)=>{
        const body = []

        req.on('data', (chunk)=>{
            body.push(chunk)
        })

        req.on('end', async ()=>{
            try {
                const parsedBody = Buffer.concat(body).toString()

                if(!parsedBody){
                    return reject("No username or password provided")
                }

                const loginDetails = JSON.parse(parsedBody)

                const users = await getAllUsers()

                const userFound = users.find(user => user.username === loginDetails.username)

                if (!userFound){
                    return reject("User not Found, Kindly Signup")
                }

                if(userFound.password !== loginDetails.password){
                    return reject("Invalid Username or Password")
                }

                resolve()
            } catch (err) {
                reject(err.message || "An error occurred during authentication")
            }
        })
    })
}


module.exports = {
    authenticate
}