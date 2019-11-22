
const method = {
    name: 'jiny',
    print: () => {
        console.log()
    }
}
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
class Properties {
    properties: string[];
    constructor(pros: string[]) {
        this.properties = pros;
    }
    toString(): string {
        let rt = ''
        this.properties.map((str) => (rt = rt + str + ' '))
        return rt;
    }
}
class Person {
    name: string;
    pro: Properties;
    constructor(name: string, pro: Properties) {
        this.name = name
        this.pro = pro
    }
    toString(): string {
        return 'name=>' + this.name + ' props=>' + this.pro.toString()
    }
}

let p1 = new Properties(['car', 'plane'])

let p2 = new Person('jimmy', p1)
console.log(p2.toString())

// Create an object:
var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    properties:
    {
        props: ['car', 'tank'],
        fullprop: () => {
            let fullprop = ''
            this.properties.props.map((x) => (fullprop += fullprop + x))
        }
    }
};

//console.log(person.fullName(),person.properties.fullprop())
