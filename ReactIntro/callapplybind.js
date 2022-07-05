let nameValue = {
    firstname: "Shilpa",
    lastname: "Thota",
    printFullName: function () {
        console.log(this.firstname+ " " +this.lastname);
    }
}

nameValue.printFullName();

let name2 = {
    firstname: "Shilpa",
    lastname: "Thota",
}

//function borrowing
