//! Different Ways to handle events in Javascript

//? Traditional Event Handlers (Property-Based):

document.getElementById("btn1").onclick=()=>{
    alert("I Was Clicked, Traditional Event")
}

// document.getElementById("btn1").onclick=function(){
//     alert("I Was Clicked, ")
// }

document.getElementById("btn2").ondblclick=()=>{
    alert("I Was Double Clicked, Traditional Event")
}

document.getElementById("btn3").onmouseover=()=>{
    alert("Mouse Was Over ME, Traditional Event Handler")
}

//? Modern Event Handlers (addEventListener):

document.getElementById("btnn1").addEventListener("click",()=>{
    alert("I was Clicked!!, Mordern Event")
})

document.getElementById("btnn2").addEventListener("dblclick",()=>{
    alert("I Was Double Clicked!!, Mordern Event")
})

document.getElementById("btnn3").addEventListener("mouseover",()=>{
    alert("Mouse Was Over Me, Mordern Event Handler")
})