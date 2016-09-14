import React, {Component} from 'react'
import { Link } from 'react-router'

import { put } from '../utils/APIManager'

var MODULE_NAME = "Entry"

class Entry extends Component {
    constructor(props, context, updater) {
        var functionName = "constructor"
        console.log(MODULE_NAME, functionName + " called")

        super(props, context, updater)

        this.submitEntryUpdate = this.submitEntryUpdate.bind(this)
        this.updateEntryText = this.updateEntryText.bind(this)

        this.state = {
            entryText: this.props.details.text
        }
    }

    updateEntryText(event) {
        var functionName = "updateEntryText"
        console.log(MODULE_NAME, functionName + " called", event.target.name, event.target.value)

        var newState = Object.assign({}, this.state)
        newState.entryText = event.target.value

        this.setState(newState)
    }

    submitEntryUpdate(event) {
        var functionName = "submitEntryUpdate"
        console.log(MODULE_NAME, functionName + " called", event.target.name, event.target.value)

        var newEntry = {
            text: this.state.entryText
        }

        put("/api/entry/" + this.props.details._id, newEntry, function(err, result) {
            if (err) {
                console.log(MODULE_NAME, functionName, "Error:", err)
                // TODO post that error happened
                return
            }
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
        var functionName = "render"
        console.log(MODULE_NAME, functionName + " called", this.props)

        return (
            <div>
                <textarea value={this.state.entryText} onChange={this.updateEntryText} />
                <button type="submit" onClick={this.submitEntryUpdate}>Update</button>
                <button type="submit">Delete</button>
            </div>
        )
    }
}

export default Entry
