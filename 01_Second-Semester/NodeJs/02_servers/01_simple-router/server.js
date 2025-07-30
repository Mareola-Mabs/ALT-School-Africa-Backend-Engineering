const http = require('node:http')

const {authors, books} = require('./fixtures')


http.createServer((req, res) => {
const {method, url} = req
res.setHeader('Content-Type', 'application/json');

switch (true){
    case (url === '/books' && method === 'GET'):
        res.end(JSON.stringify(books, null, 2))
        break

    case (url === '/authors' && method === 'GET'):
        res.end(JSON.stringify(authors, null, 2))
        break

    default:
        res.writeHead(404)
        res.end(`404: Page not Found "http://localhost/${url}"`)
       
}





}).listen(3000)
console.log(`Server is running on http://localhost:3000`)