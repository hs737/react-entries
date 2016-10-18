"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;


var MODULE_NAME = "Panel";

var Panel = (function (Component) {
    function Panel() {
        _classCallCheck(this, Panel);

        if (Component != null) {
            Component.apply(this, arguments);
        }
    }

    _inherits(Panel, Component);

    _prototypeProperties(Panel, null, {
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
                var functionName = "render";
                console.log(MODULE_NAME, functionName + " called", this.props);

                var heading = null;
                if (this.props.headingDetails != null) {
                    heading = React.createElement(
                        "div",
                        { className: "panel-heading" },
                        React.createElement(
                            "h5",
                            { className: "panel-title" },
                            this.props.headingDetails.title,
                            React.createElement(
                                "a",
                                { className: "heading-elements-toggle" },
                                React.createElement("i", { className: "icon-more" })
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "heading-elements" },
                            React.createElement(
                                "ul",
                                { className: "icons-list" },
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement("a", { "data-action": "collapse" })
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement("a", { "data-action": "close" })
                                )
                            )
                        )
                    );
                }

                return React.createElement(
                    "div",
                    { className: "panel panel-flat" },
                    heading,
                    React.createElement(
                        "div",
                        { className: "panel-body" },
                        this.props.panelBody
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return Panel;
})(Component);

module.exports = Panel;