const fs=require("fs")
console.log("Starting")
fs.readFile("testfile.txt",(error,data)=>{
    console.log(error,data.toString())
})
fs.appendFile("testfile.txt","Sarojrobo",(e,d)=>{
    console.log(d)
})
console.log("Ending")