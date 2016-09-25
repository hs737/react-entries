import React, {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import store from '../stores/store'
import actions from '../actions/actions'
import {get} from '../utils/APIManager'

var MODULE_NAME = "SearchBar"

const INPUT_CLASS = {
    ON_FOCUS: "form-control bg-primary",
    ON_BLUR: "form-control"
}

class Search extends Component {
    constructor(props, context, updater) {
        var functionName = "constructor"
        console.log(MODULE_NAME, functionName + " called")

        super(props, context, updater)

        this.handleSearchTextChange = this.handleSearchTextChange.bind(this)
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
        // this.handleOnBlur = this.handleOnBlur.bind(this)
        // this.handleOnFocus = this.handleOnFocus.bind(this)

        this.context = context
        this.state = {
            searchQuery: '',
            classForInput: INPUT_CLASS.ON_BLUR
        }
    }

    // handleOnBlur(event) {
    //     var functionName = "handleOnBlur"
    //     console.log(MODULE_NAME, functionName + " called", event.target.name, event.target.value)

    //     var newState = Object.assign({}, this.state)
    //     newState.classForInput = INPUT_CLASS.ON_BLUR

    //     this.setState(newState)
    // }

    // handleOnFocus(event) {
    //     var functionName = "handleOnFocus"
    //     console.log(MODULE_NAME, functionName + " called", event.target.name, event.target.value)

    //     var newState = Object.assign({}, this.state)
    //     newState.classForInput = INPUT_CLASS.ON_FOCUS

    //     this.setState(newState)
    // }

    handleSearchTextChange(event) {
        var functionName = "handleSearchTextChange"
        console.log(MODULE_NAME, functionName + " called", event.target.name, event.target.value)

        var newState = Object.assign({}, this.state)
        newState.searchQuery = event.target.value

        this.setState(newState)
    }

    handleSearchSubmit(event) {
        var functionName = "handleSearchSubmit"
        console.log(MODULE_NAME, functionName + " called", event.target.name, this.state.searchQuery)

        event.preventDefault();

        // TODO Handle submitting empty text

        store.currentStore().dispatch(actions.search(null))

        console.log(MODULE_NAME, functionName + " this.props.router", this.props.router)
        this.props.router.push('/search?q=' + this.state.searchQuery)
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
        console.log(MODULE_NAME, functionName + " called", this.props)

        return (
            <div className="input-group has-feedback has-feedback-left">
                {/*<input name="searchInput" placeholder="Enter user name" type="search" onChange={this.handleSearchTextChange}></input>
                <button type="submit" onClick={this.handleSearchSubmit}>Submit</button>*/}
                <input type="searchInput" className={this.state.classForInput} onChange={this.handleSearchTextChange} />
                {/*<input type="searchInput" className={this.state.classForInput} onChange={this.handleSearchTextChange} *onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} />*/}
                <div className="form-control-feedback">
                    <i className="icon-search4 text-muted text-size-base"></i>
                </div>
                <div className="input-group-btn">
                    <button type="submit" className="btn btn-link" onClick={this.handleSearchSubmit}>Search</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Search)
