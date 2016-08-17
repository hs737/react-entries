"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

exports.get = get;
exports.post = post;
var superagent = _interopRequire(require("superagent"));

function get(endpoint, params, callback) {
    superagent.get(endpoint).query(params).set("Accept", "application/json").end(function (err, response) {
        if (err) {
            console.log("Error", JSON.stringify(err));
        }

        if (callback) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, response.body);
            }
        }
    });
}

function post(endpoint, params, callback) {
    superagent.post(endpoint).send(params).set("Accept", "application/json").end(function (err, response) {
        if (err) {
            console.log("Error", JSON.stringify(err));
        }

        if (callback) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, response.body);
            }
        }
    });
}
Object.defineProperty(exports, "__esModule", {
    value: true
});