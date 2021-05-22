// Object Destructuring
let resume = {
    myname : "Gaurav Shukla",
    age : 26,
    getData : function (){
        console.log(`${resume.myname} and age is ${resume.age}`);
    }
} 
// traditional method \
let fname = resume.myname;
resume.getData();
console.log(fname);

//Destructuring
let {myname,age,getData} = resume;
console.log(myname);
getData();
