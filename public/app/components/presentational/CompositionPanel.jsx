import React, { Component } from 'react';
import { connect } from 'react-redux';

import PanelHeading from './PanelHeading';
import PanelBody from './PanelBody';

import { post } from '../utils/APIManager';
import store from '../stores/store';
import { addEntry } from '../actions/actions';

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

        post("/api/entry", newEntry, function (err, document) {
            if (err) {
                console.log(MODULE_NAME, functionName, "Error: ", err);
                return;
            }

            console.log(MODULE_NAME, functionName, "Entry created", document);

            // TODO: Add entry to store for display
            // store.currentStore().dispatch(addEntry(document.result));
            _this.props.addEntry(document.result);

            var newState = Object.assign({}, _this.state);
            newState.compositionDetails.text = "";

            _this.setState(newState);
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

        var compositionElement = (
            <div>
                <form onSubmit={e => { this.handleSubmit(e) }} >
                    <textarea rows="5" className="form-control" placeholder="Enter your message here" value={this.state.compositionDetails.text} onChange={this.handleTextareaChange} />
                    <button type="submit" className="btn btn-primary pull-right" > Submit form </button>
                </form>
            </div>
        );

        return (
            <div className="panel panel-default" >
                <PanelHeading />
                <PanelBody element={compositionElement} />
            </div>
        );
    }
}

export default CompositionPanel;