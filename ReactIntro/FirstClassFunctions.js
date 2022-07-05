//Function Statement or Function Declaration
function a(){
    console.log("a called");
}

//Function Expression - assign function to variable
const b = function (){
    console.log("b called");
}
/**
 * Difference between Function Statement and Function Expression:
 * Hoisiting - a is assigned with the function completely where as b is assgined undefined untill it encounters the line
 */

//Anonymous Function - Function without 
// These are used when functions are used as values
function (){

}
//Named Function Expression
//Same as Function Expression but give name to function also
const c = function xyz(){
    console.log("c called");
}
//but we cannot call xyz outside as it is restricted to function
//Difference between Parameters & Arguments
const d = function(param1,param2){
    console.log("d called");
}
d(1,2);
//param1 and param2 are parameters
//1,2 are arguments
//First Class Functions or First Class Citizens
const e = function(param1){
    param1();
    return function xyz(){
        console.log("returning a function");
    }
}
var f = function(){
    console.log("function passed as argument");
}
e(f);

//Arrow Functions

