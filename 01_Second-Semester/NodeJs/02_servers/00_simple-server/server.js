const http = require('node:http')



const hostname = 'localhost'
const port = 8000


const server = http.createServer(requestHandler)

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})


function requestHandler(req, res){
    console.log(req)

    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*'
    })
    res.write("Hey there, this is a simple server!")
    res.write("Hey there, this is a Message!")
    
    res.end('Hello World')
}

console.log(http.STATUS_CODES)
