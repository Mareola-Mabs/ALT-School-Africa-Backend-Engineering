// DIsplay the URL of the Webpage
console.log(location.href)

console.log(document.URL)

// Set the URL of a Page / Redirect the Page
// if (confirm("Open Google")){
//     location.href = "https://www.google.com";
// }


// Open a New Page Via Link Provided
// let aLink = prompt("Enter a Link");

// const theLink = document.createElement("a")

// theLink.href = aLink.toString()

// theLink.target = "_blank"


// const buttonClick = document.createElement("button")

// buttonClick.textContent = "Open Link"

// document.body.append(buttonClick)

// buttonClick.addEventListener("click", ()=>{
//     theLink.click()
// })

// // Reload the Page
// location.reload()

// Change the URL, and add a Parameter to the Link
// if (confirm("Ask Google a Question")){
//     location.href = "https://www.google.com/?q=javascript"
// }


// THE NAVIGATOR OBJECT

// Display the Browser Name
console.log(navigator.userAgent)

// Display the Browser Vendor / Creator
console.log(navigator.vendor)

// Display the Browser Language
console.log(navigator.language)

// Display the Browser Platform
console.log(navigator.platform)

// Display the Browser Online Status
console.log(navigator.onLine)

// Display the Browser Cookies Enabled Status
console.log(navigator.cookieEnabled)

// Display the Browser JavaScript Enabled Status
console.log(navigator.javaEnabled())

console.log(navigator.plugins)
console.log(navigator.connection)




// Get the User Location (Latitude and Longitude)
navigator.geolocation.getCurrentPosition((position) => {
    console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
}, (error) => {
    console.error("Error getting location:", error);
});