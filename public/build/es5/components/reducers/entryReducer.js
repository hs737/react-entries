"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var CONSTANTS = _interopRequire(require("../constants/constants"));

var initialState = {
    entriesList: null
};

var moduleName = "entryReducer";

module.exports = function (_x, someAction) {
    var previousState = arguments[0] === undefined ? initialState : arguments[0];
    console.log(moduleName + " called", previousState, someAction);

    switch (someAction.type) {
        case CONSTANTS.ACTIONS.GET_ENTRIES:
            console.log("GET_ENTRIES", JSON.stringify(someAction));

            var nextState = Object.assign({}, previousState);
            nextState.entriesList = someAction.entries;

            return nextState;

        case CONSTANTS.ACTIONS.ADD_ENTRY:
            console.log("ADD_ENTRY", JSON.stringify(someAction));

            var nextState = Object.assign({}, previousState);
            var entriesList = Object.assign([], nextState.entriesList);

            entriesList.unshift(someAction.entry);
            nextState.entriesList = entriesList;

            return nextState;

        case CONSTANTS.ACTIONS.REMOVE_ENTRY:
            console.log("REMOVE_ENTRY", JSON.stringify(someAction));

            var nextState = Object.assign({}, previousState);
            var entriesList = Object.assign([], nextState.entriesList);

            entriesList = entriesList.filter(function (element) {
                return element._id !== someAction.entry._id;
            });
            nextState.entriesList = entriesList;

            return nextState;

        default:
            return previousState;
    }
};