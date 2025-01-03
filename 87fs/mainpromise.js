import fs from "fs/promises"

let a = await fs.readFile("testfile.txt")
console.log(a.toString())
let b=await fs.writeFile("testfile.txt","\nThis is a line")
console.log(b)

let c =await fs.appendFile("testfile.txt","\nThis is another Line")
console.log(c)

