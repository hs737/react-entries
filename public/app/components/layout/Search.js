import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import SearchResults from '../presentational/SearchResults'
import NavBar from '../presentational/NavBar'

import store from '../stores/store'
import CONSTANTS from '../constants/constants'
import actions from '../actions/actions'
import {get, post} from '../utils/APIManager'

var MODULE_NAME = "Search"

class Search extends Component {
    constructor(props, context, updater) {
        var functionName = "constructor"
        console.log(MODULE_NAME, functionName + " called")

        super(props, context, updater)

        this.state = {
            searchResults: null
        }
    }

    componentWillMount() {
        var functionName = "componentWillMount"
        console.log(MODULE_NAME, functionName + " called", this.props.location.query)

        var query = {
            constraints: {
                text: this.props.location.query.q
            },
            options: {}
        }

        var _this = this

        get("/api/search", query, function(err, results) {
            if (err) {
                console.log(MODULE_NAME, functionName, "Error:", err)
                return
            }

            var searchResults = results.result;
            console.log(MODULE_NAME, functionName, "Search results", searchResults)

            store.currentStore().dispatch(actions.search(searchResults))
        })
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
        console.log(MODULE_NAME, functionName + " called", this.props.location.query.q, this.props.searchResults)

        var resultsContent = null;
        if (this.props.searchResults != null) {
            resultsContent = <SearchResults searchResults = {this.props.searchResults} queryText = {this.props.location.query.q} />
        }

        return (
            <div>
                <NavBar />
                {resultsContent}
            </div>
        )
    }
}

var mapStateToProps = function(storesState) {
    console.log("mapStateToProps", JSON.stringify(storesState))
    return {
        searchResults: storesState.searchReducer.searchResults
    }
}

export default connect(mapStateToProps)(Search)
