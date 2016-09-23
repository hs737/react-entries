import React, { Component } from 'react'

var MODULE_NAME = "EntriesSidebar"

class EntriesSidebar extends Component {
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
            <div className="sidebar sidebar-opposite sidebar-default">
                <div className="sidebar-content">

                    {/*<!-- Sidebar search -->*/}
                    <div className="sidebar-category">
                        <div className="category-title">
                            <span>Search</span>
                            <ul className="icons-list">
                                <li><a href="#" data-action="collapse"></a></li>
                            </ul>
                        </div>

                        <div className="category-content">
                            <form action="#">
                                <div className="has-feedback has-feedback-left">
                                    <input type="search" className="form-control" placeholder="Search" />
                                    <div className="form-control-feedback">
                                        <i className="icon-search4 text-size-base text-muted"></i>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/*<!-- /sidebar search -->*/}


                    {/*<!-- Sub navigation -->*/}
                    <div className="sidebar-category">
                        <div className="category-title">
                            <span>Navigation</span>
                            <ul className="icons-list">
                                <li><a href="#" data-action="collapse"></a></li>
                            </ul>
                        </div>

                        <div className="category-content no-padding">
                            <ul className="navigation navigation-alt navigation-accordion">
                                <li className="navigation-header">Category title</li>
                                <li><a href="#"><i className="icon-googleplus5"></i> Link</a></li>
                                <li><a href="#"><i className="icon-googleplus5"></i> Another link</a></li>
                                <li><a href="#"><i className="icon-portfolio"></i> Link with label <span className="label bg-success-400">Online</span></a></li>
                                <li className="navigation-divider"></li>
                                <li>
                                    <a href="#" className="has-ul"><i className="icon-cog3"></i> Menu levels</a>
                                    <ul className="hidden-ul">
                                        <li><a href="#"><i className="icon-IE"></i> Second level</a></li>
                                        <li>
                                            <a href="#" className="has-ul"><i className="icon-firefox"></i> Second level with child</a>
                                            <ul className="hidden-ul">
                                                <li><a href="#"><i className="icon-android"></i> Third level</a></li>
                                                <li>
                                                    <a href="#" className="has-ul"><i className="icon-apple2"></i> Third level with child</a>
                                                    <ul className="hidden-ul">
                                                        <li><a href="#"><i className="icon-html5"></i> Fourth level</a></li>
                                                        <li><a href="#"><i className="icon-css3"></i> Fourth level</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#"><i className="icon-windows"></i> Third level</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#"><i className="icon-chrome"></i> Second level</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/*<!-- /sub navigation -->*/}


                    {/*<!-- Form sample -->*/}
                    <div className="sidebar-category">
                        <div className="category-title">
                            <span>Form example</span>
                            <ul className="icons-list">
                                <li><a href="#" data-action="collapse"></a></li>
                            </ul>
                        </div>

                        <form action="#" className="category-content">
                            <div className="form-group">
                                <label>Your name:</label>
                                <input type="text" className="form-control" placeholder="Username" />
                            </div>

                            <div className="form-group">
                                <label>Your password:</label>
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>

                            <div className="form-group">
                                <label>Your message:</label>
                                <textarea rows="3" cols="3" className="form-control" placeholder="Default textarea"></textarea>
                            </div>

                            <div className="row">
                                <div className="col-xs-6">
                                    <button type="reset" className="btn btn-danger btn-block">Reset</button>
                                </div>
                                <div className="col-xs-6">
                                    <button type="submit" className="btn btn-info btn-block">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/*<!-- /form sample -->*/}

                </div>
            </div>
        )
    }
}

export default EntriesSidebar
