let a = "Hello! "; //global scope

const mainFun = ()=>{
    let b = "How are you? ";
    const secondFun = () =>{
        let c = "I am good.";
        console.log(a+b+c);
    };
    secondFun();
    console.log(a+b+c); //This won't work as c is defined as inner function block variable
};

mainFun();
