let a=prompt("Enter first Number")
let b=prompt("Enter second Number")

let sum=parseInt(a)+parseInt(b)
if (isNaN(a) || isNaN(b)) {
    throw new Error("Enter Integer");
    
}
console.log("The sum is: ",sum)
try {
    
} catch (error) {
    
}
finally {
    
}