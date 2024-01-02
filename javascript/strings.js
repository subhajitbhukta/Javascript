// backticks

let name= "Subhajit"
let surname="Bhukta"

console.log(`My name is ${name} and my surname is ${surname}`);  //// backticks symbols (``) best practice

//  key value pair

const nickName=new String("Subho")
console.log(nickName[0])
console.log(nickName.__proto__)


console.log(nickName.length)
console.log(nickName.toUpperCase())
console.log(nickName.toLowerCase())
console.log(nickName.charAt(3))
console.log(nickName.indexOf("o"))
console.log(nickName.substring(0,4)) //not work in negetive value
console.log(nickName.slice(-6,2)) //work in negetive value

//best uses in store data //count without whitespace using trim() function

const institute="    HIT     "
console.log(institute)
console.log(institute.trim())

const url="https://youtubersubho.com/subhajit%20bhukta"

console.log(url.replace('%20','-'))
console.log(url.includes("subha"))

let channel="Youtuber-Subho-by-subho"
console.log(channel.split('-'))