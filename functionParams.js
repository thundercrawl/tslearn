function test(start) {
    var end = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        end[_i - 1] = arguments[_i];
    }
    console.log(end);
}
test([1], [2], [3]);
var change = function (content) { return ({ type: 'change', payload: content, onchange: function () { console.log('change happen'); } }); };
var a = change(1);
a.type = 'none';
console.log(a);
a.onchange();
