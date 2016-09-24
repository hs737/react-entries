import React, { Component } from 'react'

var MODULE_NAME = "Panel"

class Panel extends Component {
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

        var heading = null;
        if (this.props.headingDetails != null) {
            heading = (
                <div className="panel-heading">
                    <h5 className="panel-title">{this.props.headingDetails.title}<a className="heading-elements-toggle"><i className="icon-more"></i></a></h5>
                    <div className="heading-elements">
                        <ul className="icons-list">
                            <li><a data-action="collapse"></a></li>
                            <li><a data-action="close"></a></li>
                        </ul>
                    </div>
                </div>
            )
        }

        return (
            <div className="panel panel-flat">
                {heading}
                <div className="panel-body">
                    {this.props.panelBody}
                </div>
            </div>
        )
    }
}

export default Panel
