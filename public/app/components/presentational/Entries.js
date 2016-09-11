import React, {Component} from 'react'

import store from '../stores/store'
import actions from '../actions/actions'
import {post} from '../utils/APIManager'

class Entries extends Component {
    // constructor(props, context, updater) {
    //     var functionName = "constructor"
    //     console.log(functionName + " called")

    //     super(props, context, updater)

    //     this.updateCurrentStateEntry = this.updateCurrentStateEntry.bind(this)
    //     this.addEntry = this.addEntry.bind(this)

    //     this.state = {
    //         currentEntry: '',
    //         entriesList: []
    //     }
    // }

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
        console.log(functionName + " called", this.props.entries)

        if (this.props.entries == null) {
            var entryTags = null
        } else {
            entryTags = this.props.entries.map(function(elem, index) {
                return (
                    <div key = {index}>
                        {elem.text}
                    </div>
                )
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
