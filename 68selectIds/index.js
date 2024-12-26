let container=document.body.children[0]
let box=container.children[2]
console.log(box)
box=document.getElementsByClassName("box")
console.log(box)
box[2].style.backgroundColor = "red"
document.getElementById("green").style.backgroundColor="green"
document.querySelector(".box").style.backgroundColor = "magenta"
document.querySelectorAll(".box1").forEach(e=>{
    e.style.backgroundColor="blue"
})