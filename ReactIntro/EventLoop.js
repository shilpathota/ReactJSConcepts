console.log("Start");
setTimeout(function cb(){
    console.log("Call Back");
},5000);
console.log("End");
//Start
//End
//---> after this call stack is empty and once the timer is completed, the callback function cb() is put into callback queue which is picked up by event loop and then put into callstack where it is executed
//Call Back

console.log("Start");
document.getElementById("btn")
.addEventListener("click", function cb(){
    console.log("Call back");
});
console.log("End");
//Start
//End
//---> after this call stack is empty and the call back is registered to the browser waiting for user click. once the user clicks, the callback function cb() is put into callback queue which is picked up by event loop and then put into callstack where it is executed
//Call Back

console.log("Start");

setTimeout(function cbT(){
    console.log("CB SetTimeout");
},5000);

fetch("https://google.com")
.then(function cbF(){
    console.log("CB Google");
});
console.log("End");
//Start
//End
//CB Google
//CB setTimeout