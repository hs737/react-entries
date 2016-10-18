"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var CONSTANTS = _interopRequire(require("../constants/constants"));

var initialState = {
    searchResults: null
};

var moduleName = "searchReducer";

module.exports = function (_x, someAction) {
    var previousState = arguments[0] === undefined ? initialState : arguments[0];
    console.log(moduleName + " called", previousState, someAction);

    switch (someAction.type) {
        case CONSTANTS.ACTIONS.SEARCH:
            console.log("SEARCH", JSON.stringify(someAction));

            var nextState = Object.assign({}, previousState);
            nextState.searchResults = someAction.results;

            return nextState;

        default:
            return previousState;
    }
};