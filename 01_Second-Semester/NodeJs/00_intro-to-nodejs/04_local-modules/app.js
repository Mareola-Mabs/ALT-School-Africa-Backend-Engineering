const mathfunc = require('./math-function')

const {add} = require('./math-function') //Destructuring

console.log(mathfunc.add(5, 3)); // Output: 8
console.log(mathfunc.sub(5, 3)); // Output: 2
console.log(mathfunc.mul(5, 3)); // Output: 15

console.log(add(2, 3))


const printName = require('./user');

printName('Alice'); // Output: Hello, Alice!