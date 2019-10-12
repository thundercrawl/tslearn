
abstract class component<s> {
  abstract render():any;
  state: s;
}
type state={
  name:string
  gender:string
}
class mycomponent extends component<state> {
  constructor()
  {
    super()
    this.state={name:'',gender:''}
  }
  render() {
    console.log('render it:',this.state)
    //throw new Error("Method not implemented.");
  }
  
}
function checkEmtpy<T>(object: T) {
  const list = Object.getOwnPropertyNames(object)
  console.log(object[list[0]])

}

type properties = { name: string, value: string }
checkEmtpy<properties>({ name: '', value: 'lulu' });
var obj = { name: 'default' }

function connect<com extends component<any>>(state) {

  return ((cm:com) => {
    cm.state = state
    cm.render()
  })
}

let coma:mycomponent = new mycomponent()

//console.log(((obj) => ({ (obj as any).xxx='default' }))(obj));
connect({ name: 'mycomponent state update' })(coma)
let a1=new Array<string>();


class Queue<T> {
  private data = [];
  push(item: T) { this.data.push(item); }
  pop(): T | undefined { return this.data.pop() }
}

let queue:Queue<String> = new Queue<string>()
queue.push('abc')
queue.push('any')

console.log(queue.pop())

console.log((message)=>{console.log(message)})