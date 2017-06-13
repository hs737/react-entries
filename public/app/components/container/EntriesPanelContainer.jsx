import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import ActionsCreators from '../actions/ActionCreators';
import EntriesPanel from '../presentational/EntriesPanel';
import { get } from '../utils/APIManager';
import { setEntries } from '../actions/actions';

const MODULE_NAME = "EntriesPanelContainer";
// console.log(MODULE_NAME, "ActionCreator:", ActionsCreators);

class EntriesPanelContainer extends Component {
    constructor(props, context, updater) {
        const functionName = "constructor";
        console.log(MODULE_NAME, functionName + " called");

        super(props, context, updater);

        console.log(MODULE_NAME, functionName, "props", this.props);

        // this.state = {};
    }

    componentWillMount() {
        const functionName = "componentWillMount";
        console.log(MODULE_NAME, functionName + " called");

        const _this = this;
        const query = {
            constraints: {
                // profile: profileId
            },
            options: {
                sort: {
                    timestamp: -1
                }
            }
        };

        get("/api/entry", query, function (err, entries) {
            console.log("get /api/entry callback called", err, entries);

            if (err) {
                console.log(MODULE_NAME, functionName, "Error:", err);
                // TODO do not call profile page if current profile isn't loaded
                return;
            }

            // store.currentStore().dispatch(actions.getEntries(results.result));
            _this.props.setEntries(entries.result);
        });
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
            <EntriesPanel entries={this.props.entries} />
        );
    }
}

const mapStateToProps = (newStateInStore) => {
    const functionName = "mapStateToProps";
    console.log(MODULE_NAME, functionName + " called", newStateInStore, JSON.stringify(newStateInStore));

    return {
        // currentUser: newStateInStore.userReducer.currentUser,
        // currentProfile: newStateInStore.profileReducer.currentProfile,
        entries: newStateInStore.entryReducer.entriesList
    };
};

const mapDispatchToProps = (dispatch) => {
    const functionName = "mapDispatchToProps";
    console.log(MODULE_NAME, functionName + " called", JSON.stringify(dispatch));
    return {
        setEntries: (entries) => {
            const functionName = "setEntries";
            console.log(MODULE_NAME, functionName + " called", JSON.stringify(entries));

            dispatch(setEntries(entries));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EntriesPanelContainer);
