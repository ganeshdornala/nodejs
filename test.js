/* I have published a package with the name "ganeshcalc" on npm.Now i installed it my self and using it for computing addition of 2 numbers .The package contains following code:
function add(a,b){
    console.log(a+b);
}

function sub(a,b){
    console.log(a-b);
}

function mul(a,b){
    console.log(a*b);
}

function div(a,b){
    console.log(a/b);
}

module.exports={
    addition:add,
    subtraction:sub,
    multiplication:mul,
    division:div
}
    */

var calc=require('ganeshcalc');
calc.addition(6,12);