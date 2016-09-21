import React, { Component } from 'react'

var MODULE_NAME = "PageHeader"

class PageHeader extends Component {
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
            <div className="page-header">
                <div className="breadcrumb-line"><a className="breadcrumb-elements-toggle"><i className="icon-menu-open"></i></a>
                    <ul className="breadcrumb">
                        <li><a href="index.html"><i className="icon-home2 position-left"></i> Home</a></li>
                        <li><a href="3_col_double.html">Starters</a></li>
                        <li className="active">Double sidebars</li>
                    </ul>

                    <ul className="breadcrumb-elements">
                        <li><a href="#"><i className="icon-comment-discussion position-left"></i> Link</a></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                <i className="icon-gear position-left"></i>
                                Dropdown
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

                <div className="page-header-content">
                    <div className="page-title">
                        <h4><i className="icon-arrow-left52 position-left"></i> <span className="text-semibold">Starters</span> - Double Sidebars</h4>
                    <a className="heading-elements-toggle"><i className="icon-more"></i></a></div>

                    <div className="heading-elements">
                        <a href="#" className="btn btn-labeled btn-labeled-right bg-blue heading-btn">Button <b><i className="icon-menu7"></i></b></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageHeader
