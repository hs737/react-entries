import React, {Component} from 'react'
import { connect } from 'react-redux'
import { browserHistory, withRouter } from 'react-router'

import store from '../stores/store'
import CONSTANTS from '../constants/constants'
import actions from '../actions/actions'
import {get} from '../utils/APIManager'

class Search extends Component {
    constructor(props, context, updater) {
        var functionName = "constructor"
        console.log(functionName + " called")

        super(props, context, updater)

        this.handleSearchTextChange = this.handleSearchTextChange.bind(this)
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this)

        this.context = context
        this.state = {
            searchQuery: ''
        }
    }

    handleSearchTextChange(event) {
        var functionName = "handleSearchTextChange"
        console.log(functionName + " called", event.target.name, event.target.value)

        var newState = Object.assign({}, this.state)
        newState.searchQuery = event.target.value

        this.setState(newState)
    }

    handleSearchSubmit(event) {
        var functionName = "handleSearchSubmit"
        console.log(functionName + " called", event.target.name, this.state.searchQuery)

        // browserHistory.push('/search?query=' + this.state.searchQuery)
        console.log(functionName, this.props.router)
        this.props.router.push('/search?query=' + this.state.searchQuery)
        //.transitionTo('/search?query=' + this.state.searchQuery)
        // get("/api/profile", {name: this.state.searchQuery}, function(err, docs) {
        //     if (err) {
        //         console.log(functionName, "Error:", err)
        //         return
        //     }

        //     if (docs == null || docs.length !== 1) {
        //         browserHistory.push('/search')
        //     } else {
        //         store.currentStore().dispatch(actions.updateCurrentProfile(document.result[0]))
        //     }
        // })
    }

    render() {
        return (
            <div>
                <input placeholder="Enter user name" type="search" onChange={this.handleSearchTextChange}></input>
                <button type="submit" onClick={this.handleSearchSubmit}>Submit</button>
            </div>
        )
    }
}

export default withRouter(Search)
