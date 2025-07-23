const fs = require('node:fs')
const path = require('node:path')

// Getting the path to the files directory and the specific file
const filesPath = path.join(__dirname, 'files')

const newFilePath = path.join(filesPath, 'tobedeleted.txt')


// Write the fifle to ensure it exists
fs.writeFile(newFilePath, 'This file will be deleted', (err) => {
    if (err) throw err
    console.log('File created successfully')

    // Now delete the file in 5 seconds
    setTimeout(()=>{
            fs.rm(newFilePath, { force: true }, (err) => {
        if (err) throw err
        console.log('File deleted successfully')
    })
    }, 3000)
})

