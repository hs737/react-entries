import React, { Component } from 'react'
import { connect } from 'react-redux'

// import Search from '../presentational/Search'

import store from '../stores/store'
import CONSTANTS from '../constants/constants'
import actions from '../actions/actions'
import {get} from '../utils/APIManager'

class SearchResults extends Component {
    componentWillMount() {
        var functionName = "componentWillMount"
        console.log(functionName + " called", this.props.location.query)

        var query = {
            text: this.props.location.query.q
        }

        get("/api/search", query, function(err, results) {
            if (err) {
                console.log(functionName, "Error:", err)
                return
            }

            console.log(functionName, "Search results", results)
            store.currentStore().dispatch(actions.search(results))
        })

    }

    render() {
        var functionName = "render"
        console.log(functionName + " called", this.props.location.query)

        return (
            <div>
                searchResults
                {JSON.stringify(this.props.location.query)}
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

export default connect(mapStateToProps)(SearchResults)
// export default SearchResults
