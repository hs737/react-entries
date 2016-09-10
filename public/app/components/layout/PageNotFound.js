import React, {Component} from 'react'
import { Link } from 'react-router'

class PageNotFound extends Component {
    componentWillMount() {
        var functionName = "componentWillMount"
        console.log(functionName + " called")
    }

    componentDidMount() {
        var functionName = "componentDidMount"
        console.log(functionName + " called")
    }

    componentWillUnmount() {
        var functionName = "componentWillUnmount"
        console.log(functionName + " called")
    }

    componentWillReceiveProps(nextProps) {
        var functionName = "componentWillReceiveProps"
        console.log(functionName + " called", nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        var functionName = "shouldComponentUpdate"
        console.log(functionName + " called", nextProps, nextState)

        return true
    }

    componentWillUpdate(nextProps, nextState) {
        var functionName = "componentWillUpdate"
        console.log(functionName + " called", nextProps, nextState)
    }

    componentDidUpdate(prevProps, prevState) {
        var functionName = "componentDidUpdate"
        console.log(functionName + " called", prevProps, prevState)
    }

    render() {
        return (
            <div>
                <h1>Page Not Found.</h1>
                <p>Go to <Link to="/">Home Page</Link></p>
            </div>
        )
    }
}

export default PageNotFound
