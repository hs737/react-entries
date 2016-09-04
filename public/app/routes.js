import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Main from './components/Main'
import Home from './components/layout/Home'
import SearchResults from './components/layout/SearchResults'
import PageNotFound from './components/layout/PageNotFound'

const routes = (
    <Route path = "/" component = {Main}>
        <IndexRoute component = {Home}></IndexRoute>
        <Route path = "search" component = {SearchResults}></Route>
        <Route path="*" component={PageNotFound} />
    </Route>
)

export default routes
