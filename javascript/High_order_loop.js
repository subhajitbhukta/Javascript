
//=========high order Forachloop map,filter,reduce=========***

// const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// =====forof loop=====

// for (const num of arr) {
//     console.log(num);
// }

// const greeting="Hello world"
// for (const greet of greeting) {
//     // console.log("For each word"+ greet);
// }


// ======map======
// const map = new map()
// map.set('91', "india")
// console.log(map);




// const myObj={
//     IN:"india",
//     USA:"America",
//     Fr:"France"
// }

// for (const keys in myObj) {
//     // console.log(keys);
//     // console.log(myObj[keys]);
//     console.log(`key is : ${keys} output is : ${myObj[keys]}`);
// }

// const p_language=["c","c++","java","python","javascript","html","css"]

// for (const values in p_language) {
//     console.log(values);        

// }


// const myObj=["name","roll","id"]

// myObj.forEach(function (num){
//     // console.log(num);
// })


// const myObj=["name","roll","id"]

// myObj.forEach((num) =>{
//     console.log(num);
// })


// function printme(item){
//     console.log(item);
// }

// myObj.forEach(printme)


// function printme(item,index,value){
//     console.log(item,index,value);
// }
// myObj.forEach(printme)



// let obj= myObj.forEach((item)=>{
//     console.log(item);                      //no return value
//     return item
// })
// console.log(obj);



// const num=[1,2,3,4,5,6,7,8,9]
// const key=num.filter((item)=> item>5 )
// console.log(key);



// const num=[1,2,3,4,5,6,7,8,9]
// const key=num.filter((item)=> {            //use block scope must be raturn the value
//     return item>5 
// })
// console.log(key);



//=======use in Database filter=======

// const coding = [
//     {
//         languageName:"Javascript",
//         extensionName:".Js"
//     },
//     {
//         languageName:"java",
//         extensionName:".Java"
//     },
//     {
//         languageName:"python",
//         extensionName:".py"  
//     }
// ];
// let extension = coding.filter ( (item) => item.extensionName === ".Java")

// console.log(extension);


// let extension = coding.filter((item) =>{
//     return item.extensionName === ".js"
    
// })



// coding.forEach((item) => {
//  console.log(item.languageName);
//  console.log(item.extensionName);
// })




// const myNum=[1,2,3,4,5,6,7,8,9]
// const num1=myNum.map((num)=> num+10) 
// console.log(num1);


// =======map======


// const myNum=[1,2,3,4,5,6,7,8,9]
// const newNums = myNum
//                 .map((num)=> num*10) //multiply by 10
//                 .map((num)=> num*10) //2nd multiply by 10
//                 .filter((num)=> num>129)  //give value grater than 129
// console.log(newNums);


// =======reduce=======

// const values=[1,2,3]

// const numbers=values.reduce((acc,curval)=>{
//     console.log(`accumulator value is : ${acc} and current value is :${curval}`);
//     return acc + curval
// },4)
// console.log(`after all final value is ${numbers}`);



// =================Add to cart price add in shopping site=============


// const shoppingCarts=[
//     {
//                 languageName:"Javascript",
//                 price:2999
//             },
//             {
//                 languageName:"java",
//                 price:3499
//             },
//             {
//                 languageName:"python",
//                 price: 1999
//             },
//             {
//                 languageName:"Web devlopment",
//                 price: 6999
//             },
//             {
//                 languageName:"App devlopment",
//                 price: 5999
//             }
// ];

// const addToCarts=shoppingCarts.reduce((acc,item)=> acc+item.price,0)
// console.log(addToCarts);