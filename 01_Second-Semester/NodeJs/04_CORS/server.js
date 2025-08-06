const http = require('node:http')



const hostname = 'localhost'
const port = 8000

const server = http.createServer(requestHandler)

function requestHandler(req, res){
    // Configure CORS

    console.log(req.headers.origin)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Content-Type', 'text/plain')

    res.writeHead(200)
    res.write("Hello There")
    res.end()

}


server.listen(port, hostname, ()=>{
    console.log(`Server running on https://${hostname}:${port}/`)
})



