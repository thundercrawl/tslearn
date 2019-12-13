type CaughtUp = {
    older: boolean,
    newer: boolean,
}
 type FetchingState = {
    [narrow: string]: CaughtUp,
  };
let initstate:FetchingState;
initstate = {
    ['jimmy']:{older:false,newer:true},
}
type FetchAction = {
    actionType:string,
    newState:CaughtUp,
    fetchName:string,
}
const NULL_OBJECT = Object.freeze({});

const NULL_ARRAY = Object.freeze([]);

const fetch_add=(content:string):Promise<string>=>
{
    return new Promise((resolve,reject)=>{resolve(content)});
}

const FetchReducer=(state:FetchingState,action:FetchAction)=>
{
    switch(action.actionType)
    {
        case "ADD_FETCH":
            return {
                ...state,
                [action.fetchName]:action.newState,
            }
        case "REMOVE_FETCH":
            return{
                ...state,
            }
        default:
            console.log(action)
    }
}


console.log(FetchReducer(initstate,{actionType:'ADD_FETCH',newState:{older:false,newer:true},fetchName:'duoduo'}))

console.log(FetchReducer(initstate,{actionType:'REMOVE_FETCH',newState:{older:false,newer:true},fetchName:'duoduo'}))

fetch_add("hello").then((content)=>{
    console.log(content)
})