import React, { Component } from 'react';
// import { connect } from 'react-redux';

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

        this.onClickToggleEntryMode = this.onClickToggleEntryMode.bind(this);
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

    onClickToggleEntryMode(newMode) {
        const functionName = "onClickToggleEntryMode";
        console.log(MODULE_NAME, functionName + " called", newMode);

        let modeKey = Object.keys(MODE).find(key => MODE[key] === newMode);
        if (!modeKey) {
            console.log(MODULE_NAME, functionName, "Error: Cannot recognize mode");
            return;
        }

        var newState = Object.assign({}, this.state);
        newState.mode = MODE[modeKey];

        this.setState(newState);
    }

    render() {
        const functionName = "render";
        console.log(MODULE_NAME, functionName + " called", this.state, this.props);

        if (this.state.mode === MODE.VIEW) {
            var panel = <EntryPanel details={this.props.details} onClickUpdate={() => this.onClickToggleEntryMode(MODE.EDIT)} />;
        } else if (this.state.mode === MODE.EDIT) {
            // console.log("Elem", elem);
            panel = <CompositionPanelContainer details={this.props.details} onClickSubmit={() => this.onClickToggleEntryMode(MODE.VIEW)} />;
        } else {
            console.log(MODULE_NAME, functionName, "Error: Cannot recognize mode");
            return;
        }

        return panel;

        // return (
        //     <EntryPanel details={this.props.details} editorText={this.state.text} editorMode={this.state.mode} />
        // );
    }
}

// const mapDispatchToProps = (dispatch) => {
//     console.log("mapDispatchToProps called", JSON.stringify(dispatch));

//     return {
//         addEntry: (composition, callback) => {
//             const functionName = "addEntry";
//             console.log(MODULE_NAME, functionName + " called", JSON.stringify(composition));
//         }
//     };
// }

// export default connect(null, mapDispatchToProps)(EntryModeContainer);
export default EntryModeContainer;
