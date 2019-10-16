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
var todos = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case 'ADD_TODO':
            return;
            ({
                id: action.id,
                text: action.text,
                completed: false
            });
        case 'TOGGLE_TODO':
            return state.map(function (todo) {
                if (todo.id !== action.id) {
                    return todo;
                }
                return __assign(__assign({}, todo), { completed: !todo.completed });
            });
        default:
            return state;
    }
};
var talkMsg = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case 'MSG_ADD':
            state.push(action.msg);
            return state;
        case 'MSG_REMOVE':
            state.pop();
            return state;
        default:
            return state;
    }
};
var reducerPorducer = function (reducers) {
    console.log('list reducers:', reducers);
    return function (state, action) {
        if (state === void 0) { state = {}; }
        return Object.keys(reducers).reduce(function (preFnt, nextFnt) {
            console.log('state:', state);
            return reducers[nextFnt](state, action);
        }, {});
    };
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
    console.log(previous, key, o[key].value);
    return previous + o[key].value;
}, 0);
console.log(Object.keys(o));
console.log(a);
console.log(reducerPorducer({ todos: todos, talkMsg: talkMsg }));
var f1 = reducerPorducer({ todos: todos, talkMsg: talkMsg });
console.log(f1({ name: 'hi' }, { type: 'ADD_TOD' }));
