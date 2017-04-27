import React, { Component } from 'react';
import { connect } from 'react-redux';
import DOMPurify from 'dompurify';
import {Editor, EditorState} from 'draft-js';

import CompositionPanel from '../presentational/CompositionPanel';
import { addEntry, updateCurrentEntry } from '../actions/actions';
import { post } from '../utils/APIManager';

const MODULE_NAME = "CompositionPanelContainer";
const DEFAULT_STATE = {
    composition: {
        text: {editorState: EditorState.createEmpty()},
        title: ""
    }
};

class CompositionPanelContainer extends Component {
    constructor(props, context, updater) {
        const functionName = "constructor";
        console.log(MODULE_NAME, functionName + " called");

        super(props, context, updater);

        console.log(MODULE_NAME, functionName, "props", this.props);

        this.handleBodyOnChange = this.handleBodyOnChange.bind(this);
        this.handleTitleOnChange = this.handleTitleOnChange.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);

        this.state = DEFAULT_STATE;
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

    handleBodyOnChange(content, delta, source, editor) {
        const functionName = "handleOnChange";
        console.log(MODULE_NAME, functionName + " called", content, delta, source, editor);

        var newState = Object.assign({}, this.state);
        newState.composition.text = {editorState: content};

        this.setState(newState);
    }

    handleTitleOnChange(event) {
        const functionName = "handleOnChange";
        console.log(MODULE_NAME, functionName + " called", event.target.name, event.target.value);

        var newState = Object.assign({}, this.state);
        newState.composition.title = event.target.value;

        this.setState(newState);
    }

    handleOnClick(event) {
        const functionName = "handleOnClick";
        console.log(MODULE_NAME, functionName + " called", event.target.name, event.target.value);

        const _this = this;
        const composedText = {
            title: this.state.composition.title,
            text: DOMPurify.sanitize(this.state.composition.text)
        };
        console.log("Composed Text:", JSON.stringify(composedText));

        this.props.addEntry(composedText, function (err, composedText) {
            if (err) {
                console.log(MODULE_NAME, functionName, "Error: ", err);
                return;
            }

            var newState = DEFAULT_STATE;
            // var newState = Object.assign({}, _this.state);
            // newState.composition.text = "";
            // newState.composition.title = "";
            _this.setState(newState);
        });
    }

    render() {
        const functionName = "render";
        console.log(MODULE_NAME, functionName + " called", this.props, this.state);

        return (
            <CompositionPanel handleTitleOnChange={this.handleTitleOnChange}
                handleBodyOnChange={this.handleBodyOnChange}
                handleOnClick={this.handleOnClick} {...this.state} />
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log("mapDispatchToProps called", JSON.stringify(dispatch));
    return {
        addEntry: (composition, callback) => {
            const functionName = "addEntry";
            console.log(MODULE_NAME, functionName + " called", JSON.stringify(composition));

            const newEntry = {
                text: composition.text,
                title: composition.title
            };

            post("/api/entry", newEntry, function (err, document) {
                if (err) {
                    console.log(MODULE_NAME, functionName, "Error: ", err);
                    callback(err);
                }

                console.log(MODULE_NAME, functionName, "Entry created", document);

                dispatch(addEntry(document.result));
                callback(null, document);
            });
        }
    };
};

// const mapStateToProps = (newStateInStore) => {
//     const functionName = "render";
//     console.log(MODULE_NAME, functionName, JSON.stringify(newStateInStore))

//     const {composition} = newStateInStore;

//     return {
//         composition
//     };
// };

export default connect(null, mapDispatchToProps)(CompositionPanelContainer);
// export default CompositionPanelContainer;
