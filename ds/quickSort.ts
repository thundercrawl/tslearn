let FuncType:(pre:any,next:any)=>{}
type DateItemType<T,FuncType>={
    data:T,
    compare(item:DateItemType<T>):boolean
}

class QuickSort<DateItemType>
{
    data:DateItemType[];
    Add(item:DateItemType)
    {
        this.data.push(item)
    }
    toString()
    {
        this.data.map(item=>console.log(item))
    }
    Sort()
    {

    }

}
const _Compare_str=(item:DateItemType<string>):boolean=>
    {
        if(item.data)
        return true;
    }

let qs:QuickSort<DateItemType<string>> = new QuickSort<DateItemType<string>>();

let i1:DateItemType<string> = {
    data:'welcome',
    compare:_Compare_str,
}
   

