let arr = [['Dog','Cow'],['Parrot','Owl'],['Lion','Tiger',['Monkey','Elephant',['Crocodile','Python']]]];

//to flaten an array need to define a reduce method
let flat = arr.reduce((accum,currenEl)=>{
    return accum.concat(currenEl);
})
console.log(flat);

// using flat method we got same work in one line 
console.log(arr.flat());//By default it flatens only at 1 level
//you need to set parameter for multiple array into array
console.log(arr.flat(2))//

//you can pass Infinity as parameter if you don't know the levels of array
console.log(arr.flat(Infinity));
