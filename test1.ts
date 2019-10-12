import {Car,Person} from './Car';

class Greeting { 
    greet(name:string):void { 
       console.log("Hello World!!!",name) 
    } 
 } 
 var obj = new Greeting(); 
 var name_1:string = 'mary'
 obj.greet(name_1);

 var str =1
var str2:number = <number> str   //str is now of type number 
console.log(str2)

function addNumbers(...nums:number[]) {  
    var i;   
    var sum:number = 0; 
    
    for(i = 0;i<nums.length;i++) { 
       sum = sum + nums[i]; 
    } 
    console.log("sum of the numbers",sum) 
 } 
 addNumbers(1,2,3) 
 addNumbers(10,10,10,10,10)

 function calculate_discount(price:number,rate:number = 1111) { 
    var discount = price * rate; 
    console.log("Discount Amount: ",discount); 
 } 
 calculate_discount(1000) 
 calculate_discount(1000,0.30);

//Anonymous Recursive Function
 (function () { 
    var x = "Hello!!";   
    console.log(x)     
 })() 


 var foo = (x:number[])=> { x.forEach(element => { console.log(element)
     
 }); }
console.log(foo([1,2,3])) 

//variatations for lamda
var func = x=> { 
    if(typeof x=="number") { 
       console.log(x+" is numeric") 
    } else if(typeof x=="string") { 
       console.log(x+" is a string") 
    }  
 } 
 func(12) 
 func("Tom")

 //type
 var alphas:string[]; 
alphas = ["1","2","3","4"] 
console.log(alphas[0]); 
console.log(alphas[1]);

//union type
export function disp(name:string|string[]) { 
    if(typeof name == "string") { 
       console.log(name) 
    } else { 
       var i; 
       
       for(i = 0;i<name.length;i++) { 
          console.log(name[i])
       } 
    } 
 } 
 disp("mark") 
 console.log("Printing names array....") 
 disp(["Mark","Tom","Mary","John"])

 //interface
 export interface IPerson { 
    firstName:string, 
    lastName:string, 
    sayHi: ()=>string,
    (name:string,gender:string):any
 } 
// var customer:IPerson = {
//     firstName:"Tom",
//    lastName:"Hanks", 
//    sayHi: ():string =>{return "Hi there"},
   
// } 
// customer.sayHi()


interface RunOptions { 
    program:string; 
    commandline:string[]|string|(()=>string); 
 } 
 
 //commandline as string 
 var options:RunOptions = {program:"test1",commandline:"Hello"}; 
 console.log(options.commandline)  
 
 //commandline as a string array 
 options = {program:"test1",commandline:["Hello","World"]}; 
 console.log(options.commandline[0]); 
 console.log(options.commandline[1]);  
 
 //commandline as a function expression 
 options = {program:"test1",commandline:()=>{ console.log('call function type');return "Final results";}}; 
 
 var fn:any = options.commandline; 
 console.log(fn());

 //create an object 
 var obj1 = new Car("XXSY1")
 
 //access the field 
 console.log("Reading attribute value Engine as :  "+obj1.engine)  
 var p1 = new Person('jimmy','man',32);
 var p2 = new Person('simmy','women',18)
 //access the function
 obj1.disp(p1)
 obj1.disp(p2)
 //https://github.com/tc39/proposal-object-rest-spread
 //rest parameter
 let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
 console.log(z)
 //spread parameter
 let n = { x, y, ...z };
 console.log(n)
//practice of the spread parameters
let parentArray=[[1],[2]]
let childArray={value:[3]}

console.log(typeof(childArray.value));
console.log('spread parameters:',[...parentArray,...childArray.value])
console.log({'name':'jimmy'})

 //template
 function identity<T>(arg: T): T {
   return arg;
}

console.log(identity<String>("jimmy"))
//()
console.log()

declare var console: any
type des = string
type ApiResponseSuccess={
   statuscode:number
   message:string
}
type ApiResponseFetchApiKey = {
   respond:ApiResponseSuccess,
   email: string,
   api_key: string,
 };
var t1:des ='sssss'

 console.log(`${t1}`)