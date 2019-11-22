var ActionType;
(function (ActionType) {
    ActionType[ActionType["INCREMENT"] = 0] = "INCREMENT";
    ActionType[ActionType["DECREMENT"] = 1] = "DECREMENT";
    ActionType[ActionType["NONE"] = 2] = "NONE";
})(ActionType || (ActionType = {}));
var counter = function (state, action) {
    if (state === void 0) { state = 0; }
    switch (action.type) {
        case ActionType.DECREMENT:
            return state - 1;
        case ActionType.INCREMENT:
            return state + 1;
        default:
            return state;
    }
};
var state = 0;
console.log(state = counter(state, { type: ActionType.DECREMENT }));
console.log(state = counter(state, { type: ActionType.DECREMENT }));
