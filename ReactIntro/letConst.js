console.log(a); // a gives reference error
var a = 10;
let b=100;
const c = 40;
let d = 20;
var e = 25;
{
    var a = 100;
    let b = 20;
    const c = 30;
    var d = 50;//illegal shadowing 
    let e = 35;//it works as let is block scoped and does not interfere with the e value in global execution context
    console.log(a);//10
    console.log(b);//20
    console.log(c);//30
}
console.log(a);//10
console.log(b);//100
console.log(c);//40

