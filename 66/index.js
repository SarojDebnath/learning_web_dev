console.log("Factorial")
let numbers=[]
num=prompt("Enter what factorial do you want")
let product=1

for (let i = 0; i < num; i++) {
    numbers.push(i+1)
    product*=(i+1)
}
console.log("Result from for loop: ",product)
console.log(numbers)
let result = numbers.reduce((accumulator, currentValue) => accumulator * currentValue);
console.log("Result from reduce function",result); // Output: 15
