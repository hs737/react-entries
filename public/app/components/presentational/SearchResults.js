import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

// import Search from '../presentational/Search'

import store from '../stores/store'
import actions from '../actions/actions'
import {get, post} from '../utils/APIManager'

var MODULE_NAME = "SearchResults"

class SearchResults extends Component {
    constructor(props, context, updater) {
        var functionName = "constructor"
        console.log(MODULE_NAME, functionName + " called")

        super(props, context, updater)

        this.createProfileHandler = this.createProfileHandler.bind(this)

        this.state = {
            searchResults: []
        }
    }

    createProfileHandler() {
        var functionName = "createProfileHandler"
        console.log(MODULE_NAME, functionName + " called")

        post("/api/profile", {name: this.props.queryText}, function(err, result) {
            if (err) {
                console.log(MODULE_NAME, functionName, "Error:", err)
                // TODO do not call profile page if current profile isn't loaded
                return
            }

            // var profile = result.result
            // console.log(MODULE_NAME, functionName, profile)

            // updateProfileDetails(profile._id)
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
        console.log(MODULE_NAME, functionName + " called", this.props.searchResults)

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
            var _this = this
            resultsContent = <ol>{this.props.searchResults.map(function(elem, idx) {
                // return <li key={idx}><Link onClick={() => _this.getProfileData(elem)} to={"/profile/" + elem._id}>{elem.name}</Link></li>
                return (
                    <li key={idx} className="media">
                        <div className="media-left media-middle">
                            <Link to={"/profile/" + elem._id}>
                                <img src="assets/images/demo/users/face1.jpg" className="img-circle" alt="" />
                            </Link>
                        </div>

                        <div className="media-body">
                            <div className="media-heading text-semibold"><Link to={"/profile/" + elem._id}>{elem.name}</Link></div>
                            {/*<span className="text-muted">Development</span>*/}
                        </div>

                        <div className="media-right media-middle">
                            <ul className="icons-list text-nowrap">
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="icon-menu9"></i></a>

                                    <ul className="dropdown-menu dropdown-menu-right">
                                        <li><a href="#"><i className="icon-comment-discussion pull-right"></i> Start chat</a></li>
                                        <li><a href="#"><i className="icon-phone2 pull-right"></i> Make a call</a></li>
                                        <li><a href="#"><i className="icon-mail5 pull-right"></i> Send mail</a></li>
                                        <li className="divider"></li>
                                        <li><a href="#"><i className="icon-statistics pull-right"></i> Statistics</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </li>
                )
            })}</ol>
        }

        return (
            <div className="content-group">
                <p className="text-muted text-size-small content-group">About {this.props.searchResults.length} results (0.34 seconds)</p>
                <div className="search-results-list">
                    <div className="text-size-small text-uppercase text-semibold text-muted mb-10">List view</div>
                    <div className="panel panel-body">
                        <ul className="media-list">
                            {/*<li className="media-header text-muted">Team leaders</li>*/}
                            {resultsContent}
                        </ul>
                    </div>
                </div>
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
