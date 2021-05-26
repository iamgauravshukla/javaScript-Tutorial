// Callback and Higher Order function 
const sum = (a,b)=>{
    return a+b;
};
const sub = (a,b)=>{
    return a+b;
};
const mul = (a,b)=>{
    return a+b;
};
const div =(a,b)=>{
    return a/b;
};
//Advanced Method here Calculator is Higher order function
const calculator = (num1,num2,operator)=>{
    return operator(num1,num2);
};
console.log(calculator(13,7,sum));