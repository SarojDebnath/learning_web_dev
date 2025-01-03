const fs=require("fs")
console.log( "Lets Go")
//fs.writeFileSync("testfile.txt","Saroj is very successfull")//sync blocks the code
fs.writeFile("ano.txt","Another text",()=>{
    console.log("done")           //this is asynchronous
})
fs.readFile("textfile.txt",(error,data)=>{
    console.log(error,data.toString())
})
console.log("End")