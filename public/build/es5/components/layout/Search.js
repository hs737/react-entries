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
var _reactRouter = require("react-router");

var Link = _reactRouter.Link;
var withRouter = _reactRouter.withRouter;
var SearchResults = _interopRequire(require("../presentational/SearchResults"));

var NavBar = _interopRequire(require("../presentational/NavBar"));

var store = _interopRequire(require("../stores/store"));

var CONSTANTS = _interopRequire(require("../constants/constants"));

var actions = _interopRequire(require("../actions/actions"));

var _utilsAPIManager = require("../utils/APIManager");

var get = _utilsAPIManager.get;
var post = _utilsAPIManager.post;


var MODULE_NAME = "Search";

function executeSearch(q) {
    var functionName = "executeSearch";
    console.log(MODULE_NAME, functionName + " called", q);

    var query = {
        constraints: {
            text: q
        },
        options: {}
    };

    var _this = this;

    get("/api/search", query, function (err, results) {
        if (err) {
            console.log(MODULE_NAME, functionName, "Error:", err);
            return;
        }

        var searchResults = results.result;
        console.log(MODULE_NAME, functionName, "Search results", searchResults);

        store.currentStore().dispatch(actions.search(searchResults));
    });
}

var Search = (function (Component) {
    function Search(props, context, updater) {
        _classCallCheck(this, Search);

        var functionName = "constructor";
        console.log(MODULE_NAME, functionName + " called");

        _get(Object.getPrototypeOf(Search.prototype), "constructor", this).call(this, props, context, updater);

        this.state = {
            searchResults: null
        };
    }

    _inherits(Search, Component);

    _prototypeProperties(Search, null, {
        componentWillMount: {
            value: function componentWillMount() {
                var functionName = "componentWillMount";
                console.log(MODULE_NAME, functionName + " called", this.props.location.query);

                if (this.props.currentUser == null) {
                    console.log("this.props.currentUser is null. Redirecting.");
                    this.props.router.push("/");
                    return;
                }

                if (this.props.searchResults == null) {
                    executeSearch(this.props.location.query.q);
                }
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

                if (nextProps.searchResults == null) {
                    executeSearch(nextProps.location.query.q);
                }
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
                console.log(MODULE_NAME, functionName + " called", this.props.location.query.q, this.props.searchResults);

                var resultsContent = null;
                if (this.props.searchResults != null) {
                    resultsContent = React.createElement(SearchResults, { user: this.props.currentUser, searchResults: this.props.searchResults, queryText: this.props.location.query.q });
                }

                return React.createElement(
                    "div",
                    null,
                    React.createElement(NavBar, { currentUser: this.props.currentUser }),
                    React.createElement(
                        "div",
                        { className: "page-container" },
                        React.createElement(
                            "div",
                            { className: "page-content" },
                            React.createElement(
                                "div",
                                { className: "content-wrapper" },
                                React.createElement(
                                    "div",
                                    { className: "content" },
                                    resultsContent
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

    return Search;
})(Component);

var mapStateToProps = function (newStateInStore) {
    console.log("mapStateToProps", JSON.stringify(newStateInStore));
    return {
        currentUser: newStateInStore.userReducer.currentUser,
        searchResults: newStateInStore.searchReducer.searchResults
    };
};

module.exports = withRouter(connect(mapStateToProps)(Search));