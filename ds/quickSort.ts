

type FuncType<T> = (src: T, target: T) => boolean;
type DateItemType<T> = {
    data: T,
    compare: FuncType<DateItemType<T>>,
}

class QuickSort<DateItemType>
{
    data:DateItemType[];
    constructor()
    {
        this.data=[];
    }
    Add(item: DateItemType):void {
        this.data.push(item)
    }
    toString():void {
        this.data.map(item => console.log(item))
    }
    Sort():void {
       
        this.binsort(0,this.data.length-1);

    }
    private binsort(first:number,end:number):void{
        console.log("enter binsort",first,end);
        if(first===end)
        {
            console.log('reach end exit',first,end)
            return;
        }
        
        this.binsort(first,Math.trunc((end-first)/2));
        this.binsort(Math.trunc((end-first)/2+1),end);
    }


}

const _Compare_str = (src: DateItemType<string>, target: DateItemType<string>): boolean => {
    if (src.data === target.data)
        return true;
    else
        return false;
}

let qs: QuickSort<DateItemType<string>> = new QuickSort<DateItemType<string>>();

let i1: DateItemType<string> = {
    data: 'welcome',
    compare: _Compare_str,
}
let i2:DateItemType<string> = {
    data: 'jimmy',
    compare: _Compare_str,
}

let s1:string = 'aelcome'
console.log(s1[0]>s1[1])
qs.Add(i1);
qs.Add(i2);

qs.toString();
qs.Sort();
