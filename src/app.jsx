import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from 'page/home/index.jsx';
import Layout from 'component/layout/index.jsx';


import { browserHistory } from 'react-router'
// const history = createMemoryHistory(location)

// const createBrowserHistory = require('history').createBrowserHistory;
//
// const app = {
//     history: createBrowserHistory()
// }
//
// let _createHashHistory = _interopRequireDefault(require('history').createHashHistory)

class App extends Component {
    constructor (props) {
        super(props)
    }
    render() {
        return (
            <Router history={browserHistory}>
                <Layout>
                    <Switch>
                        <Route exact path = "/" component = {Home}/>
                        <Redirect from="*" to="/" />
                    </Switch>
                </Layout>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));