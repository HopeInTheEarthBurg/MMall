import React from 'react';
import './index.css';

class TopNav extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <nav className="navbar navbar-default top-navbar" role="navigation">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle waves-effect waves-dark" data-toggle="collapse" data-target=".sidebar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand waves-effect waves-dark" href="index.html"><i className="large material-icons">insert_chart</i> <strong>TRACK</strong></a>                  
            <div id="sideNav" href="" className=""><i className="material-icons dp48">toc</i></div>
            </div>

            <ul className="nav navbar-top-links navbar-right"> 
				<li>
                    <a className="dropdown-button waves-effect waves-dark" href="#!" data-activates="dropdown4">
                        <i className="fa fa-envelope fa-fw"></i>
                        <i className="material-icons right">arrow_drop_down</i>
                    </a>
                    {/* <ul id="dropdown4" className="dropdown-content dropdown-tasks w250">
                        <li>
                            <a href="#">
                                <div>
                                    <strong>John Doe</strong>
                                    <span className="pull-right text-muted">
                                        <em>Today</em>
                                    </span>
                                </div>
                                <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <strong>John Smith</strong>
                                    <span className="pull-right text-muted">
                                        <em>Yesterday</em>
                                    </span>
                                </div>
                                <div>Lorem Ipsum has been the industry's standard dummy text ever since an kwilnw...</div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <strong>John Smith</strong>
                                    <span className="pull-right text-muted">
                                        <em>Yesterday</em>
                                    </span>
                                </div>
                                <div>Lorem Ipsum has been the industry's standard dummy text ever since the...</div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a className="text-center" href="#">
                                <strong>Read All Messages</strong>
                                <i className="fa fa-angle-right"></i>
                            </a>
                        </li>
                    </ul> */}
                </li>				
				<li>
                    <a className="dropdown-button waves-effect waves-dark" href="#!" data-activates="dropdown3">
                        <i className="fa fa-tasks fa-fw"></i>
                        <i className="material-icons right">arrow_drop_down</i>
                    </a>
                    {/* <ul id="dropdown3" className="dropdown-content dropdown-tasks w250">
                        <li>
                            <a href="#">
                                <div>
                                    <p>
                                        <strong>Task 1</strong>
                                        <span className="pull-right text-muted">60% Complete</span>
                                    </p>
                                    <div className="progress progress-striped active">
                                        <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}>
                                            <span className="sr-only">60% Complete (success)</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <p>
                                        <strong>Task 2</strong>
                                        <span className="pull-right text-muted">28% Complete</span>
                                    </p>
                                    <div className="progress progress-striped active">
                                        <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="28" aria-valuemin="0" aria-valuemax="100" style={{width: '28%'}}>
                                            <span className="sr-only">28% Complete</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <p>
                                        <strong>Task 3</strong>
                                        <span className="pull-right text-muted">60% Complete</span>
                                    </p>
                                    <div className="progress progress-striped active">
                                        <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}>
                                            <span className="sr-only">60% Complete (warning)</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <p>
                                        <strong>Task 4</strong>
                                        <span className="pull-right text-muted">85% Complete</span>
                                    </p>
                                    <div className="progress progress-striped active">
                                        <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width: '85%'}}>
                                            <span className="sr-only">85% Complete (danger)</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                        </li>
                    </ul> */}
                </li>
                <li>
                    <a className="dropdown-button waves-effect waves-dark" href="#!" data-activates="dropdown2">
                        <i className="fa fa-bell fa-fw"></i>
                        <i className="material-icons right">arrow_drop_down</i>
                    </a>
                    {/* <ul id="dropdown2" className="dropdown-content w250">
                        <li>
                            <a href="#">
                                <div>
                                    <i className="fa fa-comment fa-fw"></i> New Comment
                                    <span className="pull-right text-muted small">4 min</span>
                                </div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i className="fa fa-twitter fa-fw"></i> 3 New Followers
                                    <span className="pull-right text-muted small">12 min</span>
                                </div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i className="fa fa-envelope fa-fw"></i> Message Sent
                                    <span className="pull-right text-muted small">4 min</span>
                                </div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i className="fa fa-tasks fa-fw"></i> New Task
                                    <span className="pull-right text-muted small">4 min</span>
                                </div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="#">
                                <div>
                                    <i className="fa fa-upload fa-fw"></i> Server Rebooted
                                    <span className="pull-right text-muted small">4 min</span>
                                </div>
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a className="text-center" href="#">
                                <strong>See All Alerts</strong>
                                <i className="fa fa-angle-right"></i>
                            </a>
                        </li>
                    </ul> */}
                </li>
                <li>
                    <a className="dropdown-button waves-effect waves-dark" href="#!" data-activates="dropdown1">
                        <i className="fa fa-user fa-fw"></i>
                        <b>John Doe</b>
                        <i className="material-icons right">arrow_drop_down</i>
                    </a>
                    {/* <ul id="dropdown1" className="dropdown-content">
                        <li><a href="#"><i className="fa fa-user fa-fw"></i> My Profile</a>
                        </li>
                        <li><a href="#"><i className="fa fa-gear fa-fw"></i> Settings</a>
                        </li> 
                        <li><a href="#"><i className="fa fa-sign-out fa-fw"></i> Logout</a>
                        </li>
                    </ul> */}
                </li>
            </ul>
        </nav>
        )
    }
}

export default TopNav;