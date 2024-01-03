let myDate=new Date()
console.log(myDate)

console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleTimeString())
console.log(typeof myDate)  //object

// let createDate= new Date(2003,1,3 ,7,5)
// let createDate= new Date("03-02-2003 ")
// let createDate= new Date()

let createDate= new Date()
console.log(createDate.toLocaleString())

console.log(createDate.getTime()) // knowing exact time (milisecond) uses example... hotel booking site comparison

let myTimeStamp =Date.now()
console.log(myTimeStamp)

// console.log(Math.round(Date.now()/1000));
// console.log(createDate.getFullYear());
// console.log(createDate.getHours());
// console.log(createDate.getMinutes());

console.log(createDate.getDay());
console.log(createDate.getMonth()+1);


createDate.toLocaleString('default',{
    weekday:"long"
    // weekday:"short"
    // timeZone:"longGeneric"

})

console.log(createDate);