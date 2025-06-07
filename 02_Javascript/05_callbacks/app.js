// Simple Callback Example
// function greeting(name){
//     console.log("Hello " + name);
// }

// function processUserInput(callback) {
//     let name = prompt('Please enter your name.');
//     callback(name);
// }

// processUserInput(greeting);



// Example Two// Callback with XMLHttpRequest
// function success(result){
//     console.log("Success!: " + result);
// }

// function error(status){
//     console.log("An error with status code: " + status + " occurred.");
// }

// const url = prompt("Enter a URL")

// function getData(url, success, error){
//     if (!url){
//         return false
//     }
// }

// const xhr = new XMLHttpRequest();
// xhr.open("GET", url);
// xhr.send();
// xhr.onload = function(){
//     if (xhr.status === 200){
//         success(xhr.responseText); //Run Success on Callback
//     }
//     else{
//         error(xhr.status); //Run Error on Callback
//     }
// }

// getData(url, success, error);








// e.g use "https://jsonplaceholder.typicode.com/posts" as example URL

let url = prompt("Enter a URL")

if (!url) {
    console.log("No URL provided.")
    
}
else{
    const xhr = new XMLHttpRequest()
    xhr.open("GET", url)
    xhr.send()
    xhr.onload = function(){
    if (xhr.status === 200){
        console.log("Success!: " + xhr.responseText) //Run Success on Callback
    }
    else{
        console.log("An error with status code: " + xhr.status + " occurred.")
    }
}

}

console.log("Hello, I'm Here")



