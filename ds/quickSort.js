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
    QuickSort.prototype.binsort = function (first, end) {
        console.log("enter binsort", first, end);
        if (first === end) {
            console.log('reach end exit', first, end);
            return;
        }
        this.binsort(first, Math.trunc((end - first) / 2));
        this.binsort(Math.trunc((end - first) / 2 + 1), end);
    };
    return QuickSort;
}());
var _Compare_str = function (src, target) {
    if (src.data === target.data)
        return true;
    else
        return false;
};
var qs = new QuickSort();
var i1 = {
    data: 'welcome',
    compare: _Compare_str
};
var i2 = {
    data: 'jimmy',
    compare: _Compare_str
};
var s1 = 'aelcome';
console.log(s1[0] > s1[1]);
qs.Add(i1);
qs.Add(i2);
qs.toString();
qs.Sort();
