let resume = {
    myname : "Gaurav Shukla",
    age : 26,
    getData : function (){
        console.log(`${resume.myname} and age is ${resume.age}`);
    },
    //adding object
    skills : {
        tech : "HTML & CSS3",
        pro : "Python, R",
        base : "C"
    }
}
console.log(resume.skills.tech);
resume.getData();
