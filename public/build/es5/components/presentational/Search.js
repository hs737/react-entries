"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var connect = require("react-redux").connect;
var browserHistory = require("react-router").browserHistory;
var store = _interopRequire(require("../stores/store"));

var CONSTANTS = _interopRequire(require("../constants/constants"));

var actions = _interopRequire(require("../actions/actions"));

var get = require("../utils/APIManager").get;
var Search = (function (Component) {
    function Search(props, context, updater) {
        _classCallCheck(this, Search);

        var functionName = "constructor";
        console.log(functionName + " called");

        _get(Object.getPrototypeOf(Search.prototype), "constructor", this).call(this, props, context, updater);

        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);

        this.state = {
            searchQuery: ""
        };
    }

    _inherits(Search, Component);

    _prototypeProperties(Search, null, {
        handleSearchTextChange: {
            value: function handleSearchTextChange(event) {
                var functionName = "handleSearchTextChange";
                console.log(functionName + " called", event.target.name, event.target.value);

                var newState = Object.assign({}, this.state);
                newState.searchQuery = event.target.value;

                this.setState(newState);
            },
            writable: true,
            configurable: true
        },
        handleSearchSubmit: {
            value: function handleSearchSubmit(event) {
                var functionName = "handleSearchSubmit";
                console.log(functionName + " called", event.target.name, this.state.searchQuery);

                browserHistory.push("/search?query=" + this.state.searchQuery);
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                return React.createElement(
                    "div",
                    null,
                    React.createElement("input", { placeholder: "Enter user name", type: "search", onChange: this.handleSearchTextChange }),
                    React.createElement(
                        "button",
                        { type: "submit", onClick: this.handleSearchSubmit },
                        "Submit"
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return Search;
})(Component);

module.exports = Search;
// get("/api/profile", {name: this.state.searchQuery}, function(err, docs) {
//     if (err) {
//         console.log(functionName, "Error:", err)
//         return
//     }

//     if (docs == null || docs.length !== 1) {
//         browserHistory.push('/search')
//     } else {
//         store.currentStore().dispatch(actions.updateCurrentProfile(document.result[0]))
//     }
// })