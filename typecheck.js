function log() {
    var obj = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        obj[_i] = arguments[_i];
    }
    console.log(obj);
}
var PersonC = /** @class */ (function () {
    function PersonC() {
    }
    return PersonC;
}());
var p1 = {
    name: 'jimmy',
    gender: 'male',
    age: 20
};
var p2 = new PersonC();
log(state['jimmy']);
log(typeof (function () { }));
log(typeof p1);
log(typeof p2);
log(typeof PersonC);
