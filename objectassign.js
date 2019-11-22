var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var toggle = function (state) {
    return function (state) {
        console.log(state);
        Object.keys(state).reduce(function (previousState, currentValue, key) {
            console.log("key:", key);
            //console.log("nextstate",nextstate);
            console.log("currentValue:", currentValue);
            if (currentValue === "name") {
                console.log("name called");
                return __assign({}, previousState, { ADDED: "xx" });
            }
            return __assign({}, previousState, { ADDED: "xx" });
        }, {});
    };
    //return Object.assign({},state,{complete:!state.complete})
};
var result = toggle({})({ name: 'jimmy1', complete: true, todos: {
        action: 'Add'
    } });
console.log(result);
//console.log(toggle({name:'jimmy',complete:true}))
