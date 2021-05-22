//Dynamic Properties
var myname = "Gaurav"
let resume = {
    [myname] : "How are you?",
    [20+1] : " is your age",
};

console.log(resume);

//If key and value both are same then no need to write key and value

var myName = 'Gaurav Shukla';
var myAge = 21;
let bioData ={myName,myAge}
console.log(bioData);