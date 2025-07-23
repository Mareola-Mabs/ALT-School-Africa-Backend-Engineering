const fs = require('fs')
const path = require('path')

// Getting the path to the files directory and the specific file
const filesPath = path.join(__dirname, 'files')
const poemPath = path.join(filesPath, 'countries.json')


// Open a file asynchronously for reading
fs.open(poemPath, 'r', (err, fd) => {

    if (err) throw err

    
    console.log(fd) // fd is the file descriptor or file handler
    // You can now use fd to read from the file
    // For example, you can read the file using fs.read() or fs.readFile()
    
    fs.readFile(fd, 'utf8', (err, data) => {
        if (err) throw err
        
        console.log(data) // Output the content of the file
        fs.close(fd, (err) => {
            if (err) throw err
            console.log('File closed successfully')
        })
    })



})





