// Introduced in ES2018 for objects 
const p1 = {name: 'Gaurav',roll: 42,course: 'B.Tech',branch: 'CSE'};
const p2 = {... p1,college: "PSU"};
console.log(p2);

//rest
function sumAll(...args) { // args is the name for the array
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
 console.log( sumAll(4) );
 console.log( sumAll(6, 2) );
 console.log( sumAll(7, 1, 3) );