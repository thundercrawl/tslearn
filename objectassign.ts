const toggle=(state)=>
{
    return Object.assign({},state,{complete:!state.complete})
}

console.log(toggle({name:'jimmy',complete:true}))