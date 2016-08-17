"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var react = _interopRequire(_react);

var Component = _react.Component;
var connect = require("react-redux").connect;
var store = _interopRequire(require("../stores/store"));

var CONSTANTS = _interopRequire(require("../constants/constants"));

var actions = _interopRequire(require("../actions/actions"));

var api = _interopRequire(require("../utils/APIManager"));

var Entry = (function (Component) {
    function Entry() {
        _classCallCheck(this, Entry);

        if (Component != null) {
            Component.apply(this, arguments);
        }
    }

    _inherits(Entry, Component);

    _prototypeProperties(Entry, null, {
        render: {
            value: function render() {
                return React.createElement(
                    "div",
                    null,
                    "entry"
                );
            },
            writable: true,
            configurable: true
        }
    });

    return Entry;
})(Component);

var mapStateToProps = function (state) {
    return {
        entries: state.entryReducer.entriesList
    };
};

module.exports = Entry;