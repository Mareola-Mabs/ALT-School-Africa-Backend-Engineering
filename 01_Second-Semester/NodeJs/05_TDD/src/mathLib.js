// Add Function
function add(a, b){
    return a + b
}

// Subtract Function
function sub(a, b){
    return a - b
}

// Multiplication Function
function mul(a, b){
    return a * b
}

// Power Function
function pow(a, b){
    return a ** b
}

// Division Function
function div(a, b){
    return a / b
}

// Mean Function
function mean(arg){
   return arg.reduce((acc, num)=> acc + num) / arg.length
}



module.exports = {
    add, sub, mul, pow, div, mean
}

console.log(mean([1, 2, 3, 4, 5]))