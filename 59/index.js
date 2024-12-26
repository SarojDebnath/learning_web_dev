console.log("FAULTY CALCULATOR")
function faulty(a,b) {
    console.log("FAULTY ONE: ")
    console.log("The result of addition is: ",a-b)
    console.log("The result of multiplication is: ",a+b)
    console.log("The result of subtsraction is: ",a/b)
    console.log("The result of division is: ",a**b)
}
let x=9
let y=2
for (let i = 0; i <10; i++) {
    k=Math.random()
    console.log("Parameter: ",k)
    if (k<0.1) {
        faulty(x,y)
    }
    else {
        console.log("The result of addition is: ",x+y)
        console.log("The result of multiplication is: ",x*y)
        console.log("The result of subtsraction is: ",x-y)
        console.log("The result of division is: ",x/y)
    }
}