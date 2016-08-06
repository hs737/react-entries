import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Main from './components/Main'
import Home from './components/layout/Home'

const routes = (
    <Route path = "/" component = {Main}>
        <IndexRoute component = {Home}></IndexRoute>
    </Route>
)

export default routes
