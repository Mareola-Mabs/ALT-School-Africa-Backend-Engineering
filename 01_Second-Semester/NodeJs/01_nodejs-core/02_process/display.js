const process = require('process')

const args = process.argv.slice(2)

function display(name, age){
    console.log(`Hello, ${name}! You are ${age} years old.`)
}

display(args[0], args[1])

