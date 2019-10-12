//create an object 
export class Car {
    //field 
    engine: string;
    //constructor 
    constructor(engine: string) {
        this.engine = engine;
    }
    //function 
    disp(p:Person): void {
        if(p.age<=20)
        {
            console.log("you can not authroized to have a car")
        }
        else
        console.log("your age is good to achieve engine: " + this.engine);
    }
}

export class Person{
    name:string;
    gender:string;
    age:number;
    constructor(name:string,gender:string,age:number)
    {
        this.name =name;
        this.gender=gender;
        this.age = age;
    }
}