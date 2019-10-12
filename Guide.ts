 //interface
 interface IPerson { 
    firstName:string, 
    lastName:string, 
    sayHi: (mesasge:string)=>string,

 } 



 var p1:IPerson = { firstName:'li',lastName:'he',sayHi:(message:string)=>{return message}}
 console.log(p1.sayHi('hi'))


 //complex

 interface MiddleWare{
    f1:(p:any)=>any,
    f2:(p:any)=>any,
    (name:any):any
 }


 interface MyInterface {
    (): string;
    text2(content: string);
}

var MyType = ((): MyInterface=>{
  var x:any = function():string { // Notice the any 
      return "Some string"; // Dummy implementation 
  }
  x.text2 = function(content:string){
      console.log(content); // Dummy implementation 
  }
  return x;
}
);
declare const MiddleWare:MiddleWare
interface KeyValueProcessor
{
    
    (key: number, value: string, result?:number): void;
};

function addKeyValue(key:number, value:string):void { 
    console.log('addKeyValue: key = ' + key + ', value = ' + value)
}

function updateKeyValue(key: number, value:string):void { 
    console.log('updateKeyValue: key = '+ key + ', value = ' + value)
}
function bind1Result(key:number,value:string,result:number):void{
    console.log('bind to result:',result)
}
let kvp: KeyValueProcessor =addKeyValue
kvp(1, 'Bill'); //Output: addKeyValue: key = 1, value = Bill 

kvp = updateKeyValue;
kvp(2, 'Steve'); //Output: updateKeyValue: key = 2, value = Steve 
kvp = bind1Result
kvp(2,'hello',222)

console.log(MyType())


export interface suffixTypes {
    errorSuffix: string;
    successSuffix: string;
  }
  
  export interface axiosMiddleware extends suffixTypes {
    default: (client: any, customMiddleWareOptions: any, customClientOptions: any) => any;
    getActionTypes: (action: any) => any;
    multiClientMiddleware: (client: any, customMiddleWareOptions: any) => any;
  
    (client: any, customMiddleWareOptions?: any, customClientOptions?: any): any;
  }
  