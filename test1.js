"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var Car_1 = require("./Car");
var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function (name) {
        console.log("Hello World!!!", name);
    };
    return Greeting;
}());
var obj = new Greeting();
var name_1 = 'mary';
obj.greet(name_1);
var str = 1;
var str2 = str; //str is now of type number 
console.log(str2);
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("sum of the numbers", sum);
}
addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 10);
function calculate_discount(price, rate) {
    if (rate === void 0) { rate = 1111; }
    var discount = price * rate;
    console.log("Discount Amount: ", discount);
}
calculate_discount(1000);
calculate_discount(1000, 0.30);
//Anonymous Recursive Function
(function () {
    var x = "Hello!!";
    console.log(x);
})();
var foo = function (x) {
    x.forEach(function (element) {
        console.log(element);
    });
};
console.log(foo([1, 2, 3]));
//variatations for lamda
var func = function (x) {
    if (typeof x == "number") {
        console.log(x + " is numeric");
    }
    else if (typeof x == "string") {
        console.log(x + " is a string");
    }
};
func(12);
func("Tom");
//type
var alphas;
alphas = ["1", "2", "3", "4"];
console.log(alphas[0]);
console.log(alphas[1]);
//union type
function disp(name) {
    if (typeof name == "string") {
        console.log(name);
    }
    else {
        var i;
        for (i = 0; i < name.length; i++) {
            console.log(name[i]);
        }
    }
}
exports.disp = disp;
disp("mark");
console.log("Printing names array....");
disp(["Mark", "Tom", "Mary", "John"]);
//commandline as string 
var options = { program: "test1", commandline: "Hello" };
console.log(options.commandline);
//commandline as a string array 
options = { program: "test1", commandline: ["Hello", "World"] };
console.log(options.commandline[0]);
console.log(options.commandline[1]);
//commandline as a function expression 
options = { program: "test1", commandline: function () { console.log('call function type'); return "Final results"; } };
var fn = options.commandline;
console.log(fn());
//create an object 
var obj1 = new Car_1.Car("XXSY1");
//access the field 
console.log("Reading attribute value Engine as :  " + obj1.engine);
var p1 = new Car_1.Person('jimmy', 'man', 32);
var p2 = new Car_1.Person('simmy', 'women', 18);
//access the function
obj1.disp(p1);
obj1.disp(p2);
//https://github.com/tc39/proposal-object-rest-spread
//rest parameter
var _a = { x: 1, y: 2, a: 3, b: 4 }, x = _a.x, y = _a.y, z = __rest(_a, ["x", "y"]);
console.log(z);
//spread parameter
var n = { x: x, y: y, z: z };
console.log(n);
//practice of the spread parameters
var parentArray = [[1], [2]];
var childArray = { value: [3] };
console.log(typeof (childArray.value));
console.log('spread parameters:', __spreadArrays(parentArray, childArray.value));
console.log({ 'name': 'jimmy' });
//template
function identity(arg) {
    return arg;
}
console.log(identity("jimmy"));
//()
console.log();
var t1 = 'sssss';
console.log("" + t1);
