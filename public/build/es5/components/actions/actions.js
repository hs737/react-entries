"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var CONSTANTS = _interopRequire(require("../constants/constants"));

module.exports = {
    addEntry: function (entryDetails) {
        console.log("addEntry called", JSON.stringify(entryDetails));
        return {
            type: CONSTANTS.ACTIONS.ADD_ENTRY,
            entry: entryDetails
        };
    },

    removeEntry: function (entryDetails) {
        console.log("removeEntry called", JSON.stringify(entryDetails));
        return {
            type: CONSTANTS.ACTIONS.REMOVE_ENTRY,
            entry: entryDetails
        };
    },

    getEntries: function (entriesList) {
        console.log("getEntries called", JSON.stringify(entriesList));
        return {
            type: CONSTANTS.ACTIONS.GET_ENTRIES,
            entries: entriesList
        };
    },

    updateCurrentProfile: function (profileDetails) {
        console.log("updateCurrentProfile called", JSON.stringify(profileDetails));
        return {
            type: CONSTANTS.ACTIONS.UPDATE_CURRENT_PROFILE,
            profileDetails: profileDetails
        };
    },

    updateCurrentUser: function (userDetails) {
        console.log("updateCurrentUser called", JSON.stringify(userDetails));
        return {
            type: CONSTANTS.ACTIONS.UPDATE_CURRENT_USER,
            userDetails: userDetails
        };
    },

    search: function (searchResults) {
        console.log("search called", JSON.stringify(searchResults));
        return {
            type: CONSTANTS.ACTIONS.SEARCH,
            results: searchResults
        };
    },

    updateHomeComponentDisplay: function (displayEnum) {
        console.log("updateHomeComponentDisplay called", displayEnum);
        return {
            type: CONSTANTS.ACTIONS.UPDATE_HOME_DISPLAY,
            display: displayEnum
        };
    }
};