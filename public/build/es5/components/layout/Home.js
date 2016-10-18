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
var NavBar = _interopRequire(require("../presentational/NavBar"));

var Login = _interopRequire(require("../presentational/Login"));

var CONSTANTS = _interopRequire(require("../constants/constants"));

var store = _interopRequire(require("../stores/store"));

var MODULE_NAME = "Home";

var Home = (function (Component) {
    function Home(props, context, updater) {
        _classCallCheck(this, Home);

        var functionName = "constructor";
        console.log(MODULE_NAME, functionName + " called");

        _get(Object.getPrototypeOf(Home.prototype), "constructor", this).call(this, props, context, updater);

        console.log(MODULE_NAME, functionName, "props", this.props);

        this.state = {
            currentUser: null,
            displaySelection: null
        };
    }

    _inherits(Home, Component);

    _prototypeProperties(Home, null, {
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
                console.log(MODULE_NAME, functionName + " called", this.props.location.query.q, this.props);

                var mainDisplayComponent = null;
                if (this.props.displaySelection == CONSTANTS.HOME_DISPLAY_ENUM.SHOW_LOGIN) {
                    mainDisplayComponent = React.createElement(Login, null);
                } else if (this.props.displaySelection == CONSTANTS.HOME_DISPLAY_ENUM.SHOW_DEFAULT) {
                    mainDisplayComponent = "default";
                } else {
                    mainDisplayComponent = "woops";
                }

                return React.createElement(
                    "div",
                    null,
                    React.createElement(NavBar, { currentUser: this.props.currentUser }),
                    React.createElement(
                        "div",
                        { className: "login-container login-cover" },
                        React.createElement(
                            "div",
                            { className: "page-container" },
                            React.createElement(
                                "div",
                                { className: "page-content" },
                                React.createElement(
                                    "div",
                                    { className: "content-wrapper" },
                                    mainDisplayComponent
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

    return Home;
})(Component);

var mapStateToProps = function (newStateInStore) {
    console.log("mapStateToProps", JSON.stringify(newStateInStore));

    return {
        currentUser: newStateInStore.userReducer.currentUser,
        displaySelection: newStateInStore.uiReducer.displaySelection
    };
};

module.exports = connect(mapStateToProps)(Home);