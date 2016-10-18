"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var CONSTANTS = _interopRequire(require("../constants/constants"));

var initialState = {
    currentUser: null
};

var moduleName = "userReducer";

module.exports = function (_x, someAction) {
    var previousState = arguments[0] === undefined ? initialState : arguments[0];
    console.log(moduleName + " called", previousState, someAction);

    switch (someAction.type) {
        case CONSTANTS.ACTIONS.UPDATE_CURRENT_USER:
            console.log("UPDATE_CURRENT_USER", JSON.stringify(someAction));

            var nextState = Object.assign({}, previousState);
            nextState.currentUser = someAction.userDetails;

            return nextState;

        default:
            return previousState;
    }
};