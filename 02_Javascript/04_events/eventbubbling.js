document.querySelector("button").addEventListener("click", (e)=>{
    e.stopPropagation(); // Prevents the event from bubbling up to parent elements
    console.log("You CLicked the Button")
})


document.querySelector("main").addEventListener("click", ()=>{
    console.log("You Clicked the Parent")
})


document.querySelectorAll(".container button")[0].addEventListener("click", (e)=>{
    e.stopPropagation()
    console.log("ok")

})

document.querySelector(".container").addEventListener("click", (e)=>{
    e.cancelBubble = true
    console.log(e.target.innerHTML, e.tiltX, e.type, e.cancelBubble)

    
})

console.log(screen.availWidth, screen.width, window.innerWidth)
