import React from 'react';
import './index.css'

class SideNav extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <nav className="navbar-default navbar-side" role="navigation" style={{left: '0px'}}>
                <div className="sidebar-collapse">
                    <ul className="nav" id="main-menu">
                        <li>
                            <a className="active-menu waves-effect waves-dark" href="index.html"><i className="fa fa-dashboard"></i> Dashboard</a>
                        </li>
                        <li>
                            <a href="ui-elements.html" className="waves-effect waves-dark"><i className="fa fa-desktop"></i> UI Elements</a>
                        </li>
                        <li>
                            <a href="chart.html" className="waves-effect waves-dark"><i className="fa fa-bar-chart-o"></i> Charts</a>
                        </li>
                        <li>
                            <a href="tab-panel.html" className="waves-effect waves-dark"><i className="fa fa-qrcode"></i> Tabs &amp; Panels</a>
                        </li>
                        
                        <li>
                            <a href="table.html" className="waves-effect waves-dark"><i className="fa fa-table"></i> Responsive Tables</a>
                        </li>
                        <li>
                            <a href="form.html" className="waves-effect waves-dark"><i className="fa fa-edit"></i> Forms </a>
                        </li>
                        <li>
                            <a href="#" className="waves-effect waves-dark"><i className="fa fa-sitemap"></i> Multi-Level Dropdown<span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level collapse">
                                <li>
                                    <a href="#">Second Level Link</a>
                                </li>
                                <li>
                                    <a href="#">Second Level Link</a>
                                </li>
                                <li>
                                    <a href="#">Second Level Link<span className="fa arrow"></span></a>
                                    <ul className="nav nav-third-level collapse">
                                        <li>
                                            <a href="#">Third Level Link</a>
                                        </li>
                                        <li>
                                            <a href="#">Third Level Link</a>
                                        </li>
                                        <li>
                                            <a href="#">Third Level Link</a>
                                        </li>

                                    </ul>

                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="empty.html" className="waves-effect waves-dark"><i className="fa fa-fw fa-file"></i> Empty Page</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default SideNav;