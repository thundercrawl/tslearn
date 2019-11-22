
enum ActionType{
INCREMENT,
DECREMENT,
NONE
}

const counter = (state:number=0,action)=>
{
    switch(action.type)
    {
        case ActionType.DECREMENT:
            return state-1;
        case ActionType.INCREMENT:
            return state + 1;
        default:
            return state;
    }
}

let state:number = 0
console.log(state=counter(state,{type:ActionType.DECREMENT}))

console.log(state=counter(state,{type:ActionType.DECREMENT}))