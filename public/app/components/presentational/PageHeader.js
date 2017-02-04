import React, { Component } from 'react'

var MODULE_NAME = "PageHeader"

class PageHeader extends Component {
    constructor(props, context, updater) {
        var functionName = "constructor"
        console.log(MODULE_NAME, functionName + " called")

        super(props, context, updater)

        console.log(MODULE_NAME, functionName, "props", this.props)
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

        var profileName = null

        if (this.props.profileDetails != null) {
            var profileName = this.props.profileDetails.name
        }

        return (
            <div className="page-header page-header-default">
            {/* <!-- Page header --> */}
            
                <div className="page-header-content">
                    <div className="page-title">
                        <h4><i className="icon-arrow-left52 position-left"></i> <span className="text-semibold">Home</span> - Dashboard</h4>
                    </div>

                    <div className="heading-elements">
                        <div className="heading-btn-group">
                            <a href="#" className="btn btn-link btn-float text-size-small has-text"><i className="icon-bars-alt text-primary"></i><span>Statistics</span></a>
                            <a href="#" className="btn btn-link btn-float text-size-small has-text"><i className="icon-calculator text-primary"></i> <span>Invoices</span></a>
                            <a href="#" className="btn btn-link btn-float text-size-small has-text"><i className="icon-calendar5 text-primary"></i> <span>Schedule</span></a>
                        </div>
                    </div>
                </div>

                <div className="breadcrumb-line">
                    <ul className="breadcrumb">
                        <li><a href="index.html"><i className="icon-home2 position-left"></i> Home</a></li>
                        <li className="active">Dashboard</li>
                    </ul>

                    <ul className="breadcrumb-elements">
                        <li><a href="#"><i className="icon-comment-discussion position-left"></i> Support</a></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <i className="icon-gear position-left"></i>
                                Settings
                                <span className="caret"></span>
                            </a>

                            <ul className="dropdown-menu dropdown-menu-right">
                                <li><a href="#"><i className="icon-user-lock"></i> Account security</a></li>
                                <li><a href="#"><i className="icon-statistics"></i> Analytics</a></li>
                                <li><a href="#"><i className="icon-accessibility"></i> Accessibility</a></li>
                                <li className="divider"></li>
                                <li><a href="#"><i className="icon-gear"></i> All settings</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

            {/* <!-- /page header --> */}
            </div>
        )
    }
}

export default PageHeader
