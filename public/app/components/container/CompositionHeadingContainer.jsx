import React, { Component } from 'react';
import { connect } from 'react-redux';

import CompositionHeading from '../presentational/CompositionHeading';
import { removeEntry } from '../actions/actions';
import { del } from '../utils/APIManager';

const MODULE_NAME = "CompositionHeadingContainer";

class CompositionHeadingContainer extends Component {
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
            <CompositionHeading {...this.props} />
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log("mapDispatchToProps called", JSON.stringify(dispatch));

    return {
        removeEntry: (entryId) => {
            const functionName = "removeEntry";
            console.log(MODULE_NAME, functionName + " called", JSON.stringify(entryId));

            del("/api/entry/" + entryId, null, function (err, document) {
                if (err) {
                    console.log(MODULE_NAME, functionName, "Error:", err)
                    // TODO post that error happened
                    return
                }

                dispatch(removeEntry(document.result));
            })
        }
    };
};

export default connect(null, mapDispatchToProps)(CompositionHeadingContainer);
