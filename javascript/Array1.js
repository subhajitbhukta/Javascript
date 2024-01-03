const myArr1=["Name:Subhajit","Title:Bhukta","age-21"]
console.log(myArr1[0])

const myArr2=[1,2,3,4,5,6,7,8,]

myArr2.push(9,10,11)

console.log(myArr2)

myArr2.pop()

console.log(myArr2)

const myArr3=[1,2,3,4,5,6,7,8,]
myArr3.unshift(5) //shift on first index 
console.log(myArr3)
myArr3.shift()
console.log(myArr3)


console.log(myArr3.includes(7))
console.log(myArr3.indexOf(7))

const newArr =myArr3.join() //showin string format

console.log(myArr3)
console.log(newArr)


// slice  and splice ***

console.log("A",myArr3)

const myNo1=myArr3.slice(4,6) //print given range

console.log(myNo1)
console.log("B",myArr3)

const myNo2=myArr3.splice(4,6)
// console.log(myNo2)
console.log("C",myArr3)
console.log(myNo2)
