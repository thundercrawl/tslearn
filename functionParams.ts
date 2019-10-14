function test(start,...end)
{
    console.log(end)
}


test([1],[2],[3])

const change=content=>({type:'change',payload:content,onchange:()=>{console.log('change happen')}})
let a = change(1)
a.type='none'
console.log( a)
a.onchange()