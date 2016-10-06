import React, { Component } from 'react'

var MODULE_NAME = "Login"

var fieldEnum = {
    USERNAME: "username",
    PASSWORD: "password",
    EMAIL: "email"
}

var submitEnum = {
    REGISTER: "register",
    SIGNIN: "signin"
}

class Login extends Component {
    constructor(props, context, updater) {
        var functionName = "constructor"
        console.log(MODULE_NAME, functionName + " called")

        super(props, context, updater)

        console.log(MODULE_NAME, functionName, "props", this.props)

        this.state = {
            username: '',
            password: '',
            email: ''
        }

        this.handleFieldUpdate = this.handleFieldUpdate.bind(this)
        this.handlLoginSubmit = this.handlLoginSubmit.bind(this)
    }

    handleFieldUpdate(fieldType, event) {
        var functionName = "handleFieldUpdate"
        console.log(MODULE_NAME, functionName + " called", fieldType, event.target.value)

        var newState = Object.assign({}, this.state)

        switch (fieldType) {
            case fieldEnum.USERNAME:
                newState.username = event.target.value
                break;
            case fieldEnum.PASSWORD:
                newState.password = event.target.value
                break;
            case fieldEnum.EMAIL:
                newState.email = event.target.value
                break;
            default:
                console.log("Cannot recognize field value:", fieldType)
        }

        this.setState(newState)
    }

    handlLoginSubmit(submitType, event) {
        var functionName = "handlLoginSubmit"
        console.log(MODULE_NAME, functionName + " called", event.target.name,
                    submitType,
                    this.state.username,
                    this.state.password,
                    this.state.email)

        event.preventDefault();

        if (this.state.username == null
            || this.state.username.length == 0) {
            // TODO Error handle this better
            console.log("Error: Invalid username entered", username)
        } else if (this.state.password != null
            && this.state.password.length > 0) {
            // TODO Error handle this better
            console.log("Error: Invalid password entered", password)
        }

        if (submitType === submitEnum.SIGNIN) {

        } else if (submitType === submitEnum.REGISTER
                   && this.state.email != null
                   && this.state.email.length > 0) {

        } else {
            console.log("Cannot recognize field value:", fieldType)
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

        return (
            <div className="tabbable panel login-form width-400">
                <ul className="nav nav-tabs nav-justified">
                    <li className="active"><a href="#basic-tab1" data-toggle="tab"><h6>Sign in</h6></a></li>
                    <li><a href="#basic-tab2" data-toggle="tab"><h6>Register</h6></a></li>
                </ul>

                <div className="tab-content panel-body">
                    <div className="tab-pane fade in active" id="basic-tab1">

                            <div className="text-center">
                                <div className="icon-object border-slate-300 text-slate-300"><i className="icon-reading"></i></div>
                                <h5 className="content-group">Login to your account <small className="display-block">Your credentials</small></h5>
                            </div>

                            <div className="form-group has-feedback has-feedback-left">
                                <input type="text" className="form-control" placeholder="Username" name="username" required="required" value={this.state.username} onChange={(e) => this.handleFieldUpdate(fieldEnum.USERNAME, e)} />
                                <div className="form-control-feedback">
                                    <i className="icon-user text-muted"></i>
                                </div>
                            </div>

                            <div className="form-group has-feedback has-feedback-left">
                                <input type="password" className="form-control" placeholder="Password" name="password" required="required" value={this.state.password} onChange={(e) => this.handleFieldUpdate(fieldEnum.PASSWORD, e)} />
                                <div className="form-control-feedback">
                                    <i className="icon-lock2 text-muted"></i>
                                </div>
                            </div>

                            <div className="form-group login-options">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label className="checkbox-inline">
                                            <input type="checkbox" className="styled" checked="checked" />
                                            Remember
                                        </label>
                                    </div>

                                    <div className="col-sm-6 text-right">
                                        <a href="login_password_recover.html">Forgot password?</a>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn bg-blue btn-block" onClick={(e) => this.handlLoginSubmit(submitEnum.SIGNIN, e)}>Login <i className="icon-arrow-right14 position-right"></i></button>
                            </div>


                        <div className="content-divider text-muted form-group"><span>or sign in with</span></div>
                        <ul className="list-inline form-group list-inline-condensed text-center">
                            <li><a href="#" className="btn border-indigo text-indigo btn-flat btn-icon btn-rounded"><i className="icon-facebook"></i></a></li>
                            <li><a href="#" className="btn border-pink-300 text-pink-300 btn-flat btn-icon btn-rounded"><i className="icon-dribbble3"></i></a></li>
                            <li><a href="#" className="btn border-slate-600 text-slate-600 btn-flat btn-icon btn-rounded"><i className="icon-github"></i></a></li>
                            <li><a href="#" className="btn border-info text-info btn-flat btn-icon btn-rounded"><i className="icon-twitter"></i></a></li>
                        </ul>

                        <span className="help-block text-center no-margin">By continuing, you're confirming that you've read our <a href="#">Terms &amp; Conditions</a> and <a href="#">Cookie Policy</a></span>
                    </div>

                    <div className="tab-pane fade" id="basic-tab2">

                            <div className="text-center">
                                <div className="icon-object border-success text-success"><i className="icon-plus3"></i></div>
                                <h5 className="content-group">Create new account <small className="display-block">All fields are required</small></h5>
                            </div>

                            <div className="form-group has-feedback has-feedback-left">
                                <input type="text" className="form-control" placeholder="Your username" value={this.state.username} onChange={(e) => this.handleFieldUpdate(fieldEnum.USERNAME, e)} />
                                <div className="form-control-feedback">
                                    <i className="icon-user-check text-muted"></i>
                                </div>
                            </div>

                            <div className="form-group has-feedback has-feedback-left">
                                <input type="password" className="form-control" placeholder="Create password" value={this.state.password} onChange={(e) => this.handleFieldUpdate(fieldEnum.PASSWORD, e)} />
                                <div className="form-control-feedback">
                                    <i className="icon-user-lock text-muted"></i>
                                </div>
                            </div>

                            <div className="form-group has-feedback has-feedback-left">
                                <input type="text" className="form-control" placeholder="Your email" value={this.state.email} onChange={(e) => this.handleFieldUpdate(fieldEnum.EMAIL, e)} />
                                <div className="form-control-feedback">
                                    <i className="icon-mention text-muted"></i>
                                </div>
                            </div>
                            {/*
                            <div className="content-divider text-muted form-group"><span>Additions</span></div>

                            <div className="form-group">
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" className="styled" checked="checked" />
                                        Send me <a href="#">test account settings</a>
                                    </label>
                                </div>

                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" className="styled" checked="checked" />
                                        Subscribe to monthly newsletter
                                    </label>
                                </div>

                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" className="styled" />
                                        Accept <a href="#">terms of service</a>
                                    </label>
                                </div>
                            </div>
                            */}

                            <button type="submit" className="btn bg-indigo-400 btn-block" onClick={(e) => this.handlLoginSubmit(submitEnum.REGISTER, e)}>Register <i className="icon-circle-right2 position-right"></i></button>

                    </div>
                </div>
            </div>
        )
    }
}

export default Login
