const http = require('node:http')
const fs = require('node:fs')
const path = require('node:path')

const bookPath = path.join(__dirname, 'db', 'books.json')

const htmlPath = path.join(__dirname, 'db', 'new.html')

const {authUser} = require('./auth')



const port = 8000
const hostName = 'localhost'

// Creating the Server
const server = http.createServer(requestHandler)


// Defining the Request Handler Function
function requestHandler(req, res){
    res.setHeader('content-Type', 'text/html')


    const {url, method} = req

    switch(true){
        case (url === '/books' && method === 'GET'): //READ
        // authentication
        authUser(req, res, ["admin", "reader"])
        .then(()=>{
            getAllBooks(req, res)
        }).catch(err => {
            res.writeHead(400)
            res.end(JSON.stringify({
                message: err
            }))
        })
        break

        case (url === '/books' && method === 'POST'): //CREATE
        // authentication
        authUser(req, res, ["admin"])
        .then((book)=>{
            addBook(req, res, book)
        }).catch(err => {
            res.writeHead(400)
            res.end(JSON.stringify({
                message: err
            }))
        })
        break

        case (url === '/books' && method === 'PUT'): //UPDATE
            updateBook(req, res)
        break

        case (url === '/books' && method === 'DELETE'): //DELETE
            deleteBook(req, res)
        break

        default:
            res.writeHead(404)
            res.end(`404: Page not Found "http://localhost/${url}"`)


    }
}



// Server Listening
server.listen(port, hostName, ()=>{

    console.log(`Server running on http://${hostName}:${port}`)
})


// Function to Fetch Books
function getAllBooks(req, res){
    fs.readFile(bookPath, 'utf-8', (err, data)=>{
        if (err) {
            res.writeHead(404)
            res.end("An Error Occurred")
            return
        }


        res.end(data)

    })
}


// Function to Create or Add a New Book
function addBook(req, res, book){

    fs.readFile(bookPath, 'utf-8', (err, data)=>{
        if (err) {
            console.log(err)
            res.writeHead(400)
            res.end("An error occurred")
        }


        const oldBooks = JSON.parse(data)

        const bookID = oldBooks.length? oldBooks[oldBooks.length-1].id:0


        book.id = bookID+1

        const allBooks = [...oldBooks, book]

        const {id, ...booksToDisplay} = book


        fs.writeFile(bookPath, JSON.stringify(allBooks), (err)=>{
            if (err) {
                console.log(err);
                res.writeHead(500);
                res.end(JSON.stringify({
                    message: 'Internal Server Error. Could not save book to database.'
                }))
            }

            res.end(JSON.stringify(booksToDisplay))
        })

    })
        
}


// Function to fetch the HTML Page
function getPage(req, res){
    fs.readFile(htmlPath, 'utf-8', (err, data)=>{
        if (err){
            res.writeHead(404)
            res.end("Error Fetching Page")
        }

        res.end(data)
    })
}


// Function to Update a Book
const updateBook = function(req, res){
    const body = []

    req.on('data', (chunk)=>{
        body.push(chunk)
    })

    req.on('end', ()=>{
        const parsedBody = Buffer.concat(body).toString()
        const bookDetailsToUpdate = JSON.parse(parsedBody)

        const bookId = bookDetailsToUpdate.id

        fs.readFile(bookPath, 'utf-8', (err, bookFileData)=>{
            if (err){
                res.writeHead(404)
                res.end("An Error Occurred", err)
            }

            const convertedBookFileData = JSON.parse(bookFileData)

            const bookIndex = convertedBookFileData.findIndex(num => num.id === bookId)

           if (bookIndex === -1){
            res.writeHead(404)
            res.end("Book with the specified ID not Found")
            return
           }

           const updatedBooks = {...convertedBookFileData[bookIndex], ...bookDetailsToUpdate}

           convertedBookFileData[bookIndex] = updatedBooks


           fs.writeFile(bookPath, JSON.stringify(convertedBookFileData), (err)=>{
            if (err){
                    res.writeHead(500)
                    res.end("Internal Server Error, Could not Update Database", err)
                }

                res.writeHead(200)
                res.end(`Data Updated`)
           })


        })
    })
}


// Function to Delete Books
function deleteBook(req, res){
    const body = []

    req.on('data', (chunk)=>{
        body.push(chunk)
    })

    req.on('end', ()=>{
        const parsedBody = JSON.parse(Buffer.concat(body).toString())

        const bookId = parsedBody.id

        fs.readFile(bookPath, 'utf-8', (err, data)=>{
            if (err){
                req.writeHead(400)
                req.end("An error Occurred Reading File")
            }

            const parsedBookFIle = JSON.parse(data)

            const bookIndex = parsedBookFIle.findIndex(num => num.id === bookId)


            if (bookIndex === -1){
                res.writeHead(404)
                res.end("Book with the specified ID not found")
                return
            }

            parsedBookFIle.splice(bookIndex, 1)

            fs.writeFile(bookPath, JSON.stringify(parsedBookFIle), (err)=>{
                if (err){
                    res.writeHead(500)
                    res.end(JSON.stringify({
                        message: 'Internal Server Error, Could not Delete Book'
                    }))
                }

                res.writeHead(200)
                res.end("Book Deleted Successfully")
            })
        })


    })
}

