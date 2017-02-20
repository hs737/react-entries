import React, { Component } from 'react';

import SideBar from './SideBar';
import PageHeader from './PageHeader';
import CompositionPanelContainer from '../container/CompositionPanelContainer';

const MODULE_NAME = "PageContent";

class PageContent extends Component {
    constructor(props, context, updater) {
        const functionName = "constructor";
        console.log(MODULE_NAME, functionName + " called");

        super(props, context, updater);

        console.log(MODULE_NAME, functionName, "props", this.props);

        this.state = {};
    }

    componentWillMount() {
        const functionName = "componentWillMount";
        console.log(MODULE_NAME, functionName + " called");
    }

    componentDidMount() {
        const functionName = "componentDidMount";
        console.log(MODULE_NAME, functionName + " called");
    }

    componentWillUnmount() {
        const functionName = "componentWillUnmount";
        console.log(MODULE_NAME, functionName + " called");
    }

    componentWillReceiveProps(nextProps) {
        const functionName = "componentWillReceiveProps";
        console.log(MODULE_NAME, functionName + " called", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        const functionName = "shouldComponentUpdate";
        console.log(MODULE_NAME, functionName + " called", nextProps, nextState);

        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        const functionName = "componentWillUpdate";
        console.log(MODULE_NAME, functionName + " called", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        const functionName = "componentDidUpdate";
        console.log(MODULE_NAME, functionName + " called", prevProps, prevState);
    }

    render() {
        const functionName = "render";
        console.log(MODULE_NAME, functionName + " called", this.props);

        return (
            <div className="page-container">
                {/* <!-- Page container --> */}

                {/* <!-- Page content --> */}
                <div className="page-content">
                    <SideBar />

                    {/* <!-- Main content --> */}
                    <div className="content-wrapper">

                        <PageHeader />


                        {/* <!-- Content area --> */}
                        <div className="content">

                            <CompositionPanelContainer />
                            {/*<EntriesPanelContainer />*/}

                            {/* <!-- Footer --> */}
                            <div className="footer text-muted">
                                &copy; 2015. <a href="#">Limitless Web App Kit</a> by <a href="http://themeforest.net/user/Kopyov" target="_blank">Eugene Kopyov</a>
                            </div>
                            {/* <!-- /footer --> */}

                        </div>
                        {/* <!-- /content area --> */}

                    </div>
                    {/* <!-- /main content --> */}

                </div>
                {/* <!-- /page content --> */}

                {/* <!-- /page container --> */}
            </div>

        );
    };
};

export default PageContent;
