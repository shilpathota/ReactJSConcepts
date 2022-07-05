class Car {
    //constructor with props
    constructor(name) {
    this.brand = name;
    }
    //method
    mymethod() {
        return 'I have a ' + this.brand;
    }
}
//Inheritance
class Model extends Car {
    constructor(name, mod) {
    //refers to parent class
    super(name);
    this.model = mod;
    }  
    show() {
        return this.mymethod() + ', it is a ' + this.model
    }
}
//Object initialization
const mycar = new Car("Ford","Ecosport");
//method call
mycar.mymethod();