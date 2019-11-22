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
console.log(counter(200, { type: ActionType.DECREMENT }));
