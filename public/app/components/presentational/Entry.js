import React, {Component} from 'react'
import { connect } from 'react-redux'

import store from '../stores/store'
import CONSTANTS from '../constants/constants'
import actions from '../actions/actions'
import api from '../utils/APIManager'

class Entry extends Component {
    constructor(props, context, updater) {
        var functionName = "constructor"
        console.log(functionName + " called")

        super(props, context, updater)

        this.updateCurrentEntry = this.updateCurrentEntry.bind(this)

        this.state = {
            currentEntry: '',
            entriesList: []
        }
    }

    updateCurrentEntry(event) {
        var functionName = "updateCurrentEntry"
        console.log(functionName + " called", event.target.name, event.target.value)

        var newState = Object.assign({}, this.state)
        newState.currentEntry = event.target.value

        this.setState(newState)
    }

    render() {
        var functionName = "render"
        console.log(functionName + " called")
        return (
            <div>
                <textarea placeholder="Enter text here" onChange={this.updateCurrentEntry} value = {this.state.currentEntry} />
            </div>
        )
    }
}

var mapStateToProps = function(state) {
    return {
        entries: state.entryReducer.entriesList
    }
}

export default Entry
