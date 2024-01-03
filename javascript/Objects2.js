// const tinderUser=new Object() //singletone object
// console.log(tinderUser);
 

//non singletone object
const tinderUser1={}  
tinderUser1.name="subhajit"
tinderUser1.id="12535adb"
console.table(tinderUser1);


const regularUser={
    email:"subhajitbhukta973@gmail.com",
    fullname:{
        firstName:"Subhajit",
        lastName:"Bhukta"
    }
}

console.table(regularUser);

console.table(regularUser.fullname.lastName);

const myobj1={1:"a",2:"b",3:"c",4:"d"}
const myobj2={5:"e",6:"f",7:"g",8:"h"}

const obj1={myobj1,myobj2}
console.table(obj1);


const obj2=Object.assign({},myobj1,myobj2)   //best {} used 
console.table(obj2);

const obj4={...myobj1,...myobj2}  //spread use for concat

console.log(obj4);

const users=[

    {
        
        id: 1,
        email:"subhajitbhukta973@gmail.com"
    },
    {
        
        id: 2,
        email:"subhajit973@gmail.com"
    },
    {
        
        id: 3,
        email:"bhukta973@gmail.com"
    }
    
]

console.log(users[0].email);
console.log(users[1].email);
console.log(users[2].email);

console.table(tinderUser1);

console.table(Object.keys(tinderUser1));  //keys of tinderUser1
console.table(Object.values(tinderUser1));  //values of tinderUser1
console.table(Object.entries(tinderUser1));  //entires of tinderUser1

console.log(tinderUser1.hasOwnProperty('id'));