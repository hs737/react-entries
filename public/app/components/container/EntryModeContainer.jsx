import React, { Component } from 'react';

import EntryPanel from '../presentational/EntryPanel';
import CompositionPanelContainer from './CompositionPanelContainer';

const MODULE_NAME = "EntryModeContainer";
const getDefaultState = (html) => {
    const functionName = "getDefaultState";
    console.log(MODULE_NAME, functionName + " called", html);

    return {
        text: RichTextEditor.createValueFromString(html, 'html'),
        mode: MODE.VIEW
    };
};

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

        // this.state = getDefaultState();
        this.state = {
            mode: MODE.VIEW
        };
    }

    // onChange(value) {
    //     this.setState({ value });
    //     if (this.props.onChange) {
    //         // Send the changes up to the parent component as an HTML string.
    //         // This is here to demonstrate using `.toString()` but in a real app it
    //         // would be better to avoid generating a string on each change.
    //         this.props.onChange(
    //             value.toString('html')
    //         );
    //     }
    // }

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

        if (this.state.mode === MODE.VIEW) {
            var panel = <EntryPanel details={this.props.details} />;
        } else if (this.state.mode === MODE.EDIT) {
            // console.log("Elem", elem);
            panel = <CompositionPanelContainer details={this.props.details} />;
        } else {
            console.log("Error: Canot recognize mode");
            return;
        }

        return panel;

        // return (
        //     <EntryPanel details={this.props.details} editorText={this.state.text} editorMode={this.state.mode} />
        // );
    }
}

export default EntryModeContainer;
