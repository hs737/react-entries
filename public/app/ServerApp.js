import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './components/stores/store'
import Main from './components/Main'

class ServerApp extends Component {
    render() {
        return (
            <Provider store={this.props.route.initial}>
                <Main {...this.props} />
            </Provider>
        )
    }
}

export default ServerApp
