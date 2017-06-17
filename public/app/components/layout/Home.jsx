import React, { Component } from 'react';
import { connect } from 'react-redux';

import NavBar from '../presentational/NavBar';
import Login from '../presentational/Login';
import PageContent from '../presentational/PageContent';


import CONSTANTS from '../constants/constants';
import store from '../stores/store';

var MODULE_NAME = "Home";

class Home extends Component {
    constructor(props, context, updater) {
        var functionName = "constructor";
        console.log(MODULE_NAME, functionName + " called");

        super(props, context, updater);

        console.log(MODULE_NAME, functionName, "props", this.props);

        this.state = {
            currentUser: null,
            displaySelection: null
        };
    }

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
        console.log(MODULE_NAME, functionName + " called", this.props.location.query.q, this.props);

        var mainDisplayComponent = null;
        if (this.props.displaySelection == CONSTANTS.HOME_DISPLAY_ENUM.SHOW_LOGIN) {
            mainDisplayComponent = <Login />
        } else if (this.props.displaySelection == CONSTANTS.HOME_DISPLAY_ENUM.SHOW_DEFAULT) {
            mainDisplayComponent = "default";
        } else {
            mainDisplayComponent = "woops";
        }

        return (
            <div className="layout-boxed">
                <NavBar currentUser={this.props.currentUser} />

                <PageContent />
            </div>
        )
    }
}

const mapStateToProps = function (newStateInStore) {
    const functionName = "mapStateToProps";
    console.log(MODULE_NAME, functionName + " called", JSON.stringify(newStateInStore));

    return {
        currentUser: newStateInStore.userReducer.currentUser,
        displaySelection: newStateInStore.uiReducer.displaySelection
    };
}

export default connect(mapStateToProps)(Home);
