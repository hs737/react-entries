import React, { Component } from 'react';
import {Editor, EditorState} from 'draft-js';

const MODULE_NAME = "CompositionEditor";

class CompositionEditor extends React.Component {

    constructor(props, context, updater) {
        const functionName = "constructor";
        console.log(MODULE_NAME, functionName + " called");

        super(props, context, updater);

        console.log(MODULE_NAME, functionName, "props", this.props);

        // this.state = {editorState: EditorState.createEmpty()};
        // this.onChange = (editorState) => this.setState({editorState});
        // this.onChange = (editorState) => this.props.onChange({editorState});
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

        return (
            <div>
                <Editor editorState={this.props.value.editorState} onChange={this.props.onChange} />
                {/*<span>----</span>
                <Editor editorState={this.state.editorState} onChange={this.onChange} />*/}
            </div>
        );
    }
}

export default CompositionEditor;
