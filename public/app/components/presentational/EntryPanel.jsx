import React, { Component } from 'react';

import EntryHeadingContainer from '../container/EntryHeadingContainer';
import PanelBody from './PanelBody';

const MODULE_NAME = "EntryPanel";

class EntryPanel extends Component {
    constructor(props, context, updater) {
        const functionName = "constructor";
        console.log(MODULE_NAME, functionName + " called");

        super(props, context, updater);

        console.log(MODULE_NAME, functionName, "props", this.props);

        this.state = {};
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
        console.log(MODULE_NAME, functionName + " called", this.props);

        const details = this.props.details;
        const html_node = <div dangerouslySetInnerHTML={{ __html: details.text }} ></div>;

        return (
            <div className="panel panel-default" >
                <EntryHeadingContainer key={details._id + "_heading_container"} details={details} />
                <PanelBody key={details._id + "_panel_body"} element={html_node} />
            </div>
        );

        // return (
        //     <div>EntryPanel</div>
        // );
    }
}

export default EntryPanel;
