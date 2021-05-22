let resume = {
    myname : "Gaurav Shukla",
    age : 26,
    getData : function (){
        console.log(`${resume.myname} and age is ${resume.age}`);
    }
}
console.log(resume.myname);
resume.getData();

//another way to write functions inside objects
let resumeMain = {
    myname : "Gaurav Shukla",
    age : 26,
    getData(){
        console.log(`${resume.myname} and age is ${resume.age}`);
    }
}
console.log(resumeMain.myname);
resumeMain.getData();

