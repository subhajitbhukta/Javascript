// -----numbers-----

const score=523
console.log(score)

const number= new Number(125)
console.log(number)

console.log(number.toString().length)
console.log(number.toFixed(2))

const otherNumber=123.6564
console.log(otherNumber.toPrecision(3))

const hundreads=100000000
console.log(hundreads.toLocaleString('en-IN'));


// -----Maths-----

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.min(4,6,2,7,8))
console.log(Math.max(4,6,2,7,8))

//math random 

console.log(Math.random())
console.log(Math.round(Math.random()*10)+1)

const maximum=10
const minimum =30

console.log(Math.round(Math.random() * (maximum-minimum + 1))+minimum )