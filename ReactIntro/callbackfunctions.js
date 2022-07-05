//What is a Callback Fucntion in javascript
function x(y){
    y()
}
x(function y(){})
function attachEventListeners(){
    let count=0;
    document.getElementById("clickMe").addEventListener("click",  function xyz(){
        console.log("Button Clicked",++count);
    });
}
attachEventListeners();