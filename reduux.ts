


const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return
            (
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                })

        case 'TOGGLE_TODO':
            return state.map(todo => {
            if (todo.id !== action.id) {
                    return todo
                }

                return {
                    ...todo,
                    completed: !todo.completed
                }
            })

        default:
            return state;
    }
}


const talkMsg = (state: string[] = [], action) => {
    switch (action.type) {
        case 'MSG_ADD':
            state.push(action.msg)
            return state
        case 'MSG_REMOVE':
            state.pop()
            return state
        default:
            return state

    }
}
const reducerPorducer = (reducers) => {
    console.log('list reducers:',reducers)
    return (state = {}, action) => {
        return Object.keys(reducers).reduce((preFnt, nextFnt) => {
            //still have the issue, reducers will be called one by one
            return reducers[nextFnt](state,action);
        },
        {

        }
        )
    }
}

let rt = talkMsg([], { type: 'ADD', msg: 'hello john' })
console.log(rt)
rt = talkMsg(rt, { type: 'ADD', msg: 'hello smith' })
console.log(rt)
rt = talkMsg(rt, { type: 'REMOVE' })
console.log(rt)

console.log('------------------->using redux')

var o = {
    a: { value: 1 },
    b: { value: 2 },
    c: { value: 3 }
};

let a = Object.keys(o).reduce(function (previous, key) {
    console.log(previous, key, o[key].value)
    return previous + o[key].value;
}, 0);

console.log(Object.keys(o))
console.log(a)


console.log(reducerPorducer({ todos, talkMsg }))
let f1 = reducerPorducer({ todos, talkMsg })
console.log(f1({ name: 'hi' }, { type: 'ADD_TOD' }))