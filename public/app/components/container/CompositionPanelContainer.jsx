import { Component } from 'react';
import { connect } from 'react-redux';

import CompositionPanel from '../presentational/CompositionPanel';
import { addEntry } from '../actions/actions';

const MODULE_NAME = "CompositionPanelContainer";

// class CompositionPanelContainer extends Component {
//     constructor(props, context, updater) {
//         const functionName = "constructor";
//         console.log(MODULE_NAME, functionName + " called");

//         super(props, context, updater);

//         console.log(MODULE_NAME, functionName, "props", this.props);

//         this.state = {};
//     }

//     componentWillMount() {
//         const functionName = "componentWillMount";
//         console.log(MODULE_NAME, functionName + " called");
//     }

//     componentDidMount() {
//         const functionName = "componentDidMount";
//         console.log(MODULE_NAME, functionName + " called");
//     }

//     componentWillUnmount() {
//         const functionName = "componentWillUnmount";
//         console.log(MODULE_NAME, functionName + " called");
//     }

//     componentWillReceiveProps(nextProps) {
//         const functionName = "componentWillReceiveProps";
//         console.log(MODULE_NAME, functionName + " called", nextProps);
//     }

//     shouldComponentUpdate(nextProps, nextState) {
//         const functionName = "shouldComponentUpdate";
//         console.log(MODULE_NAME, functionName + " called", nextProps, nextState);

//         return true;
//     }

//     componentWillUpdate(nextProps, nextState) {
//         const functionName = "componentWillUpdate";
//         console.log(MODULE_NAME, functionName + " called", nextProps, nextState);
//     }

//     componentDidUpdate(prevProps, prevState) {
//         const functionName = "componentDidUpdate";
//         console.log(MODULE_NAME, functionName + " called", prevProps, prevState);
//     }

//     render() {
//         const functionName = "render";
//         console.log(MODULE_NAME, functionName + " called", this.props);

//         return (
//             CompositionPanelContainer
//         );
//     }
// }

const mapDispatchToProps = (dispatch) => {
    console.log("mapDispatchToProps called", JSON.stringify(dispatch));
    return {
        // actions: bindActionCreators(PlayerActions, dispatch)
        addEntry: (entryText) => {
            var newEntry = {
                text: entryText
            };

            post("/api/entry", newEntry, function (err, document) {
                if (err) {
                    console.log(MODULE_NAME, functionName, "Error: ", err);
                    return;
                }

                console.log(MODULE_NAME, functionName, "Entry created", document);

                // TODO: Add entry to store for display
                // store.currentStore().dispatch(addEntry(document.result));
                _this.props.addEntry(document.result);

                var newState = Object.assign({}, _this.state);
                newState.compositionDetails.text = "";

                _this.setState(newState);
            });
        }
    };
};

export default connect(null, mapDispatchToProps)(CompositionPanel);
