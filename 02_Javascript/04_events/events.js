// Fire and Event When the User Highlights the Header

document.querySelector("header").addEventListener("click", (e)=>{
    alert("You Clicked the Header!");
    console.log(e.type);
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.target.textContent);
})

// Fire and Event When the User Copies the content of the Header
document.querySelector("header").oncopy = function (){
    alert("You copied the header content!");

    document.querySelector("header").textContent = "You copied the header content!";
    console.log(this.textContent)
}

// const header = document.querySelector("header")

// header.addEventListener("click", function (){
//     console.log(this.textContent);
// })


const footer = document.querySelector("footer");

 const inputNav = document.createElement("input");
    inputNav.type = "text";

footer.addEventListener("dragend", (event)=>{
    const x = event.clientX;
    const y = event.clientY;

    console.log(event )

    footer.style.left = x + "px";
    footer.style.top = y + "px";
    console.log(`Footer dragged to position: (${x}, ${y})`);
    inputNav.value = `position: (X: ${x}, Y: ${y})`;

})

footer.addEventListener("drag", (event)=>{
    const x = event.clientX;
    const y = event.clientY;


    inputNav.value = `position: (X: ${x}, Y: ${y})`;

    document.body.append(inputNav);
})


// Keyboard Events
// document.addEventListener("keydown", (e)=>{
//     console.log("You pressed a key: "+ e.key)

//     if (e.key === 'S' || e.key === 's'){
//         console.log("You have just pressed the 'S' key")
//     }

//     else if (e.altKey){
//         console.log("You just pressed the ALT key")
//     }

//     else if (e.ctrlKey && e.key === 's'){
//         console.log("You combined CONTROL + S")
//     }
// })

// document.addEventListener("keyup", (e)=>{
//     console.log(`You released the ${e.key} key`)
// })


// Key Combinnations (ALT Key)
document.addEventListener("keydown", (e)=>{
    if (e.altKey && e.key === "s"){
        console.log("You pressed ALT + s")
    }
})

// Key Combinnations (Control Key)
document.addEventListener("keydown", (e)=>{
    if (e.ctrlKey && e.key === "s"){
        console.log("You pressed Control + s")
    }
})

// document.addEventListener("keydown", (e)=>{
//     console.log(e.key)
// })

document.addEventListener("contextmenu", (e)=>{

    e.preventDefault();
    console.log("You disabled the context menu")
})


document.addEventListener("copy", (e)=>{

    e.preventDefault();
    console.log("You cannot copy this content")
})