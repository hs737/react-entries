"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var ReactDOM = _interopRequire(require("react-dom"));

var _reactRouter = require("react-router");

var Router = _reactRouter.Router;
var Route = _reactRouter.Route;
var browserHistory = _reactRouter.browserHistory;
var IndexRoute = _reactRouter.IndexRoute;
var Main = _interopRequire(require("./components/Main"));

var Home = _interopRequire(require("./components/layout/Home"));

var routes = React.createElement(
    Route,
    { path: "/", component: Main },
    React.createElement(IndexRoute, { component: Home })
);

module.exports = routes;