import React, { Component } from 'react';
import { connect } from 'react-redux';

import CompositionPanel from '../presentational/CompositionPanel';
import { addEntry, updateCurrentEntry } from '../actions/actions';
import { post } from '../utils/APIManager';

const MODULE_NAME = "CompositionPanelContainer";

class CompositionPanelContainer extends Component {
    constructor(props, context, updater) {
        const functionName = "constructor";
        console.log(MODULE_NAME, functionName + " called");

        super(props, context, updater);

        console.log(MODULE_NAME, functionName, "props", this.props);

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);

        this.state = {
            composition: {
                text: "",
                title: ""
            }
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

    handleOnChange(event) {
        const functionName = "handleOnChange";
        console.log(MODULE_NAME, functionName + " called", event.target.name, event.target.value);

        var newState = Object.assign({}, this.state);
        switch (event.target.name) {
            case "title-input":
                newState.composition.title = event.target.value;
                break;
            case "text-input":
                newState.composition.text = event.target.value;
                break;
            default:
                console.log("ERROR: Unknown event target name", event.target.name);
                return;
        }

        this.setState(newState);
    }

    handleOnClick(event) {
        const functionName = "handleOnClick";
        console.log(MODULE_NAME, functionName + " called", event.target.name, event.target.value);

        const _this = this;

        this.props.addEntry(this.state.composition, function (err, entry) {
            if (err) {
                console.log(MODULE_NAME, functionName, "Error: ", err);
                return;
            }

            var newState = Object.assign({}, _this.state);
            newState.composition.text = "";
            newState.composition.title = "";
            _this.setState(newState);
        });
    }

    render() {
        const functionName = "render";
        console.log(MODULE_NAME, functionName + " called", this.props, this.state);

        return (
            <CompositionPanel handleOnChange={this.handleOnChange} handleOnClick={this.handleOnClick} {...this.state} />
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
