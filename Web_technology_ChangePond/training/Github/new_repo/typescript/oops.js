"use strict";
// creating the oops concpts
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    //constractor 
    function Person(Firstname, Secondname, phonenumber, address, status) {
        // creating the data-member is also call as variable
        this.Firstname = "Basil";
        this.Secondname = "Ahamed";
        this.phonenumber = 917397061751;
        this.address = "chennai";
        this.status = true;
        this.Firstname = Firstname;
        this.Secondname = Secondname;
        this.phonenumber = phonenumber;
        this.status = status;
    }
    //member function here 
    Person.prototype.personaldetails = function () {
        return "firstname=".concat(this.Firstname, ", secondname=").concat(this.Secondname, ", phonenumber=").concat(this.phonenumber, ", address=").concat(this.address, ", status=").concat(this.status);
    };
    return Person;
}());
// creating the object for this class
// let detailsObj= new Person("basil","ahamed",7397061751, "Chennai", true);
//     console.log(detailsObj.Firstname)
//     console.log(detailsObj.personaldetails())
// let detailsObj1= new Person("mohamed","fawaz",9494294423, "Chennai", false);
//     console.log(detailsObj1.Firstname)
//     console.log(detailsObj1.personaldetails())
// let detailsObj2= new Person("mohamed","misha;",9494294423, "Chennai", false);
//     console.log(detailsObj2.Firstname)
//     console.log(detailsObj2.personaldetails())
// let detailsObj3= new Person("mohamed","farvez",9494294423, "Chennai", false);
//     console.log(detailsObj3.Firstname)
//     console.log(detailsObj3.personaldetails())
exports.default = Person;
