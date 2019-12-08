import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import './index.css'

class SideNav extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="navbar-default navbar-side">
                <div className="sidebar-collapse">
                    <ul className="nav">
                        <li className="active">
                            <NavLink exact to="/" activeClassName="active-menu">
                                <i className="fa fa-dashboard"></i>
                                <span>首页</span>
                            </NavLink>
                        </li>
                        <li className="active">
                            <NavLink to="/product" activeClassName="active-menu" className="waves-effect waves-dark">
                                <i className="fa fa-sitemap"></i>
                                <span>商品</span>
                                <span className="fa arrow"></span>
                            </NavLink>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink to="/product" activeClassName="active-menu">商品管理</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/product-category" activeClassName="active-menu">品类管理</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="active">
                            <NavLink to="/order" activeClassName="active-menu" className="waves-effect waves-dark">
                                <i className="fa fa-sitemap"></i>
                                <span>订单</span>
                                <span className="fa arrow"></span>
                            </NavLink>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink to="/order" activeClassName="active-menu">订单管理</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="active">
                            <NavLink to="/user" activeClassName="active-menu" className="waves-effect waves-dark">
                                <i className="fa fa-sitemap"></i>
                                <span>用户</span>
                                <span className="fa arrow"></span>
                            </NavLink>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink to="/user" activeClassName="active-menu">用户管理</NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SideNav;