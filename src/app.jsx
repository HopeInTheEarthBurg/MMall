import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Layout from 'component/layout/index.jsx';

import Home from 'page/home/index.jsx';
import Login from 'page/login/index.jsx';
import Error from 'page/error/index.jsx'
import UserList from 'page/user/index.jsx'
import ProductRouter from 'page/product/router.jsx'
import ProductList from 'page/product/index/index.jsx'

class App extends Component {
    constructor (props) {
        super(props)
    }
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/" render = { props => (
                        <Layout>
                            <Switch>
                                <Route exact path = "/" component = {Home} />
                                <Route path="/product/index" component={ProductList} />
                                {/* <Route path="/product" component={ProductRouter} /> */}
                                <Route path="/product.category" component={Error} />
                                <Route path="/user/index" component={UserList} />
                                <Redirect exact from="/user" to="/user/index" />
                                <Redirect exact from="/product" to="/product/index" />
                                <Route component={Error} />
                            </Switch>
                        </Layout>
                    )} />
                </Switch>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));