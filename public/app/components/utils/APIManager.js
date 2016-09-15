import superagent from 'superagent'

export function get(endpoint, params, callback) {
    console.log("get called", endpoint, params)

    superagent.get(endpoint)
              .query(params)
              .set('Accept', 'application/json')
              .end(httpCallback(callback))
}

export function post(endpoint, params, callback) {
    console.log("post called", endpoint, params)

    superagent.post(endpoint)
              .send(params)
              .set('Accept', 'application/json')
              .end(httpCallback(callback))
}

export function put(endpoint, params, callback) {
    console.log("put called", endpoint, params)

    superagent.put(endpoint)
              .send(params)
              .set('Accept', 'application/json')
              .end(httpCallback(callback))
}

export function del(endpoint, params, callback) {
    console.log("del called", endpoint, params)

    superagent.del(endpoint)
              .send(params)
              .set('Accept', 'application/json')
              .end(httpCallback(callback))
}

var httpCallback = function (callback) {
  return function (err, response) {
    if (err) {
        console.log("Error", JSON.stringify(err))
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
