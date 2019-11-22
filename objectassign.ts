const toggle=(state)=>
{

    return (state) =>
    {
        console.log(state);
        
        Object.keys(state).reduce((previousState,currentValue:string,key:number)=>
        {
            console.log("key:",key);
            //console.log("nextstate",nextstate);
            console.log("currentValue:",currentValue)
            if(currentValue === "name")
            {
                console.log("name called")
                return {...previousState,ADDED:"xx"};
            }
            return {...previousState,ADDED:"xx"};

        },{})

        
    }
    //return Object.assign({},state,{complete:!state.complete})
}
let result = toggle({})({name:'jimmy1',complete:true,todos:{
    action:'Add'
}});
console.log(result)
//console.log(toggle({name:'jimmy',complete:true}))