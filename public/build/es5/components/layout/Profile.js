"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var _reactRouter = require("react-router");

var Link = _reactRouter.Link;
var withRouter = _reactRouter.withRouter;
var connect = require("react-redux").connect;
var NavBar = _interopRequire(require("../presentational/NavBar"));

var PageHeader = _interopRequire(require("../presentational/PageHeader"));

var SideBar = _interopRequire(require("../presentational/SideBar"));

var EntriesPanel = _interopRequire(require("../presentational/EntriesPanel"));

var EntriesSidebar = _interopRequire(require("../presentational/EntriesSidebar"));

var store = _interopRequire(require("../stores/store"));

var actions = _interopRequire(require("../actions/actions"));

var get = require("../utils/APIManager").get;


var MODULE_NAME = "Profile";

// TODO Move this function to a utility file
function updateProfileEntries(profileId) {
    var functionName = "updateProfileEntries";
    console.log(MODULE_NAME, functionName + " called", profileId);

    if (profileId == null) {
        store.currentStore().dispatch(actions.getEntries(null));
        return;
    }

    var query = {
        constraints: {
            profile: profileId
        },
        options: {
            sort: {
                timestamp: -1
            }
        }
    };

    get("/api/entry", query, function (err, results) {
        console.log("get /api/entry callback called", err, results);

        if (err) {
            console.log(MODULE_NAME, functionName, "Error:", err);
            // TODO do not call profile page if current profile isn't loaded
            return;
        }

        store.currentStore().dispatch(actions.getEntries(results.result));
    });
}

function updateProfileDetails(profileId) {
    var functionName = "updateProfileDetails";
    console.log(MODULE_NAME, functionName + " called", profileId);

    if (profileId == null) {
        store.currentStore().dispatch(actions.updateCurrentProfile(null));
        return;
    }

    var query = {
        constraints: {},
        options: {}
    };

    get("/api/profile/" + profileId, query, function (err, results) {
        if (err) {
            console.log(MODULE_NAME, functionName, "Error:", err);
            // TODO do not call profile page if current profile isn't loaded
            return;
        }

        store.currentStore().dispatch(actions.updateCurrentProfile(results.result));
    });
}

var Profile = (function (Component) {
    function Profile(props, context, updater) {
        _classCallCheck(this, Profile);

        var functionName = "constructor";
        console.log(MODULE_NAME, functionName + " called");

        _get(Object.getPrototypeOf(Profile.prototype), "constructor", this).call(this, props, context, updater);

        console.log(MODULE_NAME, functionName, "props", this.props);
    }

    _inherits(Profile, Component);

    _prototypeProperties(Profile, null, {
        componentWillMount: {
            value: function componentWillMount() {
                var functionName = "componentWillMount";
                console.log(MODULE_NAME, functionName + " called");

                if (this.props.currentUser == null) {
                    console.log("this.props.currentUser is null. Redirecting.");
                    this.props.router.push("/");
                    return;
                }

                if (this.props.currentProfile == null) {
                    console.log("Current profile details are empty");
                    updateProfileDetails(this.props.params.id);
                }

                if (this.props.entries == null) {
                    console.log("Current profile entries are empty");
                    updateProfileEntries(this.props.params.id);
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

                updateProfileDetails(null);
                updateProfileEntries(null);
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
                    null,
                    React.createElement(NavBar, { currentUser: this.props.currentUser }),
                    React.createElement(PageHeader, { profileDetails: this.props.currentProfile }),
                    React.createElement(
                        "div",
                        { className: "page-container" },
                        React.createElement(
                            "div",
                            { className: "page-content" },
                            React.createElement(SideBar, null),
                            React.createElement(
                                "div",
                                { className: "content-wrapper" },
                                React.createElement(EntriesPanel, { id: this.props.params.id, entries: this.props.entries })
                            ),
                            React.createElement(EntriesSidebar, null)
                        )
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return Profile;
})(Component);

var mapStateToProps = function (newStateInStore) {
    console.log("mapStateToProps", JSON.stringify(newStateInStore));
    return {
        currentUser: newStateInStore.userReducer.currentUser,
        currentProfile: newStateInStore.profileReducer.currentProfile,
        entries: newStateInStore.entryReducer.entriesList
    };
};

module.exports = withRouter(connect(mapStateToProps)(Profile))
// export default Profile
;