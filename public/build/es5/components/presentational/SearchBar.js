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
var withRouter = require("react-router").withRouter;
var store = _interopRequire(require("../stores/store"));

var actions = _interopRequire(require("../actions/actions"));

var get = require("../utils/APIManager").get;


var MODULE_NAME = "SearchBar";

var INPUT_CLASS = {
    ON_FOCUS: "form-control bg-primary",
    ON_BLUR: "form-control"
};

var Search = (function (Component) {
    function Search(props, context, updater) {
        _classCallCheck(this, Search);

        var functionName = "constructor";
        console.log(MODULE_NAME, functionName + " called");

        _get(Object.getPrototypeOf(Search.prototype), "constructor", this).call(this, props, context, updater);

        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
        // this.handleOnBlur = this.handleOnBlur.bind(this)
        // this.handleOnFocus = this.handleOnFocus.bind(this)

        this.context = context;
        this.state = {
            searchQuery: "",
            classForInput: INPUT_CLASS.ON_BLUR
        };
    }

    _inherits(Search, Component);

    _prototypeProperties(Search, null, {
        handleSearchTextChange: {

            // handleOnBlur(event) {
            //     var functionName = "handleOnBlur"
            //     console.log(MODULE_NAME, functionName + " called", event.target.name, event.target.value)

            //     var newState = Object.assign({}, this.state)
            //     newState.classForInput = INPUT_CLASS.ON_BLUR

            //     this.setState(newState)
            // }

            // handleOnFocus(event) {
            //     var functionName = "handleOnFocus"
            //     console.log(MODULE_NAME, functionName + " called", event.target.name, event.target.value)

            //     var newState = Object.assign({}, this.state)
            //     newState.classForInput = INPUT_CLASS.ON_FOCUS

            //     this.setState(newState)
            // }

            value: function handleSearchTextChange(event) {
                var functionName = "handleSearchTextChange";
                console.log(MODULE_NAME, functionName + " called", event.target.name, event.target.value);

                var newState = Object.assign({}, this.state);
                newState.searchQuery = event.target.value;

                this.setState(newState);
            },
            writable: true,
            configurable: true
        },
        handleSearchSubmit: {
            value: function handleSearchSubmit(event) {
                var functionName = "handleSearchSubmit";
                console.log(MODULE_NAME, functionName + " called", event.target.name, this.state.searchQuery);

                event.preventDefault();

                if (this.state.searchQuery.length === 0) {
                    // TODO Show user a visual error
                    console.log("Attempting to search empty string. Exiting.");
                    return;
                }

                // TODO Handle submitting empty text
                store.currentStore().dispatch(actions.search(null));

                console.log(MODULE_NAME, functionName + " this.props.router", this.props.router);
                this.props.router.push("/search?q=" + this.state.searchQuery);
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
                console.log(MODULE_NAME, functionName + " called", this.props);

                return React.createElement(
                    "div",
                    { className: "input-group has-feedback has-feedback-left" },
                    React.createElement("input", { type: "searchInput", className: this.state.classForInput, onChange: this.handleSearchTextChange }),
                    React.createElement(
                        "div",
                        { className: "form-control-feedback" },
                        React.createElement("i", { className: "icon-search4 text-muted text-size-base" })
                    ),
                    React.createElement(
                        "div",
                        { className: "input-group-btn" },
                        React.createElement(
                            "button",
                            { type: "submit", className: "btn action", onClick: this.handleSearchSubmit },
                            "Search"
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

module.exports = withRouter(Search);
/*<input name="searchInput" placeholder="Enter user name" type="search" onChange={this.handleSearchTextChange}></input>
<button type="submit" onClick={this.handleSearchSubmit}>Submit</button>*/ /*<input type="searchInput" className={this.state.classForInput} onChange={this.handleSearchTextChange} *onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} />*/