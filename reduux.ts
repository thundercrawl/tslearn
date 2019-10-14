


const todos=(state=[],action)=>
{
    switch(action.type)
    {
        case 'ADD_TODO':
            return[

                ...state,
                {
                    id:action.id,
                    text:action.text,
                    completed:false   
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo=>{
                if(todo.id !== action.id)
                {
                    return todo
                }

                return{
                    ...todo,
                    completed:!todo.completed
                }
            })
    }
}


const talkMsg=(state:string[]=[],action)=>
{
    switch(action.type)
    {
        case 'ADD':
            state.push(action.msg)
            return state
        case 'REMOVE':
            state.pop()
            return state
        default:
            return state

    }
}


let rt = talkMsg([],{type:'ADD',msg:'hello john'})
console.log(rt)
rt = talkMsg(rt,{type:'ADD',msg:'hello smith'})
console.log(rt)
rt= talkMsg(rt,{type:'REMOVE'})
console.log(rt)

console.log('------------------->using redux')

var o = { 
    a: {value:1}, 
    b: {value:2}, 
    c: {value:3} 
};

let a = Object.keys(o).reduce(function (previous, key) {
    return previous + o[key].value;
}, 0);


console.log(a)