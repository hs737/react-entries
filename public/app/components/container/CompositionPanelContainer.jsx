import React, { Component } from 'react';
import { connect } from 'react-redux';
// import DOMPurify from 'dompurify';
// import { Editor, EditorState } from 'draft-js';
// import { stateToHTML } from 'draft-js-export-html';
import RichTextEditor from 'react-rte';

import CompositionPanel from '../presentational/CompositionPanel';
import { addEntry, updateCurrentEntry } from '../actions/actions';
import { post, put } from '../utils/APIManager';

const MODULE_NAME = "CompositionPanelContainer";
const getDefaultState = (details) => {
    const functionName = "getDefaultState";
    console.log(MODULE_NAME, functionName + " called", details);

    if (!details) {
        return {
            composition: {
                text: RichTextEditor.createEmptyValue(),
                title: ""
            },
            mode: MODE.NEW
        };
    }

    let { text, title } = details;
    return {
        composition: {
            text: RichTextEditor.createValueFromString(text, 'html'),
            title: title
        },
        mode: MODE.UPDATE
    };
};

const MODE = {
    NEW: "new",
    UPDATE: "update"
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

        if (this.props.details) {
            this.state = getDefaultState(this.props.details);
        } else {
            this.state = getDefaultState();
        }
    }

    componentWillMount() {
        const functionName = "componentWillMount";
        console.log(MODULE_NAME, functionName + " called", this.props);

        if (this.props.details) {
            console.log(MODULE_NAME, functionName, "Details found");

            var newState = Object.assign({}, this.state);
            // newState.composition.text = { editorState: content };
            newState.composition.title = this.props.details.title;

            this.setState(newState);
        }
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

    handleBodyOnChange(value) {
        const functionName = "handleBodyOnChange";
        console.log(MODULE_NAME, functionName + " called", value);

        var newState = Object.assign({}, this.state);
        newState.composition.text = value;

        this.setState(newState);
    }

    handleTitleOnChange(event) {
        const functionName = "handleTitleOnChange";
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
            // text: DOMPurify.sanitize(this.state.composition.text)
            text: this.state.composition.text.toString('html')
        };
        console.log("Composed Text Before:", JSON.stringify(composedText));

        console.assert(Object.keys(MODE).find((key) => MODE[key] === this.state.mode), "Invalid mode: " + this.state.mode);
        if (this.state.mode === MODE.NEW) {
            this.props.addEntry(composedText, function (err, composedTextDocument) {
                console.log("Composed Text After Add:", composedTextDocument);

                if (err) {
                    console.log(MODULE_NAME, functionName, "Error: ", err);
                    return;
                }

                var newState = getDefaultState();
                // var newState = Object.assign({}, _this.state);
                // newState.composition.text = "";
                // newState.composition.title = "";
                console.log(MODULE_NAME, functionName, "New State:", newState);
                _this.setState(newState);
            });
        } else if (this.state.mode === MODE.UPDATE) {
            this.props.updateEntry(this.props.details._id, composedText, function (err, composedTextDocument) {
                console.log("Composed Text After Update:", composedTextDocument);

                if (err) {
                    console.log(MODULE_NAME, functionName, "Error: ", err);
                    return;
                }


            });
        }
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
        },
        updateEntry: (id, composition, callback) => {
            const functionName = "updateEntry";
            console.log(MODULE_NAME, functionName + " called", id, JSON.stringify(composition));

            const updatedEntry = {
                text: composition.text,
                title: composition.title
            };

            put("/api/entry/" + id, updatedEntry, function (err, document) {
                if (err) {
                    console.log(MODULE_NAME, functionName, "Error: ", err);
                    callback(err);
                }

                console.log(MODULE_NAME, functionName, "Entry updated", document);

                dispatch(updateCurrentEntry(document.result));
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
