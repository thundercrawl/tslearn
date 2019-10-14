function log() {
    var obj = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        obj[_i] = arguments[_i];
    }
    console.log(obj);
}
var Personc = /** @class */ (function () {
    function Personc() {
    }
    return Personc;
}());
var p1 = {
    name: 'jimmy',
    gender: 'male',
    age: 20
};
var p2 = new Personc();
log(typeof (function () { }));
log(typeof p1);
log(typeof p2);
log(typeof Personc);
log(typeof a);
