let rodent = {
    eats: true
}
let rabbit = {
    teeth: true
}
console.log(rabbit.teeth)
console.log(rabbit.eats)
rabbit.__proto__ = rodent
console.log(rabbit.eats)

class Animal {
    constructor(name) {
        this.name = name
        console.log("This is a constructor for Animal")
    }
    liv() {
        console.log("Yes it lives")
    }
    reproduce() {
        console.log("It reproduces too")
    }
}

class dog extends Animal {
    constructor(name) {
        super(name)
        this.name=name
        console.log(`This is a dog constructor${this.name}`)
    }
    darks(sound) {
        console.log(`${this.name} barks like ${sound}`)
    }
}

let a=new Animal("Jenny")
a.liv()
a.reproduce()
let newton=new dog("Newton")
newton.darks("woof")