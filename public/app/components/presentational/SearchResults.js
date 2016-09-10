import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

// import Search from '../presentational/Search'

import store from '../stores/store'
import CONSTANTS from '../constants/constants'
import actions from '../actions/actions'
import {get, post} from '../utils/APIManager'

class SearchResults extends Component {
    constructor(props, context, updater) {
        var functionName = "constructor"
        console.log(functionName + " called")

        super(props, context, updater)

        this.createProfileHandler = this.createProfileHandler.bind(this)

        this.state = {
            searchResults: []
        }
    }

    createProfileHandler() {
        var functionName = "createProfileHandler"
        console.log(functionName + " called")

        post("/api/profile", {name: this.props.queryText}, function(err, result) {
            if (err) {
                console.log(functionName, "Error:", err)
                // TODO do not call profile page if current profile isn't loaded
                return
            }

            var profile = result.result
            console.log(functionName, profile)

            store.currentStore().dispatch(actions.updateCurrentProfile(profile._id))
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
        var functionName = "render"
        console.log(functionName + " called", this.props.searchResults)

        var resultsContent = null;
        if (!this.props.searchResults || this.props.searchResults.length === 0) {
            console.log("Search results for no results found")
            resultsContent = (
                <span>
                    Your search for <strong>{this.props.queryText}</strong> was not found.
                    <Link onClick={this.createProfileHandler} to="/">Would you like to create a profile for <strong>{this.props.queryText}</strong></Link>
                </span>
            )
        } else {
            console.log("Search results for some results found")
            resultsContent = <ol>{this.props.searchResults.map(function(elem, idx) {
                return <li key={idx}><Link to={"/profile/" + elem.name}>{elem.name}</Link></li>
            })}</ol>
        }

        return (
            <div>
                searchResults<br />

                {resultsContent}
            </div>
        )
    }
}

// var mapStateToProps = function(storesState) {
//     console.log("mapStateToProps", JSON.stringify(storesState))
//     return {
//         searchResults: storesState.searchReducer.searchResults
//     }
// }

// export default connect(mapStateToProps)(SearchResults)
export default SearchResults
