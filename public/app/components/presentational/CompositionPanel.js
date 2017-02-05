import React, { Component } from 'react'

import PanelHeading from './PanelHeading'

const MODULE_NAME = "CompositionPanel"

class CompositionPanel extends Component {
    constructor(props, context, updater) {
        const functionName = "constructor"
        console.log(MODULE_NAME, functionName + " called")

        super(props, context, updater)

        console.log(MODULE_NAME, functionName, "props", this.props)

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleTextareaChange = this.handleTextareaChange.bind(this)

        this.state = {
            compositionDetails: {
                text: ""
            }
        }
    }

    componentWillMount() {
        const functionName = "componentWillMount"
        console.log(MODULE_NAME, functionName + " called")
    }

    componentDidMount() {
        const functionName = "componentDidMount"
        console.log(MODULE_NAME, functionName + " called")
    }

    componentWillUnmount() {
        const functionName = "componentWillUnmount"
        console.log(MODULE_NAME, functionName + " called")
    }

    componentWillReceiveProps(nextProps) {
        const functionName = "componentWillReceiveProps"
        console.log(MODULE_NAME, functionName + " called", nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        const functionName = "shouldComponentUpdate"
        console.log(MODULE_NAME, functionName + " called", nextProps, nextState)

        return true
    }

    componentWillUpdate(nextProps, nextState) {
        const functionName = "componentWillUpdate"
        console.log(MODULE_NAME, functionName + " called", nextProps, nextState)
    }

    componentDidUpdate(prevProps, prevState) {
        const functionName = "componentDidUpdate"
        console.log(MODULE_NAME, functionName + " called", prevProps, prevState)
    }

    handleSubmit(event) {
        var functionName = "handleSubmit"
        console.log(MODULE_NAME, functionName + " called", event.target.name, this.state.compositionDetails)
    }

    handleTextareaChange(event) {
        var functionName = "handleTextareaChange"
        console.log(MODULE_NAME, functionName + " called", event.target.name, event.target.value)

        var newState = Object.assign({}, this.state)
        newState.compositionDetails.text = event.target.value

        this.setState(newState)
    }

    render() {
        const functionName = "render"
        console.log(MODULE_NAME, functionName + " called", this.props)

        return (
            <div className="panel panel-flat">
            {/* <!-- Traffic sources --> */}

                <PanelHeading />

				<div className="container-fluid">
                    <div className="col-md-12">
                        <div className="col-md-12">
                            <textarea rows="5" className="form-control" placeholder="Enter your message here" onChange={this.handleTextareaChange} ></textarea>
                        </div>
                        <div className="col-md-12">
                            <button type="submit" className="btn btn-primary pull-right" onClick={this.handleSubmit}>Submit form</button>
                        </div>
                    </div>
                </div>
            {/* <!-- /traffic sources --> */}
            </div>
        )
    }
}

export default CompositionPanel 