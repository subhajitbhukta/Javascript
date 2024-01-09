// (===) also cheack type

// if (true) {
//     console.log("True Condition!");
// }else{
//     console.log("Not Execute");
// }

// <,>,<=,>=,!=,===,!== 
// const score=200
// if(score>100){
//     const power="fly"
//     console.log(`power: ${power}`);
// }

// console.log(`power: ${power}`);


// implicit code

//not best uses

// const balance =1000

// if(balance>500) console.log("test"),
// console.log("execute");


// if (100<500) {
//     console.log("true")
// } else if(100<200) {
//     console.log("not true")
// } else{
//     console.log("not execute")
// }



// const loggedIn=true
// const debitCard=true
// if (loggedIn && debitCard) {
//     console.log("login");
// }
// //else if(){
// //     console.log("Done UPI");
// // }
// else{
//     console.log("not eligible");
// }



// truthy or falsy value
// const userEmail=[]
// if (userEmail) {
//     console.log("Got user Email");
// }else{
//     console.log("Don't have user email");
// }



//falsy value
// false , 0, -0, BigInt 0n, "", null, undefined, NaN



//truthy value
// "0","false"," ", [], {}, function(){} //empty function
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }



// false==0 return true***
// const emptyObj={}
// if (Object.keys(emptyObj).length===0) {
//     console.log("Object  is empty");
// }




// Nullish Coalescing Operator (??): null undefined 
// let value1;
// // value1 = 5 ?? 10
// // value1=null ?? 10
// // value1=undefined ?? 15
// value1=null ?? 10 ??120
// console.log(value1);




// Terniary operator
// condition ? true : false 
const price=100
price>=80 ? console.log("Less than 80") : console.log("more than 80")
price<=80 ? console.log("Less than 80") : console.log("more than 80")