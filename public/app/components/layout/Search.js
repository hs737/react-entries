import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import SearchResults from '../presentational/SearchResults'

import store from '../stores/store'
import CONSTANTS from '../constants/constants'
import actions from '../actions/actions'
import {get, post} from '../utils/APIManager'

var moduleName = "Search"

class Search extends Component {
    constructor(props, context, updater) {
        var functionName = "constructor"
        console.log(functionName + " called")

        super(props, context, updater)

        this.state = {
            searchResults: null
        }
    }

    componentWillMount() {
        var functionName = "componentWillMount"
        console.log(functionName + " called", this.props.location.query)

        var query = {
            text: this.props.location.query.q
        }

        var _this = this

        get("/api/search", query, function(err, results) {
            if (err) {
                console.log(functionName, "Error:", err)
                return
            }

            var searchResults = results.result;
            console.log(functionName, "Search results", searchResults)
            store.currentStore().dispatch(actions.search(searchResults))
        })
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
        var functionName = "render"
        console.log(functionName + " called", this.props.location.query.q, this.props.searchResults)

        var resultsContent = null;
        if (this.props.searchResults != null) {
            resultsContent = <SearchResults searchResults = {this.props.searchResults} queryText = {this.props.location.query.q} />
        }

        return (
            <div>
                search<br />

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
