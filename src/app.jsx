import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from 'page/home/index.jsx';
import Layout from 'component/layout/index.jsx';
import Login from 'page/login/index.jsx';



// import { createBrowserHistory } from 'history';
// export default createBrowserHistory()

import { browserHistory } from 'react-router'
// const history = createMemoryHistory(location)

// const createBrowserHistory = require('history').createBrowserHistory;
//
// const app = {
//     history: createBrowserHistory()
// }
//
// let _createHashHistory = _interopRequireDefault(require('history').createHashHistory)


// import { createBrowserHistory } from 'history';
// export default createBrowserHistory()



class App extends Component {
    constructor (props) {
        super(props)
    }
    render() {
        return (
            <Router history={browserHistory}>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/" render = { props => (
                        <Layout>
                        <Switch>
                            <Route exact path = "/" component = {Home}/>
                            <Route path="/product" component={Home}/>
                            <Route path="/product.category" component={Home}/>
                        </Switch>
                    </Layout>
                    )} />
                </Switch>
                
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));