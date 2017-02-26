import React, { Component } from 'react'

const MODULE_NAME = "CompositionHeading"

class CompositionHeading extends Component {
    constructor(props, context, updater) {
        const functionName = "constructor"
        console.log(MODULE_NAME, functionName + " called")

        super(props, context, updater)

        console.log(MODULE_NAME, functionName, "props", this.props)

        this.state = {}
    }

    componentWillMount() {
        const functionName = "componentWillMount"
        console.log(MODULE_NAME, functionName + " called")
    }

    componentDidMount() {
        const functionName = "componentDidMount"
        console.log(MODULE_NAME, functionName + " called")
    }

    componentWillUnmount() {
        const functionName = "componentWillUnmount"
        console.log(MODULE_NAME, functionName + " called")
    }

    componentWillReceiveProps(nextProps) {
        const functionName = "componentWillReceiveProps"
        console.log(MODULE_NAME, functionName + " called", nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        const functionName = "shouldComponentUpdate"
        console.log(MODULE_NAME, functionName + " called", nextProps, nextState)

        return true
    }

    componentWillUpdate(nextProps, nextState) {
        const functionName = "componentWillUpdate"
        console.log(MODULE_NAME, functionName + " called", nextProps, nextState)
    }

    componentDidUpdate(prevProps, prevState) {
        const functionName = "componentDidUpdate"
        console.log(MODULE_NAME, functionName + " called", prevProps, prevState)
    }

    render() {
        const functionName = "render";
        console.log(MODULE_NAME, functionName + " called", this.props);

        return (
            <div className="panel-heading">
                <h6 className="panel-title">Marketing campaigns</h6>
                {/*
                <div className="heading-elements">
                    <span className="label bg-success heading-text">28 active</span>
                    <ul className="icons-list">
                        <li><a data-action="collapse"></a></li>
                        <li><a data-action="custom_edit"></a></li>
                        <li><a data-action="custom_close" onClick={(e) => { this.props.removeEntry(this.props.id) }}></a></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon-menu7"></i> <span className="caret"></span></a>
                            <ul className="dropdown-menu dropdown-menu-right">
                                <li><a href="#"><i className="icon-sync"></i> Update data</a></li>
                                <li><a href="#"><i className="icon-list-unordered"></i> Detailed log</a></li>
                                <li><a href="#"><i className="icon-pie5"></i> Statistics</a></li>
                                <li className="divider"></li>
                                <li><a href="#"><i className="icon-cross3"></i> Clear list</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                        */}
            </div>
        )
    }

}

export default CompositionHeading;