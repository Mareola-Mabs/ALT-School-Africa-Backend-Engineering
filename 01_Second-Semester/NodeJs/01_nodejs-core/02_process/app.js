const process = require('node:process')

// Display the current Node.js version and other process information
console.log(process.versions)


// Get the nodejs Release
console.log(process.release)

// Exit a script cleanly
// process.exit(0) // Any non-zero value indicates an error
                // Any code after here won't be executed



// Write to the Terminal
process.stdout.write('Hello, World!\n')


// Read command line arguments
console.log(process.argv)

// Read environment variables
console.log(process.env)
console.log(process.env.TEST_ENV

) //en_US.UTF-8


// Get current working directory
console.log(process.cwd())

