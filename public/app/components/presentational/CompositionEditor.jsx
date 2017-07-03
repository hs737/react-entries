import React, { Component, PropTypes } from 'react';
// import { Editor, EditorState, RichUtils } from 'draft-js';
import RichTextEditor from 'react-rte';

const MODULE_NAME = "CompositionEditor";
// const DEFAULT_EDITOR_KEY = "testKey";
class CompositionEditor extends React.Component {

    constructor(props, context, updater) {
        const functionName = "constructor";
        console.log(MODULE_NAME, functionName + " called");

        super(props, context, updater);

        console.log(MODULE_NAME, functionName, "props", this.props);

        this.state = {
            value: RichTextEditor.createEmptyValue()
        };

        // this.state = {editorState: EditorState.createEmpty()};
        // this.onChange = (editorState) => this.setState({editorState});
        // this.onChange = (editorState) => this.props.onChange({editorState});

        // this.onChange = this.onChange.bind(this);
    }

    // handleKeyCommand(command) {
    //     const functionName = "handleKeyCommand";
    //     console.log(MODULE_NAME, functionName + " called", command);

    //     const newState = RichUtils.handleKeyCommand(this.props.value.editorState, command);
    //     if (newState) {
    //         this.props.onChange(newState);
    //         return 'handled';
    //     }
    //     return 'not-handled';
    // }

    // _onBoldClick() {
    //     this.props.onChange(RichUtils.toggleInlineStyle(this.props.value.editorState, 'BOLD'));
    // }

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
        console.log(MODULE_NAME, functionName + " called", this.props);

        return (
            <div>
                {/*<button onClick={this._onBoldClick.bind(this)}>Bold</button>*/}
                {/*<Editor
                    editorKey={DEFAULT_EDITOR_KEY}
                    editorState={this.props.value.editorState}
                    onChange={this.props.onChange}
                    handleKeyCommand={this.handleKeyCommand}
                />*/}
                {/*<span>----</span>
                <Editor editorState={this.state.editorState} onChange={this.onChange} />*/}
                <RichTextEditor
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
                {/*<RichTextEditor
                    value={this.state.value}
                    onChange={this.onChange}
                />*/}
            </div>
        );
    }
}

export default CompositionEditor;
