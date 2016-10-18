"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _redux = require("redux");

var createStore = _redux.createStore;
var applyMiddleware = _redux.applyMiddleware;
var combineReducers = _redux.combineReducers;
var thunk = _interopRequire(require("redux-thunk"));

var entryReducer = _interopRequire(require("../reducers/entryReducer"));

var profileReducer = _interopRequire(require("../reducers/profileReducer"));

var searchReducer = _interopRequire(require("../reducers/searchReducer"));

var userReducer = _interopRequire(require("../reducers/userReducer"));

var uiReducer = _interopRequire(require("../reducers/uiReducer"));

var currentStore;

module.exports = {
    createStore: function (initialState) {
        // Combine reducers
        var reducers = combineReducers({
            entryReducer: entryReducer,
            profileReducer: profileReducer,
            searchReducer: searchReducer,
            userReducer: userReducer,
            uiReducer: uiReducer
        });

        // Initialize store
        currentStore = createStore(reducers, initialState, applyMiddleware(thunk));
        return currentStore;
    },
    currentStore: function () {
        return currentStore;
    }

};