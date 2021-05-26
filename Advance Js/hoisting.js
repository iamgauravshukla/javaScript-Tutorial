// Hoisting is a mechanism in JavaScript that moves the declaration of variables and functions at the top. 
//So, in JavaScript we can use variables and functions before declaring them.

//Example 2
console.log(Myname);
var Myname;
Myname = "Gaurav";

//Example 2
var Myname = undefined;
console.log(Myname);
Myname = "Saurav"

// to avoid hoisting use 'let' instead of 'var'
