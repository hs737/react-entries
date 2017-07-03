import React, { Component } from 'react';

import EntryPanel from '../presentational/EntryPanel';
import CompositionPanelContainer from './CompositionPanelContainer';

const MODULE_NAME = "EntryModeContainer";

const MODE = {
    VIEW: "view",
    EDIT: "edit"
};
export { MODE };

class EntryModeContainer extends Component {
    constructor(props, context, updater) {
        const functionName = "constructor";
        console.log(MODULE_NAME, functionName + " called");

        super(props, context, updater);

        console.log(MODULE_NAME, functionName, "props", this.props);

        this.state = {
            mode: MODE.VIEW
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

    render() {
        const functionName = "render";
        console.log(MODULE_NAME, functionName + " called", this.state, this.props);

        const elem = this.props.element;

        if (this.state.mode === MODE.VIEW) {
            var panel = <EntryPanel details={elem} />;
        } else if (this.state.mode === MODE.EDIT) {
            // console.log("Elem", elem);
            panel = <CompositionPanelContainer details={elem} />;
        } else {
            console.log("Error: Canot recognize mode");
            return;
        }

        return panel;
    }
}

export default EntryModeContainer;
