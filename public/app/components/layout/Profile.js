import React, {Component} from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import EntryText from '../presentational/EntryText'
import Entries from '../presentational/Entries'

var MODULE_NAME = "Profile"

class Profile extends Component {
    constructor(props, context, updater) {
        var functionName = "constructor"
        console.log(MODULE_NAME, functionName + " called")

        super(props, context, updater)

        console.log(MODULE_NAME, functionName, "props", this.props.params)
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
        return (
            <div>
                Profile
                <EntryText id={this.props.params.id} />
                <Entries entries={this.props.entries} />
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

export default connect(mapStateToProps)(Profile)
// export default Profile