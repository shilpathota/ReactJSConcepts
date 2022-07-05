function x(){
    console.log("call back function");
}

//Higher order Functions
function y(x){
    x();
}

const radius = [3, 1, 2, 4];

const calculateArea = function(radius){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}
console.log(calculateArea(radius));

const calculateCircumference = function(radius){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(2 * Math.PI * radius[i] );
    }
    return output;
}

console.log(calculateCircumference(radius));

//optimized code
const area = function(radius){
    return Math.PI * radius * radius;
}
const circumferenc =  function(radius){
    return 2* Math.PI*radius;
}

const calculate = function(radius,logic){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}

//similar to map implementation
Array.prototype.calculateVal = function(logic){
    const output = [];
    for(let i=0;i<this.length;i++){
        output.push(logic(this[i]));
    }
    return output;
}
console.log(calculate(radius,area));
console.log(calculate(radius,circumferenc));
console.log(radius.calculateVal(circumferenc));