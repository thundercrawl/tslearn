"use strict";
exports.__esModule = true;
var p1 = { firstName: 'li', lastName: 'he', sayHi: function (message) { return message; } };
console.log(p1.sayHi('hi'));
var MyType = (function () {
    var x = function () {
        return "Some string"; // Dummy implementation 
    };
    x.text2 = function (content) {
        console.log(content); // Dummy implementation 
    };
    return x;
});
;
function addKeyValue(key, value) {
    console.log('addKeyValue: key = ' + key + ', value = ' + value);
}
function updateKeyValue(key, value) {
    console.log('updateKeyValue: key = ' + key + ', value = ' + value);
}
function bind1Result(key, value, result) {
    console.log('bind to result:', result);
}
var kvp = addKeyValue;
kvp(1, 'Bill'); //Output: addKeyValue: key = 1, value = Bill 
kvp = updateKeyValue;
kvp(2, 'Steve'); //Output: updateKeyValue: key = 2, value = Steve 
kvp = bind1Result;
kvp(2, 'hello', 222);
console.log(MyType());
