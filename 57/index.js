console.log('loop tutorial')
a=0
for (let i = 1; i < 10; i*=2) {
    const element = i;
    console.log(i)
}

let obj={
    name:"saroj",
    age:28,
    profession:"engineer"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key,element)
}

let name1 ="Hello"
for (const element of name1) {
    console.log(element+1)//Concatenated
}
let i=0
while (i<10) {
    console.log(i)
    i++
}