import React, {Component} from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import EntryText from '../presentational/EntryText'
import Entries from '../presentational/Entries'
import NavBar from '../presentational/NavBar'
import PageHeader from '../presentational/PageHeader'
import SideBar from '../presentational/SideBar'
import EntriesPanel from '../presentational/EntriesPanel'
import EntriesSidebar from '../presentational/EntriesSidebar'

import store from '../stores/store'
import actions from '../actions/actions'
import { get } from '../utils/APIManager'

var MODULE_NAME = "Profile"

// TODO Move this function to a utility file
function updateProfileEntries(profileId) {
    var functionName = "updateProfileEntries"
    console.log(MODULE_NAME, functionName + " called", profileId)

    var query = {
        constraints: {
            profile: profileId
        },
        options: {
            sort: {
                timestamp: -1
            }
        }
    }

    get("/api/entry", query, function(err, results) {
        if (err) {
            console.log(MODULE_NAME, functionName, "Error:", err)
            // TODO do not call profile page if current profile isn't loaded
            return
        }

        store.currentStore().dispatch(actions.getEntries(results.result));
    })
}

function updateProfileDetails(profileId) {
    var functionName = "updateProfileDetails"
    console.log(MODULE_NAME, functionName + " called", profileId)

    var query = {
        constraints: {},
        options: {}
    }

    get("/api/profile/" + profileId, query, function(err, results) {
        if (err) {
            console.log(MODULE_NAME, functionName, "Error:", err)
            // TODO do not call profile page if current profile isn't loaded
            return
        }

        store.currentStore().dispatch(actions.updateCurrentProfile(results.result))
    })
}

class Profile extends Component {
    constructor(props, context, updater) {
        var functionName = "constructor"
        console.log(MODULE_NAME, functionName + " called")

        super(props, context, updater)

        console.log(MODULE_NAME, functionName, "props", this.props)
    }

    componentWillMount() {
        var functionName = "componentWillMount"
        console.log(MODULE_NAME, functionName + " called")

        if (this.props.currentProfile == null) {
            updateProfileDetails(this.props.params.id)
        }

        if (this.props.entries == null) {
            updateProfileEntries(this.props.params.id)
        }
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
                <NavBar />
                <PageHeader profileDetails={this.props.currentProfile} />
                <div className="page-container">
                    <div className="page-content">
                        <SideBar />
                        <div className="content-wrapper">
                            <EntriesPanel />
                        </div>
                        <EntriesSidebar />
                    </div>
                </div>
                <EntryText id={this.props.params.id} />
                <Entries entries={this.props.entries} />
            </div>
        )
    }
}

var mapStateToProps = function(storesState) {
    console.log("mapStateToProps", JSON.stringify(storesState))
    return {
        currentProfile: storesState.profileReducer.currentProfile,
        entries: storesState.entryReducer.entriesList
    }
}

export default connect(mapStateToProps)(Profile)
// export default Profile
