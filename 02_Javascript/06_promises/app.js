const url = prompt("Enter a URL to fetch data from:");

    let promise  = new Promise((resolve, reject) =>{

        if (!url){
            reject("No URL provided");
            return false;
        }
        else{
            const xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.send()
            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(xhr.response);
                } else {
                    reject(xhr.status);
                }
            };
        }
    });


    // Consuming the Promise
    promise
    .then(result =>{
        console.log("Data fetched successfully:", result);
    })
    .catch(status =>{
        if(!url){
            console.log("Error: No URL provided");
        }
        else{
            console.error(`Error: ${status}`);
        }
    })



 function getData(url){
    return new Promise((resolve, reject) => {
        url = "https://jsonplaceholder.typicode.com/posts"

        if (!url){
            reject("No URL provided");
            return false;
        }
        else{
            resolve(fetch(url));
        }
    })
 }

    // Consuming the Promise
 getData(url).then(result => {
    return result.json(); // parse JSON
}).then(data => {
    console.log("Data fetched successfully:", data);

}).catch(error => {
    console.error("Error fetching data:", error);
});




//   .then(response => {
//     return response.json(); // parse JSON
//   })
//   .then(data => {
//     console.log("Success:", data); // second .then handles the result
//   })
//   .catch(error => {
//     console.error("Something went wrong:", error); // catch handles any errors
//   });