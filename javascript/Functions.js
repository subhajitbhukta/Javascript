//  ------Functions------
//function myName() {
//     console.log("S")
//     console.log("U")
//     console.log("B")
//     console.log("H")
//     console.log("A")
//     console.log("J")
//     console.log("I")
//     console.log("T")
//  }

//  myName();


// function addNumers(number1,number2) {
//     // console.log("Subhajit") 
//     return number1+number2
//     // console.log("Subhajit") // not excute after return 
// }

// let a=addNumers(7,8)

// console.log(a)


function addNumers(number1,number2) {
    let total=number1+number2
    return total
}
let a=addNumers(7,8)
console.log(a)

// ---login ms g---
// function userLoggedIn(username){
//     return `${username} Just Logged In`
// }

// console.log(userLoggedIn("Subhajit"));


function userLoggedIn(username){
    if(username === undefined){
        console.log("Please Enter Username");
        return
    }
    return `${username} Just Logged In`
}

// console.log(userLoggedIn(""));
// console.log(userLoggedIn("Subhajit"));
console.log(userLoggedIn());

// function userLoggedIn(username = "Subho"){
//     if(!undefined){   //Changing Syntax
//         console.log("Please Enter Username")
//         return 
//     }
//     return `${username} Just Logged In`
// }

// // console.log(userLoggedIn(""));
// // console.log(userLoggedIn("Subhajit"));
// // console.log(userLoggedIn())
// console.log(userLoggedIn(""));


