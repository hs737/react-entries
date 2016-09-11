import React, {Component} from 'react'
import { Link } from 'react-router'

import store from '../stores/store'
import actions from '../actions/actions'
import {post} from '../utils/APIManager'

class EntryText extends Component {
    constructor(props, context, updater) {
        var functionName = "constructor"
        console.log(functionName + " called")

        super(props, context, updater)

        this.updateCurrentStateEntry = this.updateCurrentStateEntry.bind(this)
        this.addEntry = this.addEntry.bind(this)

        this.state = {
            currentEntry: '',
            entriesList: []
        }
    }

    updateCurrentStateEntry(event) {
        var functionName = "updateCurrentStateEntry"
        console.log(functionName + " called", event.target.name, event.target.value)

        var newState = Object.assign({}, this.state)
        newState.currentEntry = event.target.value

        this.setState(newState)
    }

    addEntry(event) {
        var functionName = "addEntry"
        console.log(functionName + " called", event.target.name, event.target.value)

        var _this = this

        post("/api/entry", {"text": this.state.currentEntry}, function(err, document) {
            if (err) {
                console.log(functionName, "Error:", err)
                return
            }

            store.currentStore().dispatch(actions.addEntry(document.result))

            var newState = Object.assign({}, _this.state)
            newState.currentEntry = ""

            _this.setState(newState)
        })
    }

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
                <h1>Entry Text</h1>
                <textarea placeholder="Enter text here" onChange={this.updateCurrentStateEntry} value = {this.state.currentEntry} />
                <button type="submit" onClick={this.addEntry}>Submit</button>
            </div>
        )
    }
}

export default EntryText
