// stack (primitive)  Heap (Non-primitive)

let name="subhajit"
let title= name;
title="Bhukta"

console.log(name)
console.log(title)


let myObj={
    name:"subho",
    age:20
}


let myObjTwo=myObj
myObjTwo.name="Subhajit bhukta"
myObjTwo.age=21

console.log(myObjTwo.name)
console.log(myObjTwo.age)