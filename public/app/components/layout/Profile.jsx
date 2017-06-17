import React, {Component} from 'react'
import { Link, withRouter } from 'react-router'
import { connect } from 'react-redux'

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

    if (profileId == null) {
        store.currentStore().dispatch(actions.getEntries(null));
        return;
    }

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
        console.log("get /api/entry callback called", err, results)

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

    if (profileId == null) {
        store.currentStore().dispatch(actions.updateCurrentProfile(null));
        return;
    }

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

        if (this.props.currentUser == null) {
            console.log("this.props.currentUser is null. Redirecting.")
            this.props.router.push('/')
            return
        }

        if (this.props.currentProfile == null) {
            console.log("Current profile details are empty")
            updateProfileDetails(this.props.params.id)
        }

        if (this.props.entries == null) {
            console.log("Current profile entries are empty")
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

        updateProfileDetails(null)
        updateProfileEntries(null)
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
                <NavBar currentUser={this.props.currentUser} />
                <PageHeader profileDetails={this.props.currentProfile} />
                <div className="page-container">
                    <div className="page-content">
                        <SideBar />
                        <div className="content-wrapper">
                            <EntriesPanel id={this.props.params.id} entries={this.props.entries} />
                        </div>
                        <EntriesSidebar />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function(newStateInStore) {
    const functionName = "mapStateToProps";
    console.log(MODULE_NAME, functionName + " called", JSON.stringify(newStateInStore));
    
    return {
        currentUser: newStateInStore.userReducer.currentUser,
        currentProfile: newStateInStore.profileReducer.currentProfile,
        entries: newStateInStore.entryReducer.entriesList
    }
}

export default withRouter(connect(mapStateToProps)(Profile))
// export default Profile
