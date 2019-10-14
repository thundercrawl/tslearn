function log(...obj)
{
    console.log(obj)
}
type Person={
    name:string,
    gender:string,
    age:number,
}
class Personc
{}
let p1:Person={
    name:'jimmy',
    gender:'male',
    age:20,
};
let p2:Personc = new Personc();
log(typeof (()=>{}))
log(typeof p1 )
log(typeof p2)
log(typeof Personc)
