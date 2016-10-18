"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var CONSTANTS = _interopRequire(require("../constants/constants"));

var initialState = {
    currentProfile: null
};

var moduleName = "profileReducer";

module.exports = function (_x, someAction) {
    var previousState = arguments[0] === undefined ? initialState : arguments[0];
    console.log(moduleName + " called", previousState, someAction);

    switch (someAction.type) {
        case CONSTANTS.ACTIONS.UPDATE_CURRENT_PROFILE:
            console.log("UPDATE_CURRENT_PROFILE", JSON.stringify(someAction));

            var nextState = Object.assign({}, previousState);
            nextState.currentProfile = someAction.profileDetails;

            return nextState;

        default:
            return previousState;
    }
};