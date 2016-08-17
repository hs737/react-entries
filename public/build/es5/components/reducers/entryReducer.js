"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

module.exports = myReducer;
var CONSTANTS = _interopRequire(require("../constants/constants"));

var initialState = {
    entriesList: []
};

function myReducer(_x, someAction) {
    var previousState = arguments[0] === undefined ? initialState : arguments[0];


    switch (action.type) {
        case CONSTANTS.ACTIONS.GET_ENTRIES:
            console.log("GET_ENTRIES", JSON.stringify(someAction));

            var nextState = Object.assign({}, state);
            nextState.entriesList = someAction.entries;

            return nextState;

        case CONSTANTS.ACTIONS.ADD_ENTRY:
            console.log("ADD_ENTRY", JSON.stringify(someAction));

            var nextState = Object.assign({}, state);
            var entriesList = Object.assign([], nextState.entriesList);

            entriesList.push(someAction.entry);
            nextState.entriesList = entriesList;

            return nextState;


        default:
            return previousState;
    }
}