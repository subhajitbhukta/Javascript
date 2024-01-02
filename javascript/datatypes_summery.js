 //reference (not primitive data type)--->>>

// Array, objects, Functions

const id= Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId)

const names=["subho","jit","Bhukta"]
console.log(names);

let myObj = {
    name:"subhajit",
    title:"bhukta",
    age:21
}

console.log(myObj);

const myFunction=function(){
    console.log("Hello World!");
}
console.log(myFunction);