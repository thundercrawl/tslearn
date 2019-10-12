var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var component = /** @class */ (function () {
    function component() {
    }
    return component;
}());
var mycomponent = /** @class */ (function (_super) {
    __extends(mycomponent, _super);
    function mycomponent() {
        var _this = _super.call(this) || this;
        _this.state = { name: '', gender: '' };
        return _this;
    }
    mycomponent.prototype.render = function () {
        console.log('render it:', this.state);
        //throw new Error("Method not implemented.");
    };
    return mycomponent;
}(component));
function checkEmtpy(object) {
    var list = Object.getOwnPropertyNames(object);
    console.log(object[list[0]]);
}
checkEmtpy({ name: '', value: 'lulu' });
var obj = { name: 'default' };
function connect(state) {
    return (function (cm) {
        cm.state = state;
        cm.render();
    });
}
var coma = new mycomponent();
//console.log(((obj) => ({ (obj as any).xxx='default' }))(obj));
connect({ name: 'mycomponent state update' })(coma);
var a1 = new Array();
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.push = function (item) { this.data.push(item); };
    Queue.prototype.pop = function () { return this.data.pop(); };
    return Queue;
}());
var queue = new Queue();
queue.push('abc');
queue.push('any');
console.log(queue.pop());
console.log(function (message) { console.log(message); });
