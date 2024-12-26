//destructuring
//iife
//hosting
//spread operator


//iife
async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 1000);
    })

}

/*//iife
(async function main() {
    let a = await sleep()
    console.log(a)
    let b = await sleep()
    console.log(b)
})()*/

//destructuring
(async function main() {
let [x,y,...rest]=[1,5,7,3,6,9,10]
console.log(x,y)
console.log(rest)
let a1={
    a:1,
    b:2
}
let {a,b}=a1
console.log(a,b)
})()


//spread operator

function sum(x,y) {
    return x+y
}
let arr=[2,3,6,8]
console.log(sum(...arr))