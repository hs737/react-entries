import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'

import routes from './routes'

const router = <Router routes={routes} history={browserHistory} />

ReactDOM.render(router, document.getElementById('app'))
