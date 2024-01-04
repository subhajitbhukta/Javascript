//memory creation phase ( use for memory allocate)
//execution phase (use for execution)
//LIFO use in call stack

//   let val1=8
//   let val2=6

//   function addno(num1,num2){
//     return num1+num2
//   }

//   let result1=addno(val1,val2)
//   let result2=addno(4,7)
//   console.table(result1);
//   console.table(result2);

function one(){
    console.log("one");
    two()
}

function two(){
    console.log("two");
    three()
}

function three(){
    console.log("three")
}

one()
// two()
// three()