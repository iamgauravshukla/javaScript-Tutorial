// String Padding
const message = "Hey There! hope you are good.";
console.log(message.padStart(20)) //check in browser console
console.log(message.padEnd(30))

//object.values() : Helpful using loop over objects
const person = {name: 'Gaurav',roll: 42,course: 'B.Tech',branch: 'CSE'};
console.log(Object.values(person));
console.log(Object.entries(person));//provide result in form of array
