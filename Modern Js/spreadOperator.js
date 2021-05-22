const colors = ['green','red','sky','cyan'];
const myColors = ['green','red','sky','cyan','teal','black','brown'];//Traditional Method
//using spread operator adding all data from other array to another one
const myFavColor = ['orange','blue', ...colors];
console.log(myFavColor);