//A clouser gives you access to an outer function's scope from an inner function
const outerFun = (a)=>{
    let b = 20;
    const innerFun =()=>{
        let sum = a+b;
        console.log(`Sum: ${sum}`);
    };
    innerFun();
};

outerFun(10);