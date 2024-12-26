console.log("Promises");
let prom1 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        console.log("Yes I am done")
        resolve("Saroj")
    }, 3000)
})
prom1.then((e)=>{
    console.log(e)
})

let prom2=new Promise((resolve,reject)=>{
    let a =Math.random()
    if (a<0.5) {
        reject("Number below 0.5")        
    } else {
        setTimeout(() => {
            resolve("Saroj1")
        }, 3000);
    }
})

prom2.then((a)=>{
    console.log(a)
}).catch((e)=>{
    console.log(e)
})