import superagent from 'superagent'

export function get(endpoint, params, callback) {
    superagent.get(endpoint)
              .query(params)
              .set('Accept', 'application/json')
              .end(function(err, response) {
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
              })
}

export function post(endpoint, params, callback) {
    superagent.post(endpoint)
              .send(params)
              .set('Accept', 'application/json')
              .end(function(err, response) {
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
              })
}
