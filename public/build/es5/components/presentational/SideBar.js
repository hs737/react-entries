"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;


var MODULE_NAME = "SideBar";

var SideBar = (function (Component) {
    function SideBar() {
        _classCallCheck(this, SideBar);

        if (Component != null) {
            Component.apply(this, arguments);
        }
    }

    _inherits(SideBar, Component);

    _prototypeProperties(SideBar, null, {
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

                return React.createElement(
                    "div",
                    { className: "sidebar sidebar-main sidebar-default" },
                    React.createElement(
                        "div",
                        { className: "sidebar-content" },
                        React.createElement(
                            "div",
                            { className: "sidebar-category sidebar-category-visible" },
                            React.createElement(
                                "div",
                                { className: "category-title h6" },
                                React.createElement(
                                    "span",
                                    null,
                                    "Main navigation"
                                ),
                                React.createElement(
                                    "ul",
                                    { className: "icons-list" },
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement("a", { href: "#", "data-action": "collapse" })
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "category-content no-padding" },
                                React.createElement(
                                    "ul",
                                    { className: "navigation navigation-main navigation-accordion" },
                                    React.createElement(
                                        "li",
                                        { className: "navigation-header" },
                                        React.createElement(
                                            "span",
                                            null,
                                            "Main"
                                        ),
                                        " ",
                                        React.createElement("i", { className: "icon-menu", title: "", "data-original-title": "Main pages" })
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "../index.html" },
                                            React.createElement("i", { className: "icon-home4" }),
                                            " ",
                                            React.createElement(
                                                "span",
                                                null,
                                                "Dashboard"
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        { className: "active" },
                                        React.createElement(
                                            "a",
                                            { href: "#", className: "has-ul" },
                                            React.createElement("i", { className: "icon-stack" }),
                                            " ",
                                            React.createElement(
                                                "span",
                                                null,
                                                "Starter kit"
                                            )
                                        ),
                                        React.createElement(
                                            "ul",
                                            null,
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement(
                                                    "a",
                                                    { href: "horizontal_nav.html" },
                                                    "Horizontal navigation"
                                                )
                                            ),
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement(
                                                    "a",
                                                    { href: "1_col.html" },
                                                    "1 column"
                                                )
                                            ),
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement(
                                                    "a",
                                                    { href: "2_col.html" },
                                                    "2 columns"
                                                )
                                            ),
                                            React.createElement(
                                                "li",
                                                { className: "active" },
                                                React.createElement(
                                                    "a",
                                                    { href: "#", className: "has-ul" },
                                                    "3 columns"
                                                ),
                                                React.createElement(
                                                    "ul",
                                                    null,
                                                    React.createElement(
                                                        "li",
                                                        null,
                                                        React.createElement(
                                                            "a",
                                                            { href: "3_col_dual.html" },
                                                            "Dual sidebars"
                                                        )
                                                    ),
                                                    React.createElement(
                                                        "li",
                                                        { className: "active" },
                                                        React.createElement(
                                                            "a",
                                                            { href: "3_col_double.html" },
                                                            "Double sidebars"
                                                        )
                                                    )
                                                )
                                            ),
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement(
                                                    "a",
                                                    { href: "4_col.html" },
                                                    "4 columns"
                                                )
                                            ),
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement(
                                                    "a",
                                                    { href: "layout_boxed.html" },
                                                    "Boxed layout"
                                                )
                                            ),
                                            React.createElement("li", { className: "navigation-divider" }),
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement(
                                                    "a",
                                                    { href: "layout_navbar_fixed_main.html" },
                                                    "Fixed top navbar"
                                                )
                                            ),
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement(
                                                    "a",
                                                    { href: "layout_navbar_fixed_secondary.html" },
                                                    "Fixed secondary navbar"
                                                )
                                            ),
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement(
                                                    "a",
                                                    { href: "layout_navbar_fixed_both.html" },
                                                    "Both navbars fixed"
                                                )
                                            ),
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement(
                                                    "a",
                                                    { href: "layout_sidebar_sticky.html" },
                                                    "Sticky sidebar"
                                                )
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "../changelog.html" },
                                            React.createElement("i", { className: "icon-list-unordered" }),
                                            " ",
                                            React.createElement(
                                                "span",
                                                null,
                                                "Changelog"
                                            )
                                        )
                                    )
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

    return SideBar;
})(Component);

module.exports = SideBar;
/*<!-- Main navigation -->*/ /*<!-- Main -->*/ /*<!-- /main -->*/ /*<!-- /main navigation -->*/