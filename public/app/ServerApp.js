import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Main from './components/Main'

class ServerApp extends Component {
    render() {
        return (
            <Main {...this.props} />
        )
    }
}

export default ServerApp
