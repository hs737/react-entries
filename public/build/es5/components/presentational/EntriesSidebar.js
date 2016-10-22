"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;


var MODULE_NAME = "EntriesSidebar";

var EntriesSidebar = (function (Component) {
    function EntriesSidebar() {
        _classCallCheck(this, EntriesSidebar);

        if (Component != null) {
            Component.apply(this, arguments);
        }
    }

    _inherits(EntriesSidebar, Component);

    _prototypeProperties(EntriesSidebar, null, {
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
                    { className: "sidebar sidebar-opposite sidebar-default" },
                    React.createElement(
                        "div",
                        { className: "sidebar-content" },
                        React.createElement(
                            "div",
                            { className: "sidebar-category" },
                            React.createElement(
                                "div",
                                { className: "category-title" },
                                React.createElement(
                                    "span",
                                    null,
                                    "Search"
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
                                { className: "category-content" },
                                React.createElement(
                                    "form",
                                    { action: "#" },
                                    React.createElement(
                                        "div",
                                        { className: "has-feedback has-feedback-left" },
                                        React.createElement("input", { type: "search", className: "form-control", placeholder: "Search" }),
                                        React.createElement(
                                            "div",
                                            { className: "form-control-feedback" },
                                            React.createElement("i", { className: "icon-search4 text-size-base text-muted" })
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "sidebar-category" },
                            React.createElement(
                                "div",
                                { className: "category-title" },
                                React.createElement(
                                    "span",
                                    null,
                                    "Navigation"
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
                                    { className: "navigation navigation-alt navigation-accordion" },
                                    React.createElement(
                                        "li",
                                        { className: "navigation-header" },
                                        "Category title"
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            React.createElement("i", { className: "icon-googleplus5" }),
                                            " Link"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            React.createElement("i", { className: "icon-googleplus5" }),
                                            " Another link"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            React.createElement("i", { className: "icon-portfolio" }),
                                            " Link with label ",
                                            React.createElement(
                                                "span",
                                                { className: "label bg-success-400" },
                                                "Online"
                                            )
                                        )
                                    ),
                                    React.createElement("li", { className: "navigation-divider" }),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "#", className: "has-ul" },
                                            React.createElement("i", { className: "icon-cog3" }),
                                            " Menu levels"
                                        ),
                                        React.createElement(
                                            "ul",
                                            { className: "hidden-ul" },
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement(
                                                    "a",
                                                    { href: "#" },
                                                    React.createElement("i", { className: "icon-IE" }),
                                                    " Second level"
                                                )
                                            ),
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement(
                                                    "a",
                                                    { href: "#", className: "has-ul" },
                                                    React.createElement("i", { className: "icon-firefox" }),
                                                    " Second level with child"
                                                ),
                                                React.createElement(
                                                    "ul",
                                                    { className: "hidden-ul" },
                                                    React.createElement(
                                                        "li",
                                                        null,
                                                        React.createElement(
                                                            "a",
                                                            { href: "#" },
                                                            React.createElement("i", { className: "icon-android" }),
                                                            " Third level"
                                                        )
                                                    ),
                                                    React.createElement(
                                                        "li",
                                                        null,
                                                        React.createElement(
                                                            "a",
                                                            { href: "#", className: "has-ul" },
                                                            React.createElement("i", { className: "icon-apple2" }),
                                                            " Third level with child"
                                                        ),
                                                        React.createElement(
                                                            "ul",
                                                            { className: "hidden-ul" },
                                                            React.createElement(
                                                                "li",
                                                                null,
                                                                React.createElement(
                                                                    "a",
                                                                    { href: "#" },
                                                                    React.createElement("i", { className: "icon-html5" }),
                                                                    " Fourth level"
                                                                )
                                                            ),
                                                            React.createElement(
                                                                "li",
                                                                null,
                                                                React.createElement(
                                                                    "a",
                                                                    { href: "#" },
                                                                    React.createElement("i", { className: "icon-css3" }),
                                                                    " Fourth level"
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    React.createElement(
                                                        "li",
                                                        null,
                                                        React.createElement(
                                                            "a",
                                                            { href: "#" },
                                                            React.createElement("i", { className: "icon-windows" }),
                                                            " Third level"
                                                        )
                                                    )
                                                )
                                            ),
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement(
                                                    "a",
                                                    { href: "#" },
                                                    React.createElement("i", { className: "icon-chrome" }),
                                                    " Second level"
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "sidebar-category" },
                            React.createElement(
                                "div",
                                { className: "category-title" },
                                React.createElement(
                                    "span",
                                    null,
                                    "Form example"
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
                                "form",
                                { action: "#", className: "category-content" },
                                React.createElement(
                                    "div",
                                    { className: "form-group" },
                                    React.createElement(
                                        "label",
                                        null,
                                        "Your name:"
                                    ),
                                    React.createElement("input", { type: "text", className: "form-control", placeholder: "Username" })
                                ),
                                React.createElement(
                                    "div",
                                    { className: "form-group" },
                                    React.createElement(
                                        "label",
                                        null,
                                        "Your password:"
                                    ),
                                    React.createElement("input", { type: "password", className: "form-control", placeholder: "Password" })
                                ),
                                React.createElement(
                                    "div",
                                    { className: "form-group" },
                                    React.createElement(
                                        "label",
                                        null,
                                        "Your message:"
                                    ),
                                    React.createElement("textarea", { rows: "3", cols: "3", className: "form-control", placeholder: "Default textarea" })
                                ),
                                React.createElement(
                                    "div",
                                    { className: "row" },
                                    React.createElement(
                                        "div",
                                        { className: "col-xs-6" },
                                        React.createElement(
                                            "button",
                                            { type: "reset", className: "btn btn-danger btn-block" },
                                            "Reset"
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "col-xs-6" },
                                        React.createElement(
                                            "button",
                                            { type: "submit", className: "btn btn-info btn-block" },
                                            "Submit"
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

    return EntriesSidebar;
})(Component);

module.exports = EntriesSidebar;
/*<!-- Sidebar search -->*/ /*<!-- /sidebar search -->*/ /*<!-- Sub navigation -->*/ /*<!-- /sub navigation -->*/ /*<!-- Form sample -->*/ /*<!-- /form sample -->*/