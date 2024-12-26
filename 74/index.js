let btn= document.getElementById("btn")
btn.addEventListener("click",(e)=>{
    document.querySelector(".box").innerHTML="<b>I have been Clicked.</b> Now enjoy!!"
    console.log(e)
})

btn.addEventListener("dblclick",(e)=>{
    document.querySelector(".box").classList.toggle("red")
    console.log(e)
})