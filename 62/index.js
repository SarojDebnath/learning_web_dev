/*
Adjective:
Crazy
Amazing
Cool

Shop Name:
Engine
Food
Plastic


Third Word:
Gmbh
Limited
Enterprise
 */
adjective={
    1:"Crazy",
    2:"Amazing",
    3:"Cool"
}
shop={
    1:"Engine",
    2:"Food",
    3:"Plastic"
}
Third={
    1:"Gmbh",
    2:"Limited",
    3:"Enterprise"
}

let a=Math.floor(Math.random()*3)+1
let b=Math.floor(Math.random()*3)+1
let c=Math.floor(Math.random()*3)+1
console.log(a)
console.log(b)
console.log(c)
for (let i = 0; i < 10; i++) {
    a=Math.floor(Math.random()*3)+1
    b=Math.floor(Math.random()*3)+1
    c=Math.floor(Math.random()*3)+1
    console.log(`The name of the shop is ${adjective[a]}${shop[b]}${Third[c]}`)
}
