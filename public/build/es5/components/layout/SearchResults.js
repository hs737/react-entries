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
var Link = require("react-router").Link;


// import Search from '../presentational/Search'

var store = _interopRequire(require("../stores/store"));

var CONSTANTS = _interopRequire(require("../constants/constants"));

var actions = _interopRequire(require("../actions/actions"));

var _utilsAPIManager = require("../utils/APIManager");

var get = _utilsAPIManager.get;
var post = _utilsAPIManager.post;
var SearchResults = (function (Component) {
    function SearchResults(props, context, updater) {
        _classCallCheck(this, SearchResults);

        var functionName = "constructor";
        console.log(functionName + " called");

        _get(Object.getPrototypeOf(SearchResults.prototype), "constructor", this).call(this, props, context, updater);

        this.createProfileHandler = this.createProfileHandler.bind(this);

        this.state = {
            searchResults: []
        };
    }

    _inherits(SearchResults, Component);

    _prototypeProperties(SearchResults, null, {
        componentWillMount: {
            value: function componentWillMount() {
                var functionName = "componentWillMount";
                console.log(functionName + " called", this.props.location.query);

                var query = {
                    text: this.props.location.query.q
                };

                var _this = this;

                get("/api/search", query, function (err, results) {
                    if (err) {
                        console.log(functionName, "Error:", err);
                        return;
                    }

                    var searchResults = results.result;
                    console.log(functionName, "Search results", searchResults);
                    store.currentStore().dispatch(actions.search(searchResults));
                });
            },
            writable: true,
            configurable: true
        },
        createProfileHandler: {

            // componentDidMount() {
            //     var functionName = "componentDidMount"
            //     console.log(functionName + " called", this.props.location.query)

            //     var query = {
            //         text: this.props.location.query.q
            //     }

            //     var _this = this

            //     get("/api/search", query, function(err, results) {
            //         if (err) {
            //             console.log(functionName, "Error:", err)
            //             return
            //         }

            //         var searchResults = results.result;
            //         console.log(functionName, "Search results", searchResults)
            //         store.currentStore().dispatch(actions.search(searchResults))

            //         // _this.setState({
            //         //     searchResults: searchResults
            //         // })
            //     })

            // }

            value: function createProfileHandler() {
                var functionName = "createProfileHandler";
                console.log(functionName + " called");

                post("/api/profile", { name: this.props.location.query.q }, function (err, result) {
                    if (err) {
                        console.log(functionName, "Error:", err);
                        // TODO do not call profile page if current profile isn't loaded
                        return;
                    }

                    var profile = result.result;
                    console.log(functionName, profile);

                    store.currentStore().dispatch(actions.updateCurrentProfile(profile._id));
                });
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                var functionName = "render";
                console.log(functionName + " called", this.props.searchResults);

                var resultsContent = null;
                if (!this.props.searchResults || this.props.searchResults.length === 0) {
                    resultsContent = React.createElement(
                        "span",
                        null,
                        "Your search for ",
                        React.createElement(
                            "strong",
                            null,
                            this.props.location.query.q
                        ),
                        " was not found.",
                        React.createElement(
                            Link,
                            { onClick: this.createProfileHandler, to: "/" },
                            "Would you like to create a profile for ",
                            React.createElement(
                                "strong",
                                null,
                                this.props.location.query.q
                            )
                        )
                    );
                } else {
                    resultsContent = React.createElement(
                        "ol",
                        null,
                        this.props.searchResults.map(function (elem, idx) {
                            return React.createElement(
                                "li",
                                { key: idx },
                                React.createElement(
                                    Link,
                                    { to: "/" },
                                    elem.name
                                )
                            );
                        })
                    );
                }

                return React.createElement(
                    "div",
                    null,
                    "searchResults",
                    React.createElement("br", null),
                    resultsContent
                );
            },
            writable: true,
            configurable: true
        }
    });

    return SearchResults;
})(Component);

var mapStateToProps = function (storesState) {
    console.log("mapStateToProps", JSON.stringify(storesState));
    return {
        searchResults: storesState.searchReducer.searchResults
    };
};

module.exports = connect(mapStateToProps)(SearchResults)
// export default SearchResults
;
// _this.setState({
//     searchResults: searchResults
// })