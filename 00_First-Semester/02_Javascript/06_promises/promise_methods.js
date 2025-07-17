// Promise.all() example


const promises = [
    fetch('https://jsonplaceholder.typicode.com/posts'),
    fetch('https://jsonplaceholder.typicode.com/posts/1'),
    fetch('https://jsonplaceholder.typicode.com/posts/2')
]

// Promise.all(promises)
//     .then(result => Promise.all(result.map(res => res.json())))

//     .then(data => {
//         console.log("All data fetched successfully:", data);
//     })
//     .catch(error => {
//         console.log("Error fetching data:", error);
//     })


// Promise.race(promises) // This will return the first failed or fulfilled promise
//     .then(result => {
//         return result.json(); // parse JSON
//     })

//     .then(data => {
//         console.log("All data fetched successfully:", data);
//     })
//     .catch(error => {
//         console.log("Error fetching data:", error);
//     })


// Promise.any(promises) // This will return the first fulfilled promise, ignoring rejections

// Promise.any(promises) // This will return the first failed or fulfilled promise
//     .then(result => {
//         return result.json(); // parse JSON
//     })

//     .then(data => {
//         console.log("All data fetched successfully:", data);
//     })
//     .catch(error => {
//         console.log("Error fetching data:", error);
//     })


// Promise.finally()
Promise.race(promises) // This will return the first failed or fulfilled promise
    .then(result => {
        return result.json(); // parse JSON
    })

    .then(data => {
        console.log("All data fetched successfully:", data);
    })
    .catch(error => {
        console.log("Error fetching data:", error);
    })
        .finally(() => {
            console.log("Promise operation completed, regardless of success or failure.");
        })


