"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var CONSTANTS = _interopRequire(require("../constants/constants"));

var initialState = {
    displaySelection: null
};

var moduleName = "uiReducer";

module.exports = function (_x, someAction) {
    var previousState = arguments[0] === undefined ? initialState : arguments[0];
    console.log(moduleName + " called", previousState, someAction);

    switch (someAction.type) {
        case CONSTANTS.ACTIONS.UPDATE_HOME_DISPLAY:
            console.log("UPDATE_HOME_DISPLAY", JSON.stringify(someAction));

            var nextState = Object.assign({}, previousState);
            nextState.displaySelection = someAction.display;

            return nextState;

        default:
            return previousState;
    }
};