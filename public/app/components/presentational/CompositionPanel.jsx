import React, { Component } from 'react';

import PanelHeading from './PanelHeading';
import { post } from '../utils/APIManager';

const MODULE_NAME = "CompositionPanel";

class CompositionPanel extends Component {
    constructor(props, context, updater) {
        const functionName = "constructor";
        console.log(MODULE_NAME, functionName + " called");

        super(props, context, updater);

        console.log(MODULE_NAME, functionName, "props", this.props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextareaChange = this.handleTextareaChange.bind(this);

        this.state = {
            compositionDetails: {
                text: ""
            }
        };
    }

    componentWillMount() {
        const functionName = "componentWillMount";
        console.log(MODULE_NAME, functionName + " called");
    }

    componentDidMount() {
        const functionName = "componentDidMount";
        console.log(MODULE_NAME, functionName + " called");
    }

    componentWillUnmount() {
        const functionName = "componentWillUnmount";
        console.log(MODULE_NAME, functionName + " called");
    }

    componentWillReceiveProps(nextProps) {
        const functionName = "componentWillReceiveProps";
        console.log(MODULE_NAME, functionName + " called", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        const functionName = "shouldComponentUpdate";
        console.log(MODULE_NAME, functionName + " called", nextProps, nextState);

        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        const functionName = "componentWillUpdate";
        console.log(MODULE_NAME, functionName + " called", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        const functionName = "componentDidUpdate";
        console.log(MODULE_NAME, functionName + " called", prevProps, prevState);
    }

    handleSubmit(event) {
        var functionName = "handleSubmit";
        console.log(MODULE_NAME, functionName + " called", event.target.name, this.state.compositionDetails);

        event.preventDefault();

        var _this = this;
        var newEntry = {
            text: this.state.compositionDetails.text
        };

        post("/api/entry", newEntry, function(err, entry) {
            if (err) {
                console.log(MODULE_NAME, functionName, "Error: ", err);
                return;
            }

            // TODO: Add entry to store for display
        });
    }

    handleTextareaChange(event) {
        var functionName = "handleTextareaChange";
        console.log(MODULE_NAME, functionName + " called", event.target.name, event.target.value);

        var newState = Object.assign({}, this.state);
        newState.compositionDetails.text = event.target.value;

        this.setState(newState);
    }

    render() {
        const functionName = "render";
        console.log(MODULE_NAME, functionName + " called", this.props);

        return ( 
            <div className="panel panel-flat" >
                <PanelHeading />

                <div className="container-fluid" >
                    <div className="col-md-12" >
                        <div className="col-md-12" >
                            <textarea rows="5" className="form-control" placeholder="Enter your message here" value={this.state.compositionDetails.text} onChange={ this.handleTextareaChange } /> 
                        </div> 
                        <div className="col-md-12" >
                            <button type="submit" className="btn btn-primary pull-right" onClick={this.handleSubmit} > Submit form </button> 
                        </div> 
                    </div> 
                </div>
            </div>
        )
    }
}

export default CompositionPanel