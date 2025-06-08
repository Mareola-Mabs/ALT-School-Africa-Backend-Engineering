// const url = "https://jsonplaceholder.typicode.com/posts/1fffff"

// async function getData(url){
//     try{
//         let response = await fetch(url);
//         let data = await response.json();
        
//         if (data.length === undefined){
//             console.error("Error Fetching Data")
//         }
//         else{

//             console.log(`Success \n\n ${JSON.stringify(data)}\n\n`);
//         }


//         // Used instead of .then() chaining
//         response = await fetch("https://jsonplaceholder.typicode.com/posts/3");
//         data = await response.json();
//         console.log(`Success \n\n ${JSON.stringify(data)}\n\n`);



//         response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
//         data = await response.json();
//         console.log(`Success \n\n ${JSON.stringify(data)}`);



//     }
//     catch(error){
//         console.log(`The Fetch failed \n ${error}`)
//     }
// }

// getData(url)
// .then(result =>{
//     console.log(result)
// })
// .catch(error =>{
//     console.log(error)
// })


function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function aTimeout() {
  await delay(5000);
  console.log("Hello");

  await delay(1000);
  console.log("Hello two");
}

aTimeout();