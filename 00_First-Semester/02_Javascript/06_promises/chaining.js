let url = prompt("Enter a URL to fetch data from:");

function getData(url){
    return new Promise((resolve, reject) => {
        if (!url) {
            reject("URL is required")
        }
        else{
            const xhr = new XMLHttpRequest()
            xhr.open("GET", url)
            xhr.send()
            xhr.onload = function() {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject(`Error: ${xhr.status} ${xhr.statusText}`);
                }
            }
        }
    });
}


// Then Chaining
    getData(url).then(result => {
        console.log("Data fetched successfully 001:", result);
        return getData("https://jsonplaceholder.typicode.com/posts/1");
    })
    .then(result => {
        console.log("Data fetched successfully 002:", result);
        return getData("https://jsonplaceholder.typicode.com/posts");
    })
    .then(result => {
        console.log("Data fetched successfully 003:", result);
    })
    .catch(error => {
       if (!url){
         console.log("Kindly Provide a URL");
       }
       else {
         console.log("There was a problem with the fetch operation:", error);
       }
    });