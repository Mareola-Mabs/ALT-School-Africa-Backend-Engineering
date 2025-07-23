const fs = require('fs')
const path = require('path')

// Getting the path to the files directory and the specific file
const filesPath = path.join(__dirname, 'files')
const poemPath = path.join(filesPath, 'poem.txt')


fs.readFile(poemPath, 'utf-8', (err, data)=>{
    if (err) throw err
    
    console.log(data)

})

// Read a file synchronously
try{
    const poemData = fs.readFileSync(poemPath, 'utf-8')

    console.log(poemData)
}
catch(err){
    console.log(err)
}