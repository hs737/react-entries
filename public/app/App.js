import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import store from './components/stores/store'
import routes from './routes'

// const initialState = window.__PRELOADED_STATE__

const router = (
    <Provider store={store}>
        <Router routes={routes} history={browserHistory} />
    </Provider>
)

// const router = (
//     <Router routes={routes} history={browserHistory} />
// )

ReactDOM.render(router, document.getElementById('app'))
