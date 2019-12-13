

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
    private binsort(start:number,end:number):void{
        console.log("enter binsort",start,end);
        if(start===end)
        {
            console.log('reach end exit',start,end)
            return;
        }
        let pivot:number,first:number = Math.trunc((start+end)/2);
        let last:number = end;
        first++;
        do {
            if(this.data[first].compare(this.data[first],this.data[pivot]))
            {
                let tmp = this.data[last];
                this.data[last] = this.data[first];
            }
        }
        while(!(first === end));
       
        this.binsort(start,Math.trunc((end-start)/2));
        this.binsort(Math.trunc((end-start)/2+1),end);
    }


}

const _Compare_str = (src: DateItemType<string>, target: DateItemType<string>): boolean => {
    if (src.data === target.data)
        return true;
    else if(src.data.localeCompare(target.data)<0)
        return false;
    return true;
}

let qs: QuickSort<DateItemType<string>> = new QuickSort<DateItemType<string>>();

let i1: DateItemType<string> = {
    data: 'welcom',
    compare: _Compare_str,
}
let i2:DateItemType<string> = {
    data: 'welcome',
    compare: _Compare_str,
}

let s1:string = 'aelcome'
console.log(s1[0]>s1[1])
console.log(_Compare_str(i1,i2))
qs.Add(i1);
qs.Add(i2);

qs.toString();
qs.Sort();


