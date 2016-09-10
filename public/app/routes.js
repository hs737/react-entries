import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Main from './components/Main'
import Home from './components/layout/Home'
import Search from './components/layout/Search'
import Profile from './components/layout/Profile'
import PageNotFound from './components/layout/PageNotFound'

const routes = (
    <Route path = "/" component = {Main}>
        <IndexRoute component = {Home} />
        <Route path ="search" component={Search} />
        <Route path ="profile/*" component={Profile} />
        <Route path="*" component={PageNotFound} />
    </Route>
)

export default routes
