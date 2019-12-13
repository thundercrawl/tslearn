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
var _a;
var initstate;
initstate = (_a = {},
    _a['jimmy'] = { older: false, newer: true },
    _a);
var NULL_OBJECT = Object.freeze({});
var NULL_ARRAY = Object.freeze([]);
var fetch_add = function (content) {
    return new Promise(function (resolve, reject) { resolve(content); });
};
var FetchReducer = function (state, action) {
    var _a;
    switch (action.actionType) {
        case "ADD_FETCH":
            return __assign(__assign({}, state), (_a = {}, _a[action.fetchName] = action.newState, _a));
        case "REMOVE_FETCH":
            return __assign({}, state);
        default:
            console.log(action);
    }
};
console.log(FetchReducer(initstate, { actionType: 'ADD_FETCH', newState: { older: false, newer: true }, fetchName: 'duoduo' }));
console.log(FetchReducer(initstate, { actionType: 'REMOVE_FETCH', newState: { older: false, newer: true }, fetchName: 'duoduo' }));
fetch_add("hello").then(function (content) {
    console.log(content);
});
