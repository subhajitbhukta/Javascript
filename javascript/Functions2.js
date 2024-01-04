// ---Shoping cards---
//rest operator (...) / spread operator (...)
// function calculatePrice(...num1){
//     return num1
// }
// console.log(calculatePrice(300,200,100));


function calculatePrice(val1,val2,...num1){
    return num1
}
console.log(calculatePrice(300,200,100,600)); //first two index 300,200 (value1 value2) assign 
const myObj={
    name:"Subhajit",
    age1:21
} 

function anyObj(anyObj){
    console.log(`my name is ${anyObj.name} and my age ${anyObj.age}`);
}

// anyObj(myObj) 

//passing value in function object
// anyObj({
//     name:"Bhukta",
//     age:23
// }) 

const myNewArray = [200,400,100,600]

function returnSecondValue(anyArray){
    return anyArray[1]
}
 console.log(returnSecondValue(myNewArray)); 

 