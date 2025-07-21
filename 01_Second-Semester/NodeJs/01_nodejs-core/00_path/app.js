const path = require('path')


// Get path Seperator
const seperator = path.sep
console.log(seperator) // Outputs the platform-specific path separator, e.g., '/' on Unix, '\' on Windows


// Get basename of a file
const filePath = '/Users/username/Documents/file.txt'
const baseName = path.basename(filePath)
console.log(baseName) // Outputs: file.txt

// Get directory name of a file
const dirname = path.dirname('/home/mareola/Desktop/Tech/Backend_Engineering/ALT_School_Africa/ALT_School_Repo/ALT_School_Notes/01_Second-Semester/NodeJs/01_nodejs-core/00_path/app.js')
console.log(dirname)


// Get the extension of a file
const extname = path.extname('/Users/username/Documents/file.txt')
console.log(extname) // Outputs: .txt

// Join multiple path segments
const joinedPath = path.join('/Users/username', 'Documents', 'file.txt')
console.log(joinedPath) // Outputs: /Users/username/Documents/file.txt


// Get current working directory
const currentDir = path.resolve()
console.log(currentDir) // Outputs the current working directory, e.g., /Users/username

// Get the current file's directory
console.log(__dirname) // Outputs the directory of the current file, e.g., /Users/username/Documents/NodeJs/01_nodejs-core/00_path

// Get the current file's absolute path
console.log(__filename) // Outputs the absolute path of the current file, e.g., /Users/username/Documents/NodeJs/01_nodejs-core/00_path/app.js
