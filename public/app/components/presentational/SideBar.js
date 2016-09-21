import React, { Component } from 'react'

var MODULE_NAME = "SideBar"

class SideBar extends Component {
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
            <div className="sidebar sidebar-main sidebar-default">
                <div className="sidebar-content">

                    {/*<!-- Main navigation -->*/}
                    <div className="sidebar-category sidebar-category-visible">
                        <div className="category-title h6">
                            <span>Main navigation</span>
                            <ul className="icons-list">
                                <li><a href="#" data-action="collapse"></a></li>
                            </ul>
                        </div>

                        <div className="category-content no-padding">
                            <ul className="navigation navigation-main navigation-accordion">

                                {/*<!-- Main -->*/}
                                <li className="navigation-header"><span>Main</span> <i className="icon-menu" title="" data-original-title="Main pages"></i></li>
                                <li><a href="../index.html"><i className="icon-home4"></i> <span>Dashboard</span></a></li>
                                <li className="active">
                                    <a href="#" className="has-ul"><i className="icon-stack"></i> <span>Starter kit</span></a>
                                    <ul>
                                        <li><a href="horizontal_nav.html">Horizontal navigation</a></li>
                                        <li><a href="1_col.html">1 column</a></li>
                                        <li><a href="2_col.html">2 columns</a></li>
                                        <li className="active">
                                            <a href="#" className="has-ul">3 columns</a>
                                            <ul>
                                                <li><a href="3_col_dual.html">Dual sidebars</a></li>
                                                <li className="active"><a href="3_col_double.html">Double sidebars</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="4_col.html">4 columns</a></li>
                                        <li><a href="layout_boxed.html">Boxed layout</a></li>
                                        <li className="navigation-divider"></li>
                                        <li><a href="layout_navbar_fixed_main.html">Fixed top navbar</a></li>
                                        <li><a href="layout_navbar_fixed_secondary.html">Fixed secondary navbar</a></li>
                                        <li><a href="layout_navbar_fixed_both.html">Both navbars fixed</a></li>
                                        <li><a href="layout_sidebar_sticky.html">Sticky sidebar</a></li>
                                    </ul>
                                </li>
                                <li><a href="../changelog.html"><i className="icon-list-unordered"></i> <span>Changelog</span></a></li>
                                {/*<!-- /main -->*/}

                            </ul>
                        </div>
                    </div>
                    {/*<!-- /main navigation -->*/}

                </div>
            </div>
        )
    }
}

export default SideBar
