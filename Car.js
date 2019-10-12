"use strict";
exports.__esModule = true;
//create an object 
var Car = /** @class */ (function () {
    //constructor 
    function Car(engine) {
        this.engine = engine;
    }
    //function 
    Car.prototype.disp = function (p) {
        if (p.age <= 20) {
            console.log("you can not authroized to have a car");
        }
        else
            console.log("your age is good to achieve engine: " + this.engine);
    };
    return Car;
}());
exports.Car = Car;
var Person = /** @class */ (function () {
    function Person(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
    return Person;
}());
exports.Person = Person;
