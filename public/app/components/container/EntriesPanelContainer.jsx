import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ActionsCreators from '../actions/ActionCreators';
import EntriesPanel from '../presentational/EntriesPanel';

const MODULE_NAME = "EntriesPanelContainer";
console.log(MODULE_NAME, "ActionCreator:", ActionsCreators);

class EntriesPanelContainer extends Component {
    constructor(props, context, updater) {
        const functionName = "constructor";
        console.log(MODULE_NAME, functionName + " called");

        super(props, context, updater);

        console.log(MODULE_NAME, functionName, "props", this.props);

        this.state = {};
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
            EntriesPanelContainer
        );
    }
}

const mapStateToProps = (newStateInStore) => {
    console.log("mapStateToProps called", JSON.stringify(newStateInStore));
    return {
        // currentUser: newStateInStore.userReducer.currentUser,
        // currentProfile: newStateInStore.profileReducer.currentProfile,
        // entries: newStateInStore.entryReducer.entriesList
    };
};

const mapDispatchToProps = (dispatch) => {
    console.log("mapDispatchToProps called", JSON.stringify(dispatch));
    return {
        // actions: bindActionCreators(PlayerActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EntriesPanelContainer);
