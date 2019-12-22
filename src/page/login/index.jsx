import React from 'react';
import MUtil from 'util/mm.jsx';
import User from 'service/user-service.jsx';
const _mm = new MUtil();
const _user = new User();
import './index.less';

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            redirect: _mm.getUrlParam('redirect') || '/'
        }
    }

    componentWillMount() {
        document.title = '登录-MMall'
    }

    onInputChange(e){
        let inputValue = e.target.value,
            inputName = e.target.name
            // console.log(inputName,inputValue)
        this.setState({
            [inputName]: inputValue,
        })
    }

    onInputKeyUp(e) {
        if (e.keyCode === 13) {
            this.onSubmit()
        }
    }

    onSubmit(){
        // _mm.request({
        //     url: 'http://www.baidu.com'
        // })

        // _mm.request({
        //     type: 'post',
        //     url: '/manage/user/login.do',
        //     data: {
        //         username: this.state.username,
        //         password: this.state.password
        //     }
        // }).then((res) => {

        // },(err) => {

        // })

        let loginInfo = {
                username: this.state.username,
                password: this.state.password
            },
            checkResult = _user.checkLoginInfo(loginInfo);
        if (checkResult.status) {
            _user.login(loginInfo).then((res) => {
                _mm.setStorage('userInfo', res)
                this.props.history.push(this.state.redirect)
            },(errMsg) => {
                _mm.errorTips(errMsg)
            })
        } else {
            _mm.errorTips(checkResult.msg)
        }
        
        // _user.login({
        //     username: this.state.username,
        //     password: this.state.password
        // }).then((res) => {
        //     // console.log(this.state.redirect)
        //     this.props.history.push(this.state.redirect)
        // },(errMsg) => {
        //     _mm.errorTips(errMsg)
        // })
    }

    render(){
        return (
            <div className="login-container">
                <div className="panel panel-default login-panel">
                    <div className="panel-heading">欢迎登陆-MMALL管理系统</div>
                    <div className="panel-body">
                        <div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">用户名</label>
                                <input type="text" 
                                    className="form-control" 
                                    placeholder="请输入用户名"
                                    onKeyUp={e => this.onInputKeyUp(e)}
                                    onChange={e => this.onInputChange(e)}
                                    name="username"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">密码</label>
                                <input type="password" className="form-control" placeholder="请输入密码"
                                    onChange={e => this.onInputChange(e)}
                                    onKeyUp={e => this.onInputKeyUp(e)}
                                    name="password"/>
                            </div>
                            <button className="btn btn-lg btn-block btn-primary"
                                onClick={e => this.onSubmit(e)}>登录</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;