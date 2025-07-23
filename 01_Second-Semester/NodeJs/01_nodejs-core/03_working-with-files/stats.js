const fs = require('node:fs')
const path = require('node:path')

// Getting the path to the files directory and the specific file
const filesPath = path.join(__dirname, 'files')
const poemPath = path.join(filesPath, 'poem.txt')

const jsonFilePath = path.join(filesPath, 'countries.json')


fs.stat(poemPath, (err, stats)=>{
    if (err) throw err

    console.log(stats.isFile()) // true if it's a file
    console.log(stats.isDirectory()) // true if it's a directory
    console.log(stats.size) // size in bytes
    console.log(stats.birthtime) // time of creation
    console.log(stats.mtime) // time of last modification
    console.log(stats.atime) // time of last access
    console.log(stats.ctime) // time of last change to the file's metadata
})


// Get the stats synchronously
try{
    const stats = fs.statSync(jsonFilePath)
    console.log(stats.isFile()) // true if it's a file
    console.log(stats.isDirectory()) // true if it's a directory
    console.log(stats.size) // size in bytes
    console.log(stats.birthtime) // time of creation
    console.log(stats.mtime) // time of last modification
    console.log(stats.atime) // time of last access
    console.log(stats.ctime) // time of last change to the file's metadata
}catch(err){
    console.error(err)
}