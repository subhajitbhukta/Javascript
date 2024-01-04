//ignoring global scope polution we use immediately invoked function(IIFE)..***

// (function database(){
//     console.log("Database Connection Successfull");
// }) ();

// (database = () => {
    //named IFFE   
//     console.log("Database Connection Successfull");
// }) ();

((name) => {
    //no named IFFE
    console.log(`Hey ${name}, Database Connection Successfull`);
}) ("Subhajit");