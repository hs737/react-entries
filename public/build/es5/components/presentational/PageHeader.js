"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;


var MODULE_NAME = "PageHeader";

var PageHeader = (function (Component) {
    function PageHeader(props, context, updater) {
        _classCallCheck(this, PageHeader);

        var functionName = "constructor";
        console.log(MODULE_NAME, functionName + " called");

        _get(Object.getPrototypeOf(PageHeader.prototype), "constructor", this).call(this, props, context, updater);

        console.log(MODULE_NAME, functionName, "props", this.props);
    }

    _inherits(PageHeader, Component);

    _prototypeProperties(PageHeader, null, {
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

                var profileName = null;

                if (this.props.profileDetails != null) {
                    var profileName = this.props.profileDetails.name;
                }

                return React.createElement(
                    "div",
                    { className: "page-header" },
                    React.createElement(
                        "div",
                        { className: "breadcrumb-line" },
                        React.createElement(
                            "a",
                            { className: "breadcrumb-elements-toggle" },
                            React.createElement("i", { className: "icon-menu-open" })
                        ),
                        React.createElement(
                            "ul",
                            { className: "breadcrumb" },
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "index.html" },
                                    React.createElement("i", { className: "icon-home2 position-left" }),
                                    " Home"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "3_col_double.html" },
                                    "Starters"
                                )
                            ),
                            React.createElement(
                                "li",
                                { className: "active" },
                                "Double sidebars"
                            )
                        ),
                        React.createElement(
                            "ul",
                            { className: "breadcrumb-elements" },
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    React.createElement("i", { className: "icon-comment-discussion position-left" }),
                                    " Link"
                                )
                            ),
                            React.createElement(
                                "li",
                                { className: "dropdown" },
                                React.createElement(
                                    "a",
                                    { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown", "aria-expanded": "false" },
                                    React.createElement("i", { className: "icon-gear position-left" }),
                                    "Dropdown",
                                    React.createElement("span", { className: "caret" })
                                ),
                                React.createElement(
                                    "ul",
                                    { className: "dropdown-menu dropdown-menu-right" },
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            React.createElement("i", { className: "icon-user-lock" }),
                                            " Account security"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            React.createElement("i", { className: "icon-statistics" }),
                                            " Analytics"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            React.createElement("i", { className: "icon-accessibility" }),
                                            " Accessibility"
                                        )
                                    ),
                                    React.createElement("li", { className: "divider" }),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            React.createElement("i", { className: "icon-gear" }),
                                            " All settings"
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "page-header-content" },
                        React.createElement(
                            "div",
                            { className: "page-title" },
                            React.createElement(
                                "h4",
                                null,
                                React.createElement("i", { className: "icon-arrow-left52 position-left" }),
                                " ",
                                React.createElement(
                                    "span",
                                    { className: "text-semibold" },
                                    profileName
                                ),
                                " - Double Sidebars"
                            ),
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
                                "a",
                                { href: "#", className: "btn btn-labeled btn-labeled-right bg-blue heading-btn" },
                                "Button ",
                                React.createElement(
                                    "b",
                                    null,
                                    React.createElement("i", { className: "icon-menu7" })
                                )
                            )
                        )
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return PageHeader;
})(Component);

module.exports = PageHeader;