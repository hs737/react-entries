import React, {Component} from 'react'
import { Link } from 'react-router'

import store from '../stores/store'
import actions from '../actions/actions'
import {post} from '../utils/APIManager'

var MODULE_NAME = "EntryText"

class EntryText extends Component {
    constructor(props, context, updater) {
        var functionName = "constructor"
        console.log(MODULE_NAME, functionName + " called")

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
        console.log(MODULE_NAME, functionName + " called", event.target.name, event.target.value)

        var newState = Object.assign({}, this.state)
        newState.currentEntry = event.target.value

        this.setState(newState)
    }

    addEntry(event) {
        var functionName = "addEntry"
        console.log(MODULE_NAME, functionName + " called", event.target.name, event.target.value)

        var _this = this
        var newDocument = {
            profile: this.props.id,
            text: this.state.currentEntry
        }

        post("/api/entry", newDocument, function(err, document) {
            if (err) {
                console.log(MODULE_NAME, functionName, "Error:", err)
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
        console.log(MODULE_NAME, functionName + " called")
    }

    componentDidMount() {
        var functionName = "componentDidMount"
        console.log(MODULE_NAME, functionName + " called")
    }

    componentWillUnmount() {
        var functionName = "componentWillUnmount"
        console.log(MODULE_NAME, functionName + " called")
    }

    componentWillReceiveProps(nextProps) {
        var functionName = "componentWillReceiveProps"
        console.log(MODULE_NAME, functionName + " called", nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        var functionName = "shouldComponentUpdate"
        console.log(MODULE_NAME, functionName + " called", nextProps, nextState)

        return true
    }

    componentWillUpdate(nextProps, nextState) {
        var functionName = "componentWillUpdate"
        console.log(MODULE_NAME, functionName + " called", nextProps, nextState)
    }

    componentDidUpdate(prevProps, prevState) {
        var functionName = "componentDidUpdate"
        console.log(MODULE_NAME, functionName + " called", prevProps, prevState)
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
