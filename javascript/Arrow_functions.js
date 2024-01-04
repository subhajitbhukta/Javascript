// const user={
//     username:"Subhajit",
//     price:499,
//     WellcomeMsg: function(){
//         console.log(`${this.username}, just is logged in`);
//         // console.log(this);  //shown value
//     }
// }

// user.WellcomeMsg()

// user.username="subho"

// user.WellcomeMsg()

// console.log(this);   //empty bcz its not browser  //browser default object fn windows



// function chai(){
//     let userName="subho"
//     console.log(this.userName); // this not work in function // work in object
// }
// chai()


// const coffe = function(){
//     let userName="subho"
//         console.log(this.userName);
// }
// coffe()

// const coffe = () => {  //use arrow same work as a function
//     let userName="subho"
//         console.log(this);
// }
// coffe()

// -------explcitly arrow function---------  //use {} and  use return keyword //
// const addition = (num1,num2) => {
//     return num1+num2
// }
// console.log(addition(2,3));

// -------implicit arrow function---------
// const addition = (num1,num2) => num1+num2 //not use return keyword defined in a same line

// const addition = (num1,num2) => (num1+num2)

const addition = (num1,num2) => ({username:"Subhajit"})

console.log(addition(2,3))

// const myArray = [2,3,4,5,6,7]

// myArray.forEach(()  => {} )