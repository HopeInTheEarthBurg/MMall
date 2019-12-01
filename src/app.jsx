import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

class A extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                Component A
                {/* 参数是：{this.props.match.params.id} */}
                <Switch>
                    <Route path={`${this.props.match.path}`} render={(route)=>{
                        return <div>当前组件是不带参数的A</div>
                    }}/>
                    <Route path={`${route.match.path}/:id`} render={(route)=>{
                        return <div>当前组件是带参数的A，参数是：{router.match.params.id}</div>
                    }}/>
                </Switch>
            </div>
        )
    }
}

class B extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div>Component B</div>
    }
}

class Wrapper extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div>
            <Link to="/a">组件A</Link>
            <br/>
            <Link to="/a/123">带参数的组件A</Link>
            <br/>
            <Link to="/a/sub">/a/sub</Link>
            <br/>
            <Link to="/b">组件B</Link>
            {this.props.children}
        </div>
    }
}

ReactDOM.render(
    <Router>
        <Wrapper>
            <Route path="/a/" component={A}/>
            <Route path="/a/sub" component={A}/>
            <Route path="/a:id" component={A}/>
            <Route path="/b" component={B}/>
        </Wrapper>
    </Router>,
    document.getElementById('app')
);