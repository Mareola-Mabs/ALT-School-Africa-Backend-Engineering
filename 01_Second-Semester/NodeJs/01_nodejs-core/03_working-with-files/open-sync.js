const fs = require('fs')
const path = require('path')

// Getting the path to the files directory and the specific file
const filesPath = path.join(__dirname, 'files')
const poemPath = path.join(filesPath, 'pom.txt')


// Open and Read the Files Synchronously
try {
    const fd = fs.openSync(poemPath, 'r')

    const data = fs.readFileSync(fd, 'utf-8')

    console.log(data)
}

catch (err){
    console.log("Error Opening File")
    console.log(err)
}
