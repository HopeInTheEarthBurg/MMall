import React from 'react';
import MUtil from 'util/mm.jsx';
const _mm = new MUtil();
import './index.less';

class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }

    onInputChange(e){
        let inputValue = e.target.value;
            inputName = e.target.name;
        console.log(inputName,inputValue)
        this.setState({
            [inputName]: inputValue,
        })
    }

    onSubmit(){
        _mm.request({
            url: 'http://www.baidu.com'
        }).then((res) => {

        },)
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
                                <input type="text" className="form-control" placeholder="请输入用户名"
                                    onChange={e => this.onInputChange(e)}
                                    name="username"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">密码</label>
                                <input type="password" className="form-control" placeholder="请输入密码"
                                    onChange={e => this.onInputChange(e)}
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