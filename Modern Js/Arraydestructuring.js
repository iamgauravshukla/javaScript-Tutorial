// Array Destructuring
const student = ['Gaurav','B.Tech','CSE',201];
//traditional method
let fname = student[0];
let course = student[1];
let branch = student[2];
let roll = student[3];

console.log(fname);

// Destructuring
let [fname,course,branch,roll] = student;
console.log(branch)
