"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var store = _interopRequire(require("../stores/store"));

var actions = _interopRequire(require("../actions/actions"));

var CONSTANTS = _interopRequire(require("../constants/constants"));

var post = require("../utils/APIManager").post;


var MODULE_NAME = "Login";

var FIELD_ENUM = {
    USERNAME: "username",
    PASSWORD: "password",
    EMAIL: "email"
};

var SUBMIT_ENUM = {
    REGISTER: "register",
    SIGNIN: "signin"
};

var BUTTON_DETAILS = {
    VALID: {
        CLASS: "btn bg-blue btn-block",
        TEXT: "Login"
    },
    INVALID: {
        CLASS: "btn bg-warning btn-block",
        TEXT: "Invalid authentication. Try again"
    }
};

var Login = (function (Component) {
    function Login(props, context, updater) {
        _classCallCheck(this, Login);

        var functionName = "constructor";
        console.log(MODULE_NAME, functionName + " called");

        _get(Object.getPrototypeOf(Login.prototype), "constructor", this).call(this, props, context, updater);

        console.log(MODULE_NAME, functionName, "props", this.props);

        this.state = {
            username: "",
            password: "",
            email: "",
            submitButtonDetails: BUTTON_DETAILS.VALID
        };

        this.handleFieldUpdate = this.handleFieldUpdate.bind(this);
        this.handlLoginSubmit = this.handlLoginSubmit.bind(this);
    }

    _inherits(Login, Component);

    _prototypeProperties(Login, null, {
        handleFieldUpdate: {
            value: function handleFieldUpdate(fieldType, event) {
                var functionName = "handleFieldUpdate";
                console.log(MODULE_NAME, functionName + " called", fieldType, event.target.value);

                var newState = Object.assign({}, this.state);

                switch (fieldType) {
                    case FIELD_ENUM.USERNAME:
                        newState.username = event.target.value;
                        break;
                    case FIELD_ENUM.PASSWORD:
                        newState.password = event.target.value;
                        break;
                    case FIELD_ENUM.EMAIL:
                        newState.email = event.target.value;
                        break;
                    default:
                        console.log("Cannot recognize field value:", fieldType);
                }

                this.setState(newState);
            },
            writable: true,
            configurable: true
        },
        handlLoginSubmit: {
            value: function handlLoginSubmit(submitType, event) {
                var functionName = "handlLoginSubmit";
                console.log(MODULE_NAME, functionName + " called", event.target.name, submitType, this.state.username, this.state.password, this.state.email);

                event.preventDefault();

                if (this.state.username == null || this.state.username.length == 0) {
                    // TODO Error handle this better
                    console.log("Error: Invalid username entered", JSON.stringify(this.state.username));
                } else if (this.state.password == null || this.state.password.length == 0) {
                    // TODO Error handle this better
                    console.log("Error: Invalid password entered", JSON.stringify(this.state.password));
                }

                if (submitType === SUBMIT_ENUM.SIGNIN) {
                    var params = {
                        username: this.state.username,
                        password: this.state.password
                    };

                    var _this = this;

                    post("/account/login", params, function (err, user) {
                        if (err != null) {
                            console.log("Error", err.code, err.message);
                            return;
                        }

                        if (user.result == null) {
                            console.log("User is null.");

                            var newState = Object.assign({}, _this.state);
                            newState.submitButtonDetails = BUTTON_DETAILS.INVALID;
                            _this.setState(newState);

                            return;
                        }

                        console.log("Logged in as user", user.result);
                        store.currentStore().dispatch(actions.updateHomeComponentDisplay(CONSTANTS.HOME_DISPLAY_ENUM.SHOW_DEFAULT));
                        store.currentStore().dispatch(actions.updateCurrentUser(user.result));
                    });
                } else if (submitType === SUBMIT_ENUM.REGISTER && this.state.email != null && this.state.email.length > 0) {
                    var _this = this;

                    var params = {
                        username: this.state.username,
                        password: this.state.password,
                        email: this.state.email
                    };

                    post("/account/register", params, function (err, user) {
                        if (err != null) {
                            console.log("Error", err.code, err.message);
                            return;
                        }

                        console.log("Created user", user.result);
                        store.currentStore().dispatch(actions.updateHomeComponentDisplay(CONSTANTS.HOME_DISPLAY_ENUM.SHOW_DEFAULT));
                        store.currentStore().dispatch(actions.updateCurrentUser(user.result));
                    });
                } else {
                    console.log("Cannot recognize field value:", fieldType);
                }
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

                return React.createElement(
                    "div",
                    { className: "tabbable panel login-form width-400" },
                    React.createElement(
                        "ul",
                        { className: "nav nav-tabs nav-justified" },
                        React.createElement(
                            "li",
                            { className: "active" },
                            React.createElement(
                                "a",
                                { href: "#basic-tab1", "data-toggle": "tab" },
                                React.createElement(
                                    "h6",
                                    null,
                                    "Sign in"
                                )
                            )
                        ),
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "#basic-tab2", "data-toggle": "tab" },
                                React.createElement(
                                    "h6",
                                    null,
                                    "Register"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "tab-content panel-body" },
                        React.createElement(
                            "div",
                            { className: "tab-pane fade in active", id: "basic-tab1" },
                            React.createElement(
                                "div",
                                { className: "text-center" },
                                React.createElement(
                                    "div",
                                    { className: "icon-object border-slate-300 text-slate-300" },
                                    React.createElement("i", { className: "icon-reading" })
                                ),
                                React.createElement(
                                    "h5",
                                    { className: "content-group" },
                                    "Login to your account ",
                                    React.createElement(
                                        "small",
                                        { className: "display-block" },
                                        "Your credentials"
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "form-group has-feedback has-feedback-left" },
                                React.createElement("input", { type: "text", className: "form-control", placeholder: "Username", name: "username", required: "required", value: this.state.username, onChange: function (e) {
                                        return _this.handleFieldUpdate(FIELD_ENUM.USERNAME, e);
                                    } }),
                                React.createElement(
                                    "div",
                                    { className: "form-control-feedback" },
                                    React.createElement("i", { className: "icon-user text-muted" })
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "form-group has-feedback has-feedback-left" },
                                React.createElement("input", { type: "password", className: "form-control", placeholder: "Password", name: "password", required: "required", value: this.state.password, onChange: function (e) {
                                        return _this.handleFieldUpdate(FIELD_ENUM.PASSWORD, e);
                                    } }),
                                React.createElement(
                                    "div",
                                    { className: "form-control-feedback" },
                                    React.createElement("i", { className: "icon-lock2 text-muted" })
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "form-group login-options" },
                                React.createElement(
                                    "div",
                                    { className: "row" },
                                    React.createElement(
                                        "div",
                                        { className: "col-sm-6" },
                                        React.createElement(
                                            "label",
                                            { className: "checkbox-inline" },
                                            React.createElement("input", { type: "checkbox", className: "styled", checked: "checked" }),
                                            "Remember"
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "col-sm-6 text-right" },
                                        React.createElement(
                                            "a",
                                            { href: "login_password_recover.html" },
                                            "Forgot password?"
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "form-group" },
                                React.createElement(
                                    "button",
                                    { type: "submit", className: this.state.submitButtonDetails.CLASS, onClick: function (e) {
                                            return _this.handlLoginSubmit(SUBMIT_ENUM.SIGNIN, e);
                                        } },
                                    this.state.submitButtonDetails.TEXT,
                                    React.createElement("i", { className: "icon-arrow-right14 position-right" })
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "content-divider text-muted form-group" },
                                React.createElement(
                                    "span",
                                    null,
                                    "or sign in with"
                                )
                            ),
                            React.createElement(
                                "ul",
                                { className: "list-inline form-group list-inline-condensed text-center" },
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "#", className: "btn border-indigo text-indigo btn-flat btn-icon btn-rounded" },
                                        React.createElement("i", { className: "icon-facebook" })
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "#", className: "btn border-pink-300 text-pink-300 btn-flat btn-icon btn-rounded" },
                                        React.createElement("i", { className: "icon-dribbble3" })
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "#", className: "btn border-slate-600 text-slate-600 btn-flat btn-icon btn-rounded" },
                                        React.createElement("i", { className: "icon-github" })
                                    )
                                ),
                                React.createElement(
                                    "li",
                                    null,
                                    React.createElement(
                                        "a",
                                        { href: "#", className: "btn border-info text-info btn-flat btn-icon btn-rounded" },
                                        React.createElement("i", { className: "icon-twitter" })
                                    )
                                )
                            ),
                            React.createElement(
                                "span",
                                { className: "help-block text-center no-margin" },
                                "By continuing, you're confirming that you've read our ",
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    "Terms & Conditions"
                                ),
                                " and ",
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    "Cookie Policy"
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "tab-pane fade", id: "basic-tab2" },
                            React.createElement(
                                "div",
                                { className: "text-center" },
                                React.createElement(
                                    "div",
                                    { className: "icon-object border-success text-success" },
                                    React.createElement("i", { className: "icon-plus3" })
                                ),
                                React.createElement(
                                    "h5",
                                    { className: "content-group" },
                                    "Create new account ",
                                    React.createElement(
                                        "small",
                                        { className: "display-block" },
                                        "All fields are required"
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "form-group has-feedback has-feedback-left" },
                                React.createElement("input", { type: "text", className: "form-control", placeholder: "Your username", value: this.state.username, onChange: function (e) {
                                        return _this.handleFieldUpdate(FIELD_ENUM.USERNAME, e);
                                    } }),
                                React.createElement(
                                    "div",
                                    { className: "form-control-feedback" },
                                    React.createElement("i", { className: "icon-user-check text-muted" })
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "form-group has-feedback has-feedback-left" },
                                React.createElement("input", { type: "password", className: "form-control", placeholder: "Create password", value: this.state.password, onChange: function (e) {
                                        return _this.handleFieldUpdate(FIELD_ENUM.PASSWORD, e);
                                    } }),
                                React.createElement(
                                    "div",
                                    { className: "form-control-feedback" },
                                    React.createElement("i", { className: "icon-user-lock text-muted" })
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "form-group has-feedback has-feedback-left" },
                                React.createElement("input", { type: "text", className: "form-control", placeholder: "Your email", value: this.state.email, onChange: function (e) {
                                        return _this.handleFieldUpdate(FIELD_ENUM.EMAIL, e);
                                    } }),
                                React.createElement(
                                    "div",
                                    { className: "form-control-feedback" },
                                    React.createElement("i", { className: "icon-mention text-muted" })
                                )
                            ),
                            React.createElement(
                                "button",
                                { type: "submit", className: "btn bg-indigo-400 btn-block", onClick: function (e) {
                                        return _this.handlLoginSubmit(SUBMIT_ENUM.REGISTER, e);
                                    } },
                                "Register ",
                                React.createElement("i", { className: "icon-circle-right2 position-right" })
                            )
                        )
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return Login;
})(Component);

module.exports = Login;
/*
<div className="content-divider text-muted form-group"><span>Additions</span></div>
<div className="form-group">
   <div className="checkbox">
       <label>
           <input type="checkbox" className="styled" checked="checked" />
           Send me <a href="#">test account settings</a>
       </label>
   </div>
    <div className="checkbox">
       <label>
           <input type="checkbox" className="styled" checked="checked" />
           Subscribe to monthly newsletter
       </label>
   </div>
    <div className="checkbox">
       <label>
           <input type="checkbox" className="styled" />
           Accept <a href="#">terms of service</a>
       </label>
   </div>
</div>
*/