var _this = this;
var method = {
    name: 'jiny',
    print: function () {
        console.log();
    }
};
var Properties = /** @class */ (function () {
    function Properties(pros) {
        this.properties = pros;
    }
    Properties.prototype.toString = function () {
        var rt = '';
        this.properties.map(function (str) { return (rt = rt + str + ' '); });
        return rt;
    };
    return Properties;
}());
var Person = /** @class */ (function () {
    function Person(name, pro) {
        this.name = name;
        this.pro = pro;
    }
    Person.prototype.toString = function () {
        return 'name=>' + this.name + ' props=>' + this.pro.toString();
    };
    return Person;
}());
var p1 = new Properties(['car', 'plane']);
var p2 = new Person('jimmy', p1);
console.log(p2.toString());
// Create an object:
var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    properties: {
        props: ['car', 'tank'],
        fullprop: function () {
            var fullprop = '';
            _this.properties.props.map(function (x) { return (fullprop += fullprop + x); });
        }
    }
};
//console.log(person.fullName(),person.properties.fullprop())
console.log(this);
