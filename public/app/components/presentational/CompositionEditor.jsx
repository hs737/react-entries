import React, { Component } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';

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
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
    }

    handleKeyCommand(command) {
        const functionName = "handleKeyCommand";
        console.log(MODULE_NAME, functionName + " called", command);

        const newState = RichUtils.handleKeyCommand(this.props.value.editorState, command);
        if (newState) {
            this.props.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    _onBoldClick() {
        this.props.onChange(RichUtils.toggleInlineStyle(this.props.value.editorState, 'BOLD'));
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
                <button onClick={this._onBoldClick.bind(this)}>Bold</button>
                <Editor
                    editorState={this.props.value.editorState}
                    onChange={this.props.onChange}
                    handleKeyCommand={this.handleKeyCommand}
                />
                {/*<span>----</span>
                <Editor editorState={this.state.editorState} onChange={this.onChange} />*/}
            </div>
        );
    }
}

export default CompositionEditor;
