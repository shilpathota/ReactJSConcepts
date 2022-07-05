myfirstarrow = () => {
    return "This is my first arrow function!";
}

//if one statement is present
myfirstarrowforonestatement = () => "This is my first arrow function for one line code!";

//if parameters are present
withparametersinarg = (arg1) => "My first argument " + arg1;

//if parameters are present and single line without parantheses
withparametersinarg2 = arg1 => "without parantheses " + arg1;

class Header {
constructor() {
    this.color = "Red";
}

//Regular function:
changeColor = function() {
    document.getElementById("demo").innerHTML += this;
}
}

const myheader = new Header();

//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);

class Header {
  constructor() {
    this.color = "Red";
  }

//Arrow function:
  changeColor = () => {
    document.getElementById("demo").innerHTML += this;
  }
}

const myheader = new Header();


//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);