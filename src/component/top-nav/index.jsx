import React from 'react';
import { Link } from 'react-router-dom'
import './index.css';

class TopNav extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            isShow:true
        }
    }


    onLogout(){
        console.log('haha')
    }

    JS(selector) {
        this.dom = document.querySelector(selector)
        return this.dom;
    };

    sideToggle (){

        var isShow = this.state.isShow
        var Node = this.JS('.navbar-side')
        var Page = this.JS('#page-wrapper')
        if(isShow){
            Node.style.transform = 'translateX(-100%)'
            Page.style.margin = 'auto'
            this.setState({
                isShow :!isShow
            })
        }else{
            Node.style.transform = 'translateX(0%)'
            Page.style.margin = '0 0 0 260px'
            this.setState({
                isShow :!isShow
            })
        }



    }


    render(){
        return (
            <nav className="navbar navbar-default top-navbar">
                <div className="navbar-header">
                    {/*<button type="button" className="navbar-toggle waves-effect waves-dark" data-toggle="collapse" data-target=".sidebar-collapse">*/}
                        {/*<span className="sr-only">Toggle navigation</span>*/}
                        {/*<span className="icon-bar"></span>*/}
                        {/*<span className="icon-bar"></span>*/}
                        {/*<span className="icon-bar"></span>*/}
                    {/*</button>*/}
                    <Link className="navbar-brand waves-effect waves-dark" to="index.html">
                        <i className="large material-icons">HAPPYMMALL</i>
                        <strong>万水</strong>
                    </Link>
                <div id="sideNav" href="" onClick={()=>{this.sideToggle()}} className="">
                    <i className="material-icons dp48">toc</i>
                </div>
            </div>

            <ul className="nav navbar-top-links navbar-right">
                <li>
                    <a className="dropdown-button waves-effect waves-dark" href="#!" data-activates="dropdown1">
                        <i className="fa fa-user fa-fw"></i>
                        <b>欢迎，admin</b>
                        <i className="fa fa-caret-down"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-user">
                        <li>
                            <a onClick={()=> {this.onLogout()}}>
                                <i className="fa fa-sign-out"></i>
                                <span>退出登录</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
        )
    }
}

export default TopNav;