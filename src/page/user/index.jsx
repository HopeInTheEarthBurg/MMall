import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Mutil from 'service/user-service.jsx'
import User from 'service/user-service.jsx'
import Pagination from 'util/pagination/index.jsx'
import PageTitle from 'component/page-title/index.jsx'

const _mm = new Mutil()
const _user = new User()

class Error extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      pageNum: 1,
      pageSize: 10,
      total: 1,
      firstLoading: true
    }
  }

  componentDidMount() {
    this.loadUserList()
  }

  loadUserList() {
    _user.getUserList(this.state.pageNum).then(res => {
      this.setState({
        list: res.list,
        total: res.total
      }, () => {
        this.setState({
          firstLoading: false
        })
      })
    },errMsg => {
      _mm.errorTips(errMsg)
    })
  }

  onPageNumChange(pageNum) {
    this.setState({
      pageNum
    }, () => {
      this.loadUserList()
    })
  }

  render() {
    let listBody = this.state.list.map((user, index) => {
        return (
          <tr key={index}>
            <td>{(this.state.pageNum - 1) * this.state.pageSize + (index+1)}</td>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{new Date(user.createTime).toLocaleString()}</td>
          </tr>
        )
      })

    let listError = (
      <tr>
        <td colSpan="6" className="text-center">
          {this.state.firstLoading ? '正在加载数据' : '没有找到相应的结果~'}
        </td>
      </tr>
    )

    let tableBody = this.state.list.length > 0 ? listBody : listError

    return (
      <div id="page-wrapper">
        <PageTitle title="用户列表"/>
        <div className="row">
          <div className="col-md-12" style={{margin: '30px',fontSize: '18px'}}>
            <table className="table table-striped table-bordered text-center">
              <thead>
                <tr>
                  <th className="text-center">序号</th>
                  <th className="text-center">ID</th>
                  <th className="text-center">用户名</th>
                  <th className="text-center">邮箱</th>
                  <th className="text-center">电话</th>
                  <th className="text-center">注册时间</th>
                </tr>
              </thead>
              <tbody>
                {tableBody}
              </tbody>
            </table>
          </div>
        </div>
        <Pagination
          current={this.state.pageNum}
          total={this.state.total}
          onChange={ pageNum => { this.onPageNumChange(pageNum) } }/>
      </div>
    )
  }
}

export default Error;