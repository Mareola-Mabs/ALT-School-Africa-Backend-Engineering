document.querySelector("button").addEventListener("click", (e)=>{
    e.stopPropagation(); // Prevents the event from bubbling up to parent elements
    console.log("You CLicked the Button")
})


document.querySelector("main").addEventListener("click", ()=>{
    console.log("You Clicked the Parent")
})