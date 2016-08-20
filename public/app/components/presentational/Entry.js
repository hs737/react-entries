import React, {Component} from 'react'
import { connect } from 'react-redux'

import store from '../stores/store'
import CONSTANTS from '../constants/constants'
import actions from '../actions/actions'
import {post} from '../utils/APIManager'

class Entry extends Component {
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

        post("/api/entry", this.state.currentEntry, function(err, document) {
            if (err) {
                console.log(functionName, "Error:", err)
                return
            }

            store.dispatch(actions.addEntry(document))
        })
    }

    render() {
        var functionName = "render"
        console.log(functionName + " called")
        console.log('this.props', JSON.stringify(this.props.entries))
        return (
            <div>
                <textarea placeholder="Enter text here" onChange={this.updateCurrentStateEntry} value = {this.state.currentEntry} />
                <button type="submit" onClick={this.addEntry}>Submit</button>
            </div>
        )
    }
}

var mapStateToProps = function(state) {
    console.log("mapStateToProps", JSON.stringify(state))
    return {
        entries: state.entryReducer.entriesList
    }
}

export default connect(mapStateToProps)(Entry)
// export default Entry
