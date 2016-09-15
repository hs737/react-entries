import React, {Component} from 'react'

import Entry from './Entry'

import store from '../stores/store'
import actions from '../actions/actions'
import {post} from '../utils/APIManager'

var MODULE_NAME = "Entries"

class Entries extends Component {
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
        var functionName = "render"
        console.log(MODULE_NAME, functionName + " called", this.props.entries)

        if (this.props.entries == null) {
            var entryTags = null
        } else {
            entryTags = this.props.entries.map(function(elem, index) {
                return <Entry key = {index} details={elem} />
                // return (
                //     <div key = {index}>
                //         <Entry text={elem.text} />
                //     </div>
                // )
            })
        }

        return (
            <div>
                {entryTags}
            </div>
        )
    }
}

// export default connect(mapStateToProps)(Entries)
export default Entries
