//It contains the current context
//This object can have different values depending on where it is placed
// Example 1
console.log(this)

// Example 2
function myData(){
    console.log(this);
};
myData()

//Example 3
var myName = "Gaurav";
function myData(){
    console.log(this.myName);
};
myData()

//Example 4
let resume = {
    myAge : 20,
    myFun(){
        console.log(this.myAge);
    }
};
resume.myFun();

// Example 5 
let resume = {
    myAge : 20,
    myFun: ()=>{
        console.log(this);
    }
};
resume.myFun();
