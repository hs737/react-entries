import React, { Component } from 'react'
import  ReactDOM from 'react-dom'

class App extends Component {
    render() {
        return (
            <div>React has arrived</div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
