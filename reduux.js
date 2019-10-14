var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var todos = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case 'ADD_TODO':
            return __spreadArrays(state, [
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]);
        case 'TOGGLE_TODO':
            return state.map(function (todo) {
                if (todo.id !== action.id) {
                    return todo;
                }
                return __assign(__assign({}, todo), { completed: !todo.completed });
            });
    }
};
var talkMsg = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case 'ADD':
            state.push(action.msg);
            return state;
        case 'REMOVE':
            state.pop();
            return state;
        default:
            return state;
    }
};
var rt = talkMsg([], { type: 'ADD', msg: 'hello john' });
console.log(rt);
rt = talkMsg(rt, { type: 'ADD', msg: 'hello smith' });
console.log(rt);
rt = talkMsg(rt, { type: 'REMOVE' });
console.log(rt);
console.log('------------------->using redux');
var o = {
    a: { value: 1 },
    b: { value: 2 },
    c: { value: 3 }
};
var a = Object.keys(o).reduce(function (previous, key) {
    return previous + o[key].value;
}, 0);
console.log(a);
