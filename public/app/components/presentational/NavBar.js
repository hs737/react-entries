import React, { Component } from 'react'
import { withRouter } from 'react-router'

import SearchBar from './SearchBar'

import store from '../stores/store'
import actions from '../actions/actions'
import CONSTANTS from '../constants/constants'
import { get } from '../utils/APIManager'

var MODULE_NAME = "NavBar"

class NavBar extends Component {
    constructor(props, context, updater) {
        var functionName = "constructor"
        console.log(MODULE_NAME, functionName + " called")

        super(props, context, updater)

        console.log(MODULE_NAME, functionName, "props", this.props)

        this.handleLoginSignupClick = this.handleLoginSignupClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
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

    handleLogoutClick() {
        var functionName = "handleLogoutClick"
        console.log(MODULE_NAME, functionName + " called")

        const _this = this

        get("/account/logout", null, function(err, result) {
            if (err != null){
                console.log("Error", err.code, err.message)
                return
            }

            store.currentStore().dispatch(actions.updateCurrentUser(null))

            console.log(MODULE_NAME, functionName, "this.props.router", _this.props.router)
            _this.props.router.push('/')
        })

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
        const functionName = "render"
        console.log(MODULE_NAME, functionName + " called", this.props)

        const username = (this.props.currentUser != null ? this.props.currentUser.username : null)

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
                        <span>{username}</span>
                        <i className="caret"></i>
                    </a>

                    <ul className="dropdown-menu dropdown-menu-right">
                        <li><a href="#"><i className="icon-user-plus"></i> My profile</a></li>
                        <li><a href="#"><i className="icon-coins"></i> My balance</a></li>
                        <li><a href="#"><span className="badge badge-warning pull-right">58</span> <i className="icon-comment-discussion"></i> Messages</a></li>
                        <li className="divider"></li>
                        <li><a href="#"><i className="icon-cog5"></i> Account settings</a></li>
                        <li><a onClick={this.handleLogoutClick}><i className="icon-switch2"></i>Logout</a></li>
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
            </ul>
        )

        var navBarRightList = (this.props.currentUser == null ? navBarNotLoggedInList : navBarLoggedInList)
        return (
            <div className="navbar navbar-inverse bg-indigo navbar-static-top">
                <div className="navbar-boxed">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="index.html"><img src="assets/images/logo_light.png" alt="" /></a>

                        <ul className="nav navbar-nav visible-xs-block">
                            <li><a data-toggle="collapse" data-target="#navbar-mobile" className="legitRipple"><i className="icon-tree5"></i></a></li>
                            <li><a className="sidebar-mobile-main-toggle legitRipple"><i className="icon-paragraph-justify3"></i></a></li>
                        </ul>
                    </div>

                    <div className="navbar-collapse collapse" id="navbar-mobile">
                        <ul className="nav navbar-nav">
                            <li><a className="sidebar-control sidebar-main-toggle hidden-xs legitRipple"><i className="icon-paragraph-justify3"></i></a></li>

                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle legitRipple" data-toggle="dropdown">
                                    <i className="icon-puzzle3"></i>
                                    <span className="visible-xs-inline-block position-right">Git updates</span>
                                    <span className="status-mark border-orange-400"></span>
                                </a>

                                <div className="dropdown-menu dropdown-content">
                                    <div className="dropdown-content-heading">
                                        Git updates
                                        <ul className="icons-list">
                                            <li><a href="#"><i className="icon-sync"></i></a></li>
                                        </ul>
                                    </div>

                                    <ul className="media-list dropdown-content-body width-350">
                                        <li className="media">
                                            <div className="media-left">
                                                <a href="#" className="btn border-primary text-primary btn-flat btn-rounded btn-icon btn-sm legitRipple"><i className="icon-git-pull-request"></i></a>
                                            </div>

                                            <div className="media-body">
                                                Drop the IE <a href="#">specific hacks</a> for temporal inputs
                                                <div className="media-annotation">4 minutes ago</div>
                                            </div>
                                        </li>

                                        <li className="media">
                                            <div className="media-left">
                                                <a href="#" className="btn border-warning text-warning btn-flat btn-rounded btn-icon btn-sm legitRipple"><i className="icon-git-commit"></i></a>
                                            </div>

                                            <div className="media-body">
                                                Add full font overrides for popovers and tooltips
                                                <div className="media-annotation">36 minutes ago</div>
                                            </div>
                                        </li>

                                        <li className="media">
                                            <div className="media-left">
                                                <a href="#" className="btn border-info text-info btn-flat btn-rounded btn-icon btn-sm legitRipple"><i className="icon-git-branch"></i></a>
                                            </div>

                                            <div className="media-body">
                                                <a href="#">Chris Arney</a> created a new <span className="text-semibold">Design</span> branch
                                                <div className="media-annotation">2 hours ago</div>
                                            </div>
                                        </li>

                                        <li className="media">
                                            <div className="media-left">
                                                <a href="#" className="btn border-success text-success btn-flat btn-rounded btn-icon btn-sm legitRipple"><i className="icon-git-merge"></i></a>
                                            </div>

                                            <div className="media-body">
                                                <a href="#">Eugene Kopyov</a> merged <span className="text-semibold">Master</span> and <span className="text-semibold">Dev</span> branches
                                                <div className="media-annotation">Dec 18, 18:36</div>
                                            </div>
                                        </li>

                                        <li className="media">
                                            <div className="media-left">
                                                <a href="#" className="btn border-primary text-primary btn-flat btn-rounded btn-icon btn-sm legitRipple"><i className="icon-git-pull-request"></i></a>
                                            </div>

                                            <div className="media-body">
                                                Have Carousel ignore keyboard events
                                                <div className="media-annotation">Dec 12, 05:46</div>
                                            </div>
                                        </li>
                                    </ul>

                                    <div className="dropdown-content-footer">
                                        <a href="#" data-popup="tooltip" title="" data-original-title="All activity"><i className="icon-menu display-block"></i></a>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <div className="navbar-right">
                            <p className="navbar-text">Morning, Victoria!</p>
                            <p className="navbar-text"><span className="label bg-success-400">Online</span></p>

                            <ul className="nav navbar-nav">
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle legitRipple" data-toggle="dropdown">
                                        <i className="icon-bell2"></i>
                                        <span className="visible-xs-inline-block position-right">Activity</span>
                                        <span className="status-mark border-orange-400"></span>
                                    </a>

                                    <div className="dropdown-menu dropdown-content">
                                        <div className="dropdown-content-heading">
                                            Activity
                                            <ul className="icons-list">
                                                <li><a href="#"><i className="icon-menu7"></i></a></li>
                                            </ul>
                                        </div>

                                        <ul className="media-list dropdown-content-body width-350">
                                            <li className="media">
                                                <div className="media-left">
                                                    <a href="#" className="btn bg-success-400 btn-rounded btn-icon btn-xs legitRipple"><i className="icon-mention"></i></a>
                                                </div>

                                                <div className="media-body">
                                                    <a href="#">Taylor Swift</a> mentioned you in a post "Angular JS. Tips and tricks"
                                                    <div className="media-annotation">4 minutes ago</div>
                                                </div>
                                            </li>

                                            <li className="media">
                                                <div className="media-left">
                                                    <a href="#" className="btn bg-pink-400 btn-rounded btn-icon btn-xs legitRipple"><i className="icon-paperplane"></i></a>
                                                </div>

                                                <div className="media-body">
                                                    Special offers have been sent to subscribed users by <a href="#">Donna Gordon</a>
                                                    <div className="media-annotation">36 minutes ago</div>
                                                </div>
                                            </li>

                                            <li className="media">
                                                <div className="media-left">
                                                    <a href="#" className="btn bg-blue btn-rounded btn-icon btn-xs legitRipple"><i className="icon-plus3"></i></a>
                                                </div>

                                                <div className="media-body">
                                                    <a href="#">Chris Arney</a> created a new <span className="text-semibold">Design</span> branch in <span className="text-semibold">Limitless</span> repository
                                                    <div className="media-annotation">2 hours ago</div>
                                                </div>
                                            </li>

                                            <li className="media">
                                                <div className="media-left">
                                                    <a href="#" className="btn bg-purple-300 btn-rounded btn-icon btn-xs legitRipple"><i className="icon-truck"></i></a>
                                                </div>

                                                <div className="media-body">
                                                    Shipping cost to the Netherlands has been reduced, database updated
                                                    <div className="media-annotation">Feb 8, 11:30</div>
                                                </div>
                                            </li>

                                            <li className="media">
                                                <div className="media-left">
                                                    <a href="#" className="btn bg-warning-400 btn-rounded btn-icon btn-xs legitRipple"><i className="icon-bubble8"></i></a>
                                                </div>

                                                <div className="media-body">
                                                    New review received on <a href="#">Server side integration</a> services
                                                    <div className="media-annotation">Feb 2, 10:20</div>
                                                </div>
                                            </li>

                                            <li className="media">
                                                <div className="media-left">
                                                    <a href="#" className="btn bg-teal-400 btn-rounded btn-icon btn-xs legitRipple"><i className="icon-spinner11"></i></a>
                                                </div>

                                                <div className="media-body">
                                                    <strong>January, 2016</strong> - 1320 new users, 3284 orders, $49,390 revenue
                                                    <div className="media-annotation">Feb 1, 05:46</div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle legitRipple" data-toggle="dropdown">
                                        <i className="icon-bubble8"></i>
                                        <span className="visible-xs-inline-block position-right">Messages</span>
                                        <span className="status-mark border-orange-400"></span>
                                    </a>

                                    <div className="dropdown-menu dropdown-content width-350">
                                        <div className="dropdown-content-heading">
                                            Messages
                                            <ul className="icons-list">
                                                <li><a href="#"><i className="icon-compose"></i></a></li>
                                            </ul>
                                        </div>

                                        <ul className="media-list dropdown-content-body">
                                            <li className="media">
                                                <div className="media-left">
                                                    <img src="assets/images/placeholder.jpg" className="img-circle img-sm" alt="" />
                                                    <span className="badge bg-danger-400 media-badge">5</span>
                                                </div>

                                                <div className="media-body">
                                                    <a href="#" className="media-heading">
                                                        <span className="text-semibold">James Alexander</span>
                                                        <span className="media-annotation pull-right">04:58</span>
                                                    </a>

                                                    <span className="text-muted">who knows, maybe that would be the best thing for me...</span>
                                                </div>
                                            </li>

                                            <li className="media">
                                                <div className="media-left">
                                                    <img src="assets/images/placeholder.jpg" className="img-circle img-sm" alt="" />
                                                    <span className="badge bg-danger-400 media-badge">4</span>
                                                </div>

                                                <div className="media-body">
                                                    <a href="#" className="media-heading">
                                                        <span className="text-semibold">Margo Baker</span>
                                                        <span className="media-annotation pull-right">12:16</span>
                                                    </a>

                                                    <span className="text-muted">That was something he was unable to do because...</span>
                                                </div>
                                            </li>

                                            <li className="media">
                                                <div className="media-left"><img src="assets/images/placeholder.jpg" className="img-circle img-sm" alt="" /></div>
                                                <div className="media-body">
                                                    <a href="#" className="media-heading">
                                                        <span className="text-semibold">Jeremy Victorino</span>
                                                        <span className="media-annotation pull-right">22:48</span>
                                                    </a>

                                                    <span className="text-muted">But that would be extremely strained and suspicious...</span>
                                                </div>
                                            </li>

                                            <li className="media">
                                                <div className="media-left"><img src="assets/images/placeholder.jpg" className="img-circle img-sm" alt="" /></div>
                                                <div className="media-body">
                                                    <a href="#" className="media-heading">
                                                        <span className="text-semibold">Beatrix Diaz</span>
                                                        <span className="media-annotation pull-right">Tue</span>
                                                    </a>

                                                    <span className="text-muted">What a strenuous career it is that I've chosen...</span>
                                                </div>
                                            </li>

                                            <li className="media">
                                                <div className="media-left"><img src="assets/images/placeholder.jpg" className="img-circle img-sm" alt="" /></div>
                                                <div className="media-body">
                                                    <a href="#" className="media-heading">
                                                        <span className="text-semibold">Richard Vango</span>
                                                        <span className="media-annotation pull-right">Mon</span>
                                                    </a>

                                                    <span className="text-muted">Other travelling salesmen live a life of luxury...</span>
                                                </div>
                                            </li>
                                        </ul>

                                        <div className="dropdown-content-footer">
                                            <a href="#" data-popup="tooltip" title="" data-original-title="All messages"><i className="icon-menu display-block"></i></a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(NavBar)
