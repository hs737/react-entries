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
var Panel = _interopRequire(require("./Panel"));

var store = _interopRequire(require("../stores/store"));

var actions = _interopRequire(require("../actions/actions"));

var _utilsAPIManager = require("../utils/APIManager");

var put = _utilsAPIManager.put;
var del = _utilsAPIManager.del;


var MODULE_NAME = "Entry";

var Entry = (function (Component) {
    function Entry(props, context, updater) {
        _classCallCheck(this, Entry);

        var functionName = "constructor";
        console.log(MODULE_NAME, functionName + " called");

        _get(Object.getPrototypeOf(Entry.prototype), "constructor", this).call(this, props, context, updater);

        console.log(MODULE_NAME, functionName, "Props", this.props);

        this.submitEntryUpdate = this.submitEntryUpdate.bind(this);
        this.submitEntryDelete = this.submitEntryDelete.bind(this);
        this.updateEntryText = this.updateEntryText.bind(this);

        this.state = {
            entryText: this.props.details.text
        };
    }

    _inherits(Entry, Component);

    _prototypeProperties(Entry, null, {
        updateEntryText: {
            value: function updateEntryText(event) {
                var functionName = "updateEntryText";
                console.log(MODULE_NAME, functionName + " called", event.target.name, event.target.value);

                var newState = Object.assign({}, this.state);
                newState.entryText = event.target.value;

                this.setState(newState);
            },
            writable: true,
            configurable: true
        },
        submitEntryUpdate: {
            value: function submitEntryUpdate(event) {
                var functionName = "submitEntryUpdate";
                console.log(MODULE_NAME, functionName + " called", event.target.name, event.target.value);

                var newEntry = {
                    text: this.state.entryText
                };

                put("/api/entry/" + this.props.details._id, newEntry, function (err, result) {
                    if (err) {
                        console.log(MODULE_NAME, functionName, "Error:", err);
                        // TODO post that error happened
                        return;
                    }
                });
            },
            writable: true,
            configurable: true
        },
        submitEntryDelete: {
            value: function submitEntryDelete(event) {
                var functionName = "submitEntryDelete";
                console.log(MODULE_NAME, functionName + " called", event.target.name, event.target.value);
                console.log(MODULE_NAME, functionName, "this.props.details", this.props.details);

                var _this = this;
                del("/api/entry/" + this.props.details._id, null, function (err, result) {
                    if (err) {
                        console.log(MODULE_NAME, functionName, "Error:", err);
                        // TODO post that error happened
                        return;
                    }

                    store.currentStore().dispatch(actions.removeEntry(_this.props.details));
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

                var newState = Object.assign({}, this.state);
                newState.entryText = nextProps.details.text;

                this.setState(newState);
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
                var functionName = "render";
                console.log(MODULE_NAME, functionName + " called", this.props);

                var entryBody = React.createElement(
                    "div",
                    { className: "form-group" },
                    React.createElement("textarea", { className: "form-control", value: this.state.entryText, onChange: this.updateEntryText }),
                    React.createElement(
                        "button",
                        { type: "submit", onClick: this.submitEntryUpdate },
                        "Update"
                    ),
                    React.createElement(
                        "button",
                        { type: "submit", onClick: this.submitEntryDelete },
                        "Delete"
                    )
                );

                return React.createElement(Panel, { panelBody: entryBody });
            },
            writable: true,
            configurable: true
        }
    });

    return Entry;
})(Component);

module.exports = Entry;