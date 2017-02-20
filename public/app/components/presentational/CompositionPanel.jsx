import React, { Component } from 'react';
import { connect } from 'react-redux';

import PanelHeading from './PanelHeading';
import PanelBody from './PanelBody';

import store from '../stores/store';
import { addEntry } from '../actions/actions';

const MODULE_NAME = "CompositionPanel";

class CompositionPanel extends Component {
    constructor(props, context, updater) {
        const functionName = "constructor";
        console.log(MODULE_NAME, functionName + " called");

        super(props, context, updater);

        console.log(MODULE_NAME, functionName, "props", this.props);
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

    render() {
        const functionName = "render";
        console.log(MODULE_NAME, functionName + " called", this.props, this.state);

        var compositionElement = (
            <div>
                <textarea rows="5" className="form-control" placeholder="Enter your message here" value={this.props.composition.text} onChange={this.props.handleOnChange} />
                <button type="submit" className="btn btn-primary pull-right" onClick={this.props.handleOnClick} > Submit form </button>
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