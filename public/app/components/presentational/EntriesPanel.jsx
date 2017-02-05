import React, { Component } from 'react';

import Panel from './Panel';
import EntryText from './EntryText';
import Entries from './Entries';

var MODULE_NAME = "EntriesPanel";

class EntriesPanel extends Component {
    componentWillMount() {
        var functionName = "componentWillMount";
        console.log(MODULE_NAME, functionName + " called");
    }

    componentDidMount() {
        var functionName = "componentDidMount";
        console.log(MODULE_NAME, functionName + " called");
    }

    componentWillUnmount() {
        var functionName = "componentWillUnmount";
        console.log(MODULE_NAME, functionName + " called");
    }

    componentWillReceiveProps(nextProps) {
        var functionName = "componentWillReceiveProps";
        console.log(MODULE_NAME, functionName + " called", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        var functionName = "shouldComponentUpdate";
        console.log(MODULE_NAME, functionName + " called", nextProps, nextState);

        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        var functionName = "componentWillUpdate";
        console.log(MODULE_NAME, functionName + " called", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        var functionName = "componentDidUpdate";
        console.log(MODULE_NAME, functionName + " called", prevProps, prevState);
    }

    render() {
        var functionName = "render";
        console.log(MODULE_NAME, functionName + " called", this.props);

        var textEntryBody = (
            <EntryText id={this.props.id} />
        )

        return (
            <div>
                <Panel panelBody={textEntryBody} />
                <Entries entries={this.props.entries} />
            </div>
        )
    }
}

export default EntriesPanel
