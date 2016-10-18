"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var withRouter = require("react-router").withRouter;
var SearchBar = _interopRequire(require("./SearchBar"));

var store = _interopRequire(require("../stores/store"));

var actions = _interopRequire(require("../actions/actions"));

var CONSTANTS = _interopRequire(require("../constants/constants"));

var get = require("../utils/APIManager").get;


var MODULE_NAME = "NavBar";

var NavBar = (function (Component) {
    function NavBar(props, context, updater) {
        _classCallCheck(this, NavBar);

        var functionName = "constructor";
        console.log(MODULE_NAME, functionName + " called");

        _get(Object.getPrototypeOf(NavBar.prototype), "constructor", this).call(this, props, context, updater);

        console.log(MODULE_NAME, functionName, "props", this.props);

        this.handleLoginSignupClick = this.handleLoginSignupClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    _inherits(NavBar, Component);

    _prototypeProperties(NavBar, null, {
        handleLoginSignupClick: {
            value: function handleLoginSignupClick(displayEnum) {
                var functionName = "handleLoginSignupClick";
                console.log(MODULE_NAME, functionName + " called", displayEnum);

                if (displayEnum != null && displayEnum.length > 0) {
                    store.currentStore().dispatch(actions.updateHomeComponentDisplay(displayEnum));
                } else {
                    console.log("Bad display enum value", displayEnum);
                }
            },
            writable: true,
            configurable: true
        },
        handleLogoutClick: {
            value: function handleLogoutClick() {
                var functionName = "handleLogoutClick";
                console.log(MODULE_NAME, functionName + " called");

                var _this = this;

                get("/account/logout", null, function (err, result) {
                    if (err != null) {
                        console.log("Error", err.code, err.message);
                        return;
                    }

                    store.currentStore().dispatch(actions.updateCurrentUser(null));

                    console.log(MODULE_NAME, functionName, "this.props.router", _this.props.router);
                    _this.props.router.push("/");
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
                var _this = this;
                var functionName = "render";
                console.log(MODULE_NAME, functionName + " called", this.props);

                var username = this.props.currentUser != null ? this.props.currentUser.username : null;

                var navBarLoggedInList = React.createElement(
                    "ul",
                    { className: "nav navbar-nav navbar-right" },
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "form",
                            { className: "navbar-form navbar-right" },
                            React.createElement(SearchBar, null)
                        )
                    ),
                    React.createElement(
                        "li",
                        { className: "dropdown dropdown-user" },
                        React.createElement(
                            "a",
                            { className: "dropdown-toggle", "data-toggle": "dropdown" },
                            React.createElement("img", { src: "/assets/images/image.png", alt: "" }),
                            React.createElement(
                                "span",
                                null,
                                username
                            ),
                            React.createElement("i", { className: "caret" })
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
                                    React.createElement("i", { className: "icon-user-plus" }),
                                    " My profile"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    React.createElement("i", { className: "icon-coins" }),
                                    " My balance"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    React.createElement(
                                        "span",
                                        { className: "badge badge-warning pull-right" },
                                        "58"
                                    ),
                                    " ",
                                    React.createElement("i", { className: "icon-comment-discussion" }),
                                    " Messages"
                                )
                            ),
                            React.createElement("li", { className: "divider" }),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    React.createElement("i", { className: "icon-cog5" }),
                                    " Account settings"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { onClick: this.handleLogoutClick },
                                    React.createElement("i", { className: "icon-switch2" }),
                                    "Logout"
                                )
                            )
                        )
                    )
                );

                var navBarNotLoggedInList = React.createElement(
                    "ul",
                    { className: "nav navbar-nav navbar-right" },
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "button",
                            { type: "button", className: "btn btn-default btn-xs navbar-btn", onClick: function () {
                                    return _this.handleLoginSignupClick(CONSTANTS.HOME_DISPLAY_ENUM.SHOW_LOGIN);
                                } },
                            "Log In"
                        )
                    )
                );

                var navBarRightList = this.props.currentUser == null ? navBarNotLoggedInList : navBarLoggedInList;
                return React.createElement(
                    "div",
                    { className: "navbar navbar-inverse" },
                    React.createElement(
                        "div",
                        { className: "navbar-header" },
                        React.createElement(
                            "a",
                            { className: "navbar-brand", href: "/" },
                            React.createElement("img", { src: "/assets/images/logo_light.png", alt: "" })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "navbar-collapse collapse", id: "navbar-mobile" },
                        navBarRightList
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return NavBar;
})(Component);

module.exports = withRouter(NavBar);
/*<li>
   <a href="#">
       <i className="icon-search4"></i>
       <span className="visible-xs-inline-block position-right">Icon link</span>
   </a>
</li>*/ /*<div className="input-group has-feedback has-feedback-left">*/ /*</div>*/ /*<input type="search" className="form-control" placeholder="Search" />
                                                                                    <div className="form-control-feedback">
                                                                                       <i className="icon-search4 text-muted text-size-base"></i>
                                                                                    </div>*/ /*<li>
                                                                                                <a href="#">
                                                                                                    <i className="icon-search4"></i>
                                                                                                    <span className="visible-xs-inline-block position-right">Icon link</span>
                                                                                                </a>
                                                                                             </li>*/ /*<ul className="nav navbar-nav pull-right visible-xs-block">
                                                                                                        <li><a data-toggle="collapse" data-target="#navbar-mobile"><i className="icon-tree5"></i></a></li>
                                                                                                        <li><a className="sidebar-mobile-main-toggle"><i className="icon-paragraph-justify3"></i></a></li>
                                                                                                        <li><a className="sidebar-mobile-secondary-toggle"><i className="icon-more"></i></a></li>
                                                                                                     </ul>*/ /*<ul className="nav navbar-nav">
                                                                                                                <li><a className="sidebar-control sidebar-main-toggle hidden-xs"><i className="icon-paragraph-justify3"></i></a></li>
                                                                                                                <li><a className="sidebar-control sidebar-secondary-hide hidden-xs"><i className="icon-transmission"></i></a></li>
                                                                                                             </ul>*/