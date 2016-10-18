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


// import Search from '../presentational/Search'

var store = _interopRequire(require("../stores/store"));

var actions = _interopRequire(require("../actions/actions"));

var _utilsAPIManager = require("../utils/APIManager");

var get = _utilsAPIManager.get;
var post = _utilsAPIManager.post;


var MODULE_NAME = "SearchResults";

var SearchResults = (function (Component) {
    function SearchResults(props, context, updater) {
        _classCallCheck(this, SearchResults);

        var functionName = "constructor";
        console.log(MODULE_NAME, functionName + " called");

        _get(Object.getPrototypeOf(SearchResults.prototype), "constructor", this).call(this, props, context, updater);

        this.createProfileHandler = this.createProfileHandler.bind(this);

        this.state = {
            searchResults: []
        };
    }

    _inherits(SearchResults, Component);

    _prototypeProperties(SearchResults, null, {
        createProfileHandler: {
            value: function createProfileHandler() {
                var functionName = "createProfileHandler";
                console.log(MODULE_NAME, functionName + " called");

                var _this = this;
                var params = {
                    name: this.props.queryText,
                    user: this.props.user._id
                };
                post("/api/profile", params, function (err, result) {
                    if (err) {
                        console.log(MODULE_NAME, functionName, "Error:", err);
                        // TODO do not call profile page if current profile isn't loaded
                        return;
                    }

                    var profile = result.result;
                    console.log(MODULE_NAME, functionName, profile);

                    // updateProfileDetails(profile._id)

                    console.log(MODULE_NAME, functionName, "this.props.router", _this.props.router);
                    _this.props.router.push("/profile/" + profile._id);
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
                var functionName = "render";
                console.log(MODULE_NAME, functionName + " called", this.props.searchResults);

                var resultsContent = null;
                if (!this.props.searchResults || this.props.searchResults.length === 0) {
                    console.log("Search results for no results found");
                    resultsContent = React.createElement(
                        "span",
                        null,
                        "Your search for ",
                        React.createElement(
                            "strong",
                            null,
                            this.props.queryText
                        ),
                        " was not found.",
                        React.createElement(
                            "a",
                            { onClick: this.createProfileHandler },
                            "Would you like to create a profile for ",
                            React.createElement(
                                "strong",
                                null,
                                this.props.queryText
                            )
                        )
                    );
                } else {
                    console.log("Search results for some results found");
                    var _this = this;
                    resultsContent = React.createElement(
                        "ol",
                        null,
                        this.props.searchResults.map(function (elem, idx) {
                            return React.createElement(
                                "li",
                                { key: idx, className: "media" },
                                React.createElement(
                                    "div",
                                    { className: "media-left media-middle" },
                                    React.createElement(
                                        Link,
                                        { to: "/profile/" + elem._id },
                                        React.createElement("img", { src: "assets/images/demo/users/face1.jpg", className: "img-circle", alt: "" })
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "media-body" },
                                    React.createElement(
                                        "div",
                                        { className: "media-heading text-semibold" },
                                        React.createElement(
                                            Link,
                                            { to: "/profile/" + elem._id },
                                            elem.name
                                        )
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "media-right media-middle" },
                                    React.createElement(
                                        "ul",
                                        { className: "icons-list text-nowrap" },
                                        React.createElement(
                                            "li",
                                            { className: "dropdown" },
                                            React.createElement(
                                                "a",
                                                { href: "#", className: "dropdown-toggle", "data-toggle": "dropdown", "aria-expanded": "false" },
                                                React.createElement("i", { className: "icon-menu9" })
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
                                                        React.createElement("i", { className: "icon-comment-discussion pull-right" }),
                                                        " Start chat"
                                                    )
                                                ),
                                                React.createElement(
                                                    "li",
                                                    null,
                                                    React.createElement(
                                                        "a",
                                                        { href: "#" },
                                                        React.createElement("i", { className: "icon-phone2 pull-right" }),
                                                        " Make a call"
                                                    )
                                                ),
                                                React.createElement(
                                                    "li",
                                                    null,
                                                    React.createElement(
                                                        "a",
                                                        { href: "#" },
                                                        React.createElement("i", { className: "icon-mail5 pull-right" }),
                                                        " Send mail"
                                                    )
                                                ),
                                                React.createElement("li", { className: "divider" }),
                                                React.createElement(
                                                    "li",
                                                    null,
                                                    React.createElement(
                                                        "a",
                                                        { href: "#" },
                                                        React.createElement("i", { className: "icon-statistics pull-right" }),
                                                        " Statistics"
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            );
                        })
                    );
                }

                return React.createElement(
                    "div",
                    { className: "content-group" },
                    React.createElement(
                        "p",
                        { className: "text-muted text-size-small content-group" },
                        "About ",
                        this.props.searchResults.length,
                        " results (0.34 seconds)"
                    ),
                    React.createElement(
                        "div",
                        { className: "search-results-list" },
                        React.createElement(
                            "div",
                            { className: "text-size-small text-uppercase text-semibold text-muted mb-10" },
                            "List view"
                        ),
                        React.createElement(
                            "div",
                            { className: "panel panel-body" },
                            React.createElement(
                                "ul",
                                { className: "media-list" },
                                resultsContent
                            )
                        )
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return SearchResults;
})(Component);

// var mapStateToProps = function(storesState) {
//     console.log("mapStateToProps", JSON.stringify(storesState))
//     return {
//         searchResults: storesState.searchReducer.searchResults
//     }
// }

// export default connect(mapStateToProps)(SearchResults)
module.exports = withRouter(SearchResults);
// return <li key={idx}><Link onClick={() => _this.getProfileData(elem)} to={"/profile/" + elem._id}>{elem.name}</Link></li>
/*<span className="text-muted">Development</span>*/ /*<li className="media-header text-muted">Team leaders</li>*/