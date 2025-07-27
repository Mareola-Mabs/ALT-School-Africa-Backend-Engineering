const fs = require('node:fs')
const path = require('node:path')


// Getting the path to the files directory
const filesPath = path.join(__dirname, 'files')

// Opening the files directory
fs.readdir(filesPath, (err, files) => {
    if (err) throw err

    console.log("folder opened successfully")
    console.log(files)
})


// Creating a new folder
const newFolderPath = path.join(filesPath, 'new-folder')

fs.mkdir(newFolderPath, (err) => {
    if (err) throw err

    console.log("new folder created successfully")
})


// Renaming a folder
const oldFolderPath = path.join(filesPath, 'new-folder')
const newFolderName = path.join(filesPath, 'renamed-folder')

fs.rename(oldFolderPath, 'renamed-folder', (err) => {
    if (err) throw err

    console.log("folder renamed successfully")
})


// Deleting a folder
const folderToDelete = path.join(filesPath, 'tobedeleted-folder')

fs.mkdir(folderToDelete, (err) => {
    if (err) throw err

    console.log("folder created for deletion")

    setTimeout(() => {
        fs.rmdir(folderToDelete, (err) => {
            if (err) throw err

            console.log("folder deleted successfully")
        })
    }, 2000)
})