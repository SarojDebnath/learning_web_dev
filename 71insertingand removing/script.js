console.log(document.querySelector(".box").innerHTML)
document.querySelector(".box").innerHTML = "Its changed"
console.log(document.querySelector(".box").outerHTML)
let div=document.createElement("div");
div.setAttribute("class","created")
div.innerHTML="I have been inserted by <b>Java Script</b>"
document.querySelector(".container").append(div)
document.querySelector(".container").classList.toggle("red")
document.querySelector(".container").classList.toggle("red")
