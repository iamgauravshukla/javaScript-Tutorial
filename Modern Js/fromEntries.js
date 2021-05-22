const person = {name: 'Gaurav',roll: 42,course: 'B.Tech',branch: 'CSE'};
const objArr = Object.entries(person); //returns an array into result
console.log(Object.fromEntries(objArr));//convert resultant array back to in Object
