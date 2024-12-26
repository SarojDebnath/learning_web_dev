console.log("This is function tutorial")

function test(a,b,c=3) {
    console.log("This function adds")
    return a+b+c
}
console.log("The addition is: ",test(1,2,5))

let k=(x,y)=>{
    console.log(x+" is a boy of age "+y)
}
k("Saroj",28)