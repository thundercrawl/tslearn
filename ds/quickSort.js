var QuickSort = /** @class */ (function () {
    function QuickSort() {
        this.data = [];
    }
    QuickSort.prototype.Add = function (item) {
        this.data.push(item);
    };
    QuickSort.prototype.toString = function () {
        this.data.map(function (item) { return console.log(item); });
    };
    QuickSort.prototype.Sort = function () {
        this.binsort(0, this.data.length - 1);
    };
    QuickSort.prototype.binsort = function (start, end) {
        console.log("enter binsort", start, end);
        if (start === end) {
            console.log('reach end exit', start, end);
            return;
        }
        var pivot, first = Math.trunc((start + end) / 2);
        var last = end;
        //select pivot
        if (++first === end) {
            this.toString();
            return;
        }
        this.binsort(start, Math.trunc((end - start) / 2));
        this.binsort(Math.trunc((end - start) / 2 + 1), end);
    };
    return QuickSort;
}());
var _Compare_str = function (src, target) {
    if (src.data === target.data)
        return true;
    else if (src.data.localeCompare(target.data) < 0)
        return false;
    return true;
};
var qs = new QuickSort();
var i1 = {
    data: 'welcom',
    compare: _Compare_str
};
var i2 = {
    data: 'welcome',
    compare: _Compare_str
};
var s1 = 'aelcome';
console.log(s1[0] > s1[1]);
console.log(_Compare_str(i1, i2));
qs.Add(i1);
qs.Add(i2);
qs.toString();
qs.Sort();
