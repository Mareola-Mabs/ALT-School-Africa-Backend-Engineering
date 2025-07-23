const fs = require('node:fs')
const path = require('node:path')

// Getting the path to the files directory and the specific file
const filesPath = path.join(__dirname, 'files')

const newFilePath = path.join(filesPath, 'newFile.txt')

let content = `This is a new file created on ${new Date().toLocaleString()}`;

// Writing to a file asynchronously
// File will be created if it doesn't exist

fs.writeFile(newFilePath, content, (err) => {
    if (err) throw err

    console.log('File has been written successfully!');
})

 
// Append to a File Asynchronously
const appendContent = '\n\nThis is appended content.'

fs.appendFile(newFilePath, appendContent, (err) => {
    if (err) throw err

    console.log('Content has been appended successfully!')
})


// Append to a File Synchronously
try {
    fs.appendFileSync(newFilePath, '\nThis is appended content.')
    console.log('Content has been appended successfully!')
} catch (err) {
    console.error('Error appending content:', err)
}

// Write to a File Synchronously
try {
    fs.writeFileSync(newFilePath, content)
    console.log('File has been written successfully!')
} catch (err) {
    console.error('Error writing file:', err)
}

