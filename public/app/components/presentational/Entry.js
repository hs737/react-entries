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

        var _this = this

        post("/api/entry", {"text": this.state.currentEntry}, function(err, document) {
            if (err) {
                console.log(functionName, "Error:", err)
                return
            }

            store.dispatch(actions.addEntry(document.result))

            var newState = Object.assign({}, _this.state)
            newState.currentEntry = ""

            _this.setState(newState)
        })
    }

    render() {
        var functionName = "render"
        console.log(functionName + " called")
        console.log('this.props', JSON.stringify(this.props.entries))
        var entryTags = this.props.entries.map(function(elem, index) {
            return (
                <div key = {index}>
                    {elem.text}
                </div>
            )
        })
        return (
            <div>
                <textarea placeholder="Enter text here" onChange={this.updateCurrentStateEntry} value = {this.state.currentEntry} />
                <button type="submit" onClick={this.addEntry}>Submit</button>
                {entryTags}
            </div>
        )
    }
}

var mapStateToProps = function(storesState) {
    console.log("mapStateToProps", JSON.stringify(storesState))
    return {
        entries: storesState.entryReducer.entriesList
    }
}

export default connect(mapStateToProps)(Entry)
// export default Entry
