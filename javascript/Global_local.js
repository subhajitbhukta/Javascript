//  local and global scope
let b=13

if(true){
    const a=12
    let b=16
    var c=50 //Thats why var not use it can be override global defination
    // console.log(`inner(local)value: ${b}`);
}

// console.log(a);
// console.log(b);
// console.log(c);  //Thats why var not use it can be override global defination
// console.log(b);


// function demo1(){
//     const userName="Subhajit"

//     function demo2(){
//        const tutorial="Javascript"
//         console.log(userName);
//     }
//     demo2();
//     // console.log(tutorial);
// }
// demo1();



if(true){
    const username="Subhajit"
    if(username==="Subhajit"){
        const age=21
        // console.log(username + age);
    }
    // console.log(username);
}
// console.log(age);  



// ---------intersting---------***

// console.log(value(5)); //allow to access

function value(num){
    return num+1
}

// console.log(value(5));

// console.log(value1(5)); //not access throw error

const value1=function (num1){
    return num1 +1
}
// value(6)