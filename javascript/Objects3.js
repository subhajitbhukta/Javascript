const course={
    coursename:"JavaScript",
    price:"Free",
    courseTeacher:"Hitesh"
}

// course.coursename
// console.log(coursename);

// Object destructor 
const {coursename}=course
console.log(coursename);

const {coursename:instructor}=course //defined any name
console.log(instructor);


// React destructor 
// const navbar = ({company}) => {

// }
// navbar(company="subhajit")


// ----------API---------***(JSON{})

// key or values in string format

// {
//     "name":"subhajit",
//     "price": "Free",
//     "courseName":"Javascript" 

// }

// [
//     {},
//     {},
//     {}
// ]


