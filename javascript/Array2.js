const name=["Subhajit","Subha","Jit"]
const age=[21,20,23]

// console.log(name)

// console.log(age)

// name.push(age)
// console.log(name)

// console.log(name[3][1])

const nameAge=name.concat(age)
console.log(nameAge)


const nameAndAge=[...name,...age] //use spread for concatination (...)
console.log(nameAndAge)

const flatUse=[0,[1,2],3,4,[5,6,7,8]]
console.log(flatUse);
const uses=flatUse.flat(Infinity)
console.log(uses)


//convert into Array

console.log(Array.isArray("Subhajit"))
console.log(Array.from("Subhajit"))



let score1=100
let scpre2=200
let score3=300
console.log(Array.of(score1,scpre2,score3));