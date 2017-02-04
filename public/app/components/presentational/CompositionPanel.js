import React, { Component } from 'react'

const MODULE_NAME = "CompositionPanel"

class CompositionPanel extends Component {
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
        const functionName = "render"
        console.log(MODULE_NAME, functionName + " called", this.props)

        return (
            <div className="panel panel-flat">
            {/* <!-- Traffic sources --> */}

                <div className="panel-heading">
                    <h6 className="panel-title">Traffic sources</h6>
                    <div className="heading-elements">
                        <form className="heading-form" action="#">
                            <div className="form-group">
                                <label className="checkbox-inline checkbox-switchery checkbox-right switchery-xs">
                                    <input type="checkbox" className="switch" checked="checked" />
                                    Live update:
                                </label>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4">
                            <ul className="list-inline text-center">
                                <li>
                                    <a href="#" className="btn border-teal text-teal btn-flat btn-rounded btn-icon btn-xs valign-text-bottom"><i className="icon-plus3"></i></a>
                                </li>
                                <li className="text-left">
                                    <div className="text-semibold">New visitors</div>
                                    <div className="text-muted">2,349 avg</div>
                                </li>
                            </ul>

                            <div className="col-lg-10 col-lg-offset-1">
                                <div className="content-group" id="new-visitors"></div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <ul className="list-inline text-center">
                                <li>
                                    <a href="#" className="btn border-warning-400 text-warning-400 btn-flat btn-rounded btn-icon btn-xs valign-text-bottom"><i className="icon-watch2"></i></a>
                                </li>
                                <li className="text-left">
                                    <div className="text-semibold">New sessions</div>
                                    <div className="text-muted">08:20 avg</div>
                                </li>
                            </ul>

                            <div className="col-lg-10 col-lg-offset-1">
                                <div className="content-group" id="new-sessions"></div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <ul className="list-inline text-center">
                                <li>
                                    <a href="#" className="btn border-indigo-400 text-indigo-400 btn-flat btn-rounded btn-icon btn-xs valign-text-bottom"><i className="icon-people"></i></a>
                                </li>
                                <li className="text-left">
                                    <div className="text-semibold">Total online</div>
                                    <div className="text-muted"><span className="status-mark border-success position-left"></span> 5,378 avg</div>
                                </li>
                            </ul>

                            <div className="col-lg-10 col-lg-offset-1">
                                <div className="content-group" id="total-online"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="position-relative" id="traffic-sources"></div>

            {/* <!-- /traffic sources --> */}
            </div>
        )
    }
}

export default CompositionPanel 