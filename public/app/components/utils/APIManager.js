import superagent from 'superagent'

import logger from '../utils/logger'

export function get(endpoint, params, callback) {
    logger.debug("get called", endpoint, params)

    superagent.get(endpoint)
              .query(params)
              .set('Accept', 'application/json')
              .end(httpCallback(callback))
}

export function post(endpoint, params, callback) {
    logger.debug("post called", endpoint, params)

    superagent.post(endpoint)
              .send(params)
              .set('Accept', 'application/json')
              .end(httpCallback(callback))
}

export function put(endpoint, params, callback) {
    logger.debug("put called", endpoint, params)

    superagent.put(endpoint)
              .send(params)
              .set('Accept', 'application/json')
              .end(httpCallback(callback))
}

export function del(endpoint, params, callback) {
    logger.debug("del called", endpoint, params)

    superagent.del(endpoint)
              .send(params)
              .set('Accept', 'application/json')
              .end(httpCallback(callback))
}

var httpCallback = function (callback) {
  return function (err, response) {
    if (err) {
        logger.error("Error", err)
    }

    if (callback) {
        if (err) {
            callback(err, null)
        } else {
            callback(null, response.body)
        }
    }
  }
}
