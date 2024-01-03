//singleton

//object literals' 

// Object.create 

//object
const mySym= Symbol("key1")

const user={
    name:"Subhajit B",
    surname:"Bhukta",
    [mySym]:"Mykey1", //key must be stored in [] this format   without [] it will be shown undefined
    "Address":"Tarakeswar",
    age:21
} 
// Object.freeze(user) // use freeze can't change object value
// console.log(user.surname); 
// console.log(user."Address"); // can't access 
console.log(user["Address"]);  //that's why it's best useful 
// console.log(user[mySym]);
console.log(user[mySym]);
console.log(typeof mySym);  //symbol

user.name="subhajit" //changing the values in object
console.log(user)


user.greeting = function(){
    console.log("Hello JS User");
}
console.log(user.greeting())

user.greetingTwo = function(){
    console.log(`Hello JS User ${this.name}`);
}

console.log(user.greetingTwo())
