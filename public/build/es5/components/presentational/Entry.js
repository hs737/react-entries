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
var store = _interopRequire(require("../stores/store"));

var CONSTANTS = _interopRequire(require("../constants/constants"));

var actions = _interopRequire(require("../actions/actions"));

var post = require("../utils/APIManager").post;
var Entry = (function (Component) {
    function Entry(props, context, updater) {
        _classCallCheck(this, Entry);

        var functionName = "constructor";
        console.log(functionName + " called");

        _get(Object.getPrototypeOf(Entry.prototype), "constructor", this).call(this, props, context, updater);

        this.updateCurrentStateEntry = this.updateCurrentStateEntry.bind(this);
        this.addEntry = this.addEntry.bind(this);

        this.state = {
            currentEntry: "",
            entriesList: []
        };
    }

    _inherits(Entry, Component);

    _prototypeProperties(Entry, null, {
        updateCurrentStateEntry: {
            value: function updateCurrentStateEntry(event) {
                var functionName = "updateCurrentStateEntry";
                console.log(functionName + " called", event.target.name, event.target.value);

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
                console.log(functionName + " called", event.target.name, event.target.value);

                post("/api/entry", this.state.currentEntry, function (err, document) {
                    if (err) {
                        console.log(functionName, "Error:", err);
                        return;
                    }

                    store.dispatch(actions.addEntry(document));
                });
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                var functionName = "render";
                console.log(functionName + " called");
                console.log("this.props", JSON.stringify(this.props.entries));
                return React.createElement(
                    "div",
                    null,
                    React.createElement("textarea", { placeholder: "Enter text here", onChange: this.updateCurrentStateEntry, value: this.state.currentEntry }),
                    React.createElement(
                        "button",
                        { type: "submit", onClick: this.addEntry },
                        "Submit"
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return Entry;
})(Component);

var mapStateToProps = function (state) {
    console.log("mapStateToProps", JSON.stringify(state));
    return {
        entries: state.entryReducer.entriesList
    };
};

module.exports = connect(mapStateToProps)(Entry)
// export default Entry
;