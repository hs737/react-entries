import React, { Component } from 'react'

import SearchBar from './SearchBar'

import store from '../stores/store'
import actions from '../actions/actions'
import CONSTANTS from '../constants/constants'

var MODULE_NAME = "NavBar"

class NavBar extends Component {
    constructor(props, context, updater) {
        var functionName = "constructor"
        console.log(MODULE_NAME, functionName + " called")

        super(props, context, updater)

        console.log(MODULE_NAME, functionName, "props", this.props)

        this.handleLoginSignupClick = this.handleLoginSignupClick.bind(this)
    }

    handleLoginSignupClick(displayEnum) {
        var functionName = "handleLoginSignupClick"
        console.log(MODULE_NAME, functionName + " called", displayEnum)

        if (displayEnum != null && displayEnum.length > 0) {
            store.currentStore().dispatch(actions.updateHomeComponentDisplay(displayEnum))
        } else {
            console.log("Bad display enum value", displayEnum)
        }
    }

    componentWillMount() {
        var functionName = "componentWillMount"
        console.log(MODULE_NAME, functionName + " called")
    }

    componentDidMount() {
        var functionName = "componentDidMount"
        console.log(MODULE_NAME, functionName + " called")
    }

    componentWillUnmount() {
        var functionName = "componentWillUnmount"
        console.log(MODULE_NAME, functionName + " called")
    }

    componentWillReceiveProps(nextProps) {
        var functionName = "componentWillReceiveProps"
        console.log(MODULE_NAME, functionName + " called", nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        var functionName = "shouldComponentUpdate"
        console.log(MODULE_NAME, functionName + " called", nextProps, nextState)

        return true
    }

    componentWillUpdate(nextProps, nextState) {
        var functionName = "componentWillUpdate"
        console.log(MODULE_NAME, functionName + " called", nextProps, nextState)
    }

    componentDidUpdate(prevProps, prevState) {
        var functionName = "componentDidUpdate"
        console.log(MODULE_NAME, functionName + " called", prevProps, prevState)
    }

    render() {
        var functionName = "render"
        console.log(MODULE_NAME, functionName + " called", this.props)

        var navBarLoggedInList= (
            <ul className="nav navbar-nav navbar-right">
                {/*<li>
                    <a href="#">
                        <i className="icon-search4"></i>
                        <span className="visible-xs-inline-block position-right">Icon link</span>
                    </a>
                </li>*/}
                <li>
                    <form className="navbar-form navbar-right">
                        {/*<div className="input-group has-feedback has-feedback-left">*/}
                            <SearchBar />
                        {/*</div>*/}
                        {/*<input type="search" className="form-control" placeholder="Search" />
                        <div className="form-control-feedback">
                            <i className="icon-search4 text-muted text-size-base"></i>
                        </div>*/}
                    </form>
                </li>

                <li className="dropdown dropdown-user">
                    <a className="dropdown-toggle" data-toggle="dropdown">
                        <img src="/assets/images/image.png" alt="" />
                        <span>bbbbb</span>
                        <i className="caret"></i>
                    </a>

                    <ul className="dropdown-menu dropdown-menu-right">
                        <li><a href="#"><i className="icon-user-plus"></i> My profile</a></li>
                        <li><a href="#"><i className="icon-coins"></i> My balance</a></li>
                        <li><a href="#"><span className="badge badge-warning pull-right">58</span> <i className="icon-comment-discussion"></i> Messages</a></li>
                        <li className="divider"></li>
                        <li><a href="#"><i className="icon-cog5"></i> Account settings</a></li>
                        <li><a href="#"><i className="icon-switch2"></i> Logout</a></li>
                    </ul>
                </li>
            </ul>
        )

        var navBarNotLoggedInList = (
            <ul className="nav navbar-nav navbar-right">
                {/*<li>
                    <a href="#">
                        <i className="icon-search4"></i>
                        <span className="visible-xs-inline-block position-right">Icon link</span>
                    </a>
                </li>*/}
                <li>
                    <button type="button" className="btn btn-default btn-xs navbar-btn" onClick={() => this.handleLoginSignupClick(CONSTANTS.HOME_DISPLAY_ENUM.SHOW_LOGIN)}>Log In</button>
                </li>
                <li>
                    <button type="button" className="btn btn-default btn-xs navbar-btn" onClick={() => this.handleLoginSignupClick(CONSTANTS.HOME_DISPLAY_ENUM.SHOW_SIGNUP)}>Sign Up</button>
                </li>
            </ul>
        )

        var navBarRightList = (this.props.currentUser == null ? navBarNotLoggedInList : navBarLoggedInList)
        return (
            <div className="navbar navbar-inverse">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/"><img src="/assets/images/logo_light.png" alt="" /></a>

                    {/*<ul className="nav navbar-nav pull-right visible-xs-block">
                        <li><a data-toggle="collapse" data-target="#navbar-mobile"><i className="icon-tree5"></i></a></li>
                        <li><a className="sidebar-mobile-main-toggle"><i className="icon-paragraph-justify3"></i></a></li>
                        <li><a className="sidebar-mobile-secondary-toggle"><i className="icon-more"></i></a></li>
                    </ul>*/}
                </div>

                <div className="navbar-collapse collapse" id="navbar-mobile">
                    {/*<ul className="nav navbar-nav">
                        <li><a className="sidebar-control sidebar-main-toggle hidden-xs"><i className="icon-paragraph-justify3"></i></a></li>
                        <li><a className="sidebar-control sidebar-secondary-hide hidden-xs"><i className="icon-transmission"></i></a></li>
                    </ul>*/}

                    {navBarRightList}
                </div>
            </div>
        )
    }
}

export default NavBar
