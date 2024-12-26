console.log('Array')
let arr=[1,2,3,8]
console.log(arr)
console.log(arr.length)
console.log(arr[3])
console.log(arr.join(" and "))
console.log(arr.toString())
console.log(arr.join(" and "))
k=arr.push(100)
console.log(arr)
//Shift removes 1st element and unshift adds 1st
//push--unshift
//pop--shift
let a1=[1,2,3]
let a2=[4,5,6]
let a3=[7,8,9]

a1=a1.concat(a2,a3)
console.log(a1)
console.log(a1.length)
let a4=[10,2,7]
console.log(a4.sort())
//splice(1,3) removes elements
//map, filter, reduce
let arr2=[8,8,9]
let newarr= arr2.map((e)=>{
    return e**2
})
console.log(newarr)