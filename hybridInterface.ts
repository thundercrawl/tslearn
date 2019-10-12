interface Circle {
    radius: number;//property
    (x: number, y?: number): void; //function declaration
    (s:string):void;
    display(b: boolean);//method
    [state: string]: any; //indexer
}

//first create function
let c_f = function (x: number, y: number) {
    console.log(`center position: (${x}, ${y})`);
}
let s = (s:string)=>{
    console.log('print:',s);
}

let circle= c_f as Circle; //type assertion on right side
circle = s as Circle;
circle.radius = 10;
circle.display = function (d: boolean) {
    console.log('circle displayed: ' + d);
}
circle['interactive'] = true;
circle['maximumRadius'] = 20;

console.log(circle);
circle(2, 5);// calling position function
circle(3);
circle.display(true);


const mime={
'jpeg':'jpeg/image',
png:'png/image'

}

console.log(mime['jpeg'])