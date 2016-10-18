"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Link = require("react-router").Link;
var store = _interopRequire(require("../stores/store"));

var actions = _interopRequire(require("../actions/actions"));

var post = require("../utils/APIManager").post;


var MODULE_NAME = "EntryText";

var EntryText = (function (Component) {
    function EntryText(props, context, updater) {
        _classCallCheck(this, EntryText);

        var functionName = "constructor";
        console.log(MODULE_NAME, functionName + " called");

        _get(Object.getPrototypeOf(EntryText.prototype), "constructor", this).call(this, props, context, updater);

        this.updateCurrentStateEntry = this.updateCurrentStateEntry.bind(this);
        this.addEntry = this.addEntry.bind(this);

        this.state = {
            currentEntry: "",
            entriesList: []
        };
    }

    _inherits(EntryText, Component);

    _prototypeProperties(EntryText, null, {
        updateCurrentStateEntry: {
            value: function updateCurrentStateEntry(event) {
                var functionName = "updateCurrentStateEntry";
                console.log(MODULE_NAME, functionName + " called", event.target.name, event.target.value);

                var newState = Object.assign({}, this.state);
                newState.currentEntry = event.target.value;

                this.setState(newState);
            },
            writable: true,
            configurable: true
        },
        addEntry: {
            value: function addEntry(event) {
                var functionName = "addEntry";
                console.log(MODULE_NAME, functionName + " called", event.target.name, event.target.value);

                event.preventDefault();

                var _this = this;
                var newDocument = {
                    profile: this.props.id,
                    text: this.state.currentEntry
                };

                post("/api/entry", newDocument, function (err, document) {
                    if (err) {
                        console.log(MODULE_NAME, functionName, "Error:", err);
                        return;
                    }

                    store.currentStore().dispatch(actions.addEntry(document.result));

                    var newState = Object.assign({}, _this.state);
                    newState.currentEntry = "";

                    _this.setState(newState);
                });
            },
            writable: true,
            configurable: true
        },
        componentWillMount: {
            value: function componentWillMount() {
                var functionName = "componentWillMount";
                console.log(MODULE_NAME, functionName + " called");
            },
            writable: true,
            configurable: true
        },
        componentDidMount: {
            value: function componentDidMount() {
                var functionName = "componentDidMount";
                console.log(MODULE_NAME, functionName + " called");
            },
            writable: true,
            configurable: true
        },
        componentWillUnmount: {
            value: function componentWillUnmount() {
                var functionName = "componentWillUnmount";
                console.log(MODULE_NAME, functionName + " called");
            },
            writable: true,
            configurable: true
        },
        componentWillReceiveProps: {
            value: function componentWillReceiveProps(nextProps) {
                var functionName = "componentWillReceiveProps";
                console.log(MODULE_NAME, functionName + " called", nextProps);
            },
            writable: true,
            configurable: true
        },
        shouldComponentUpdate: {
            value: function shouldComponentUpdate(nextProps, nextState) {
                var functionName = "shouldComponentUpdate";
                console.log(MODULE_NAME, functionName + " called", nextProps, nextState);

                return true;
            },
            writable: true,
            configurable: true
        },
        componentWillUpdate: {
            value: function componentWillUpdate(nextProps, nextState) {
                var functionName = "componentWillUpdate";
                console.log(MODULE_NAME, functionName + " called", nextProps, nextState);
            },
            writable: true,
            configurable: true
        },
        componentDidUpdate: {
            value: function componentDidUpdate(prevProps, prevState) {
                var functionName = "componentDidUpdate";
                console.log(MODULE_NAME, functionName + " called", prevProps, prevState);
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                return React.createElement(
                    "form",
                    null,
                    React.createElement(
                        "fieldset",
                        { className: "content-group" },
                        React.createElement(
                            "div",
                            { className: "form-group" },
                            React.createElement("textarea", { className: "form-control", placeholder: "Enter text here", onChange: this.updateCurrentStateEntry, value: this.state.currentEntry }),
                            React.createElement(
                                "button",
                                { type: "submit", onClick: this.addEntry },
                                "Submit"
                            )
                        )
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return EntryText;
})(Component);

module.exports = EntryText;