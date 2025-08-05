require('dotenv').config()


const TOKEN = process.env.API_KEY

function authUser(req, res){
    try{
        return new Promise((resolve, reject)=>{
        let token  = req.headers.authorization
        if (!token){
            return reject("No Token Provided")
        }

        token = token.split(" ")[1]

        if (token !== TOKEN){
           return reject("Invalid Token")
        }
        resolve()
    })
    }
    catch(err){
        reject(err.message || "An error occurred during authentication")
    }

}







module.exports = {
    authUser
}