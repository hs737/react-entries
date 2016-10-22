"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

exports.get = get;
exports.post = post;
exports.put = put;
exports.del = del;
var superagent = _interopRequire(require("superagent"));

var logger = _interopRequire(require("../utils/logger"));

function get(endpoint, params, callback) {
    logger.debug("get called", endpoint, params);

    superagent.get(endpoint).query(params).set("Accept", "application/json").end(httpCallback(callback));
}

function post(endpoint, params, callback) {
    logger.debug("post called", endpoint, params);

    superagent.post(endpoint).send(params).set("Accept", "application/json").end(httpCallback(callback));
}

function put(endpoint, params, callback) {
    logger.debug("put called", endpoint, params);

    superagent.put(endpoint).send(params).set("Accept", "application/json").end(httpCallback(callback));
}

function del(endpoint, params, callback) {
    logger.debug("del called", endpoint, params);

    superagent.del(endpoint).send(params).set("Accept", "application/json").end(httpCallback(callback));
}

var httpCallback = function (callback) {
    return function (err, response) {
        if (err) {
            logger.error("Error", err);
        }

        if (callback) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, response.body);
            }
        }
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});