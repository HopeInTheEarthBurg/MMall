import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Mutil from 'service/user-service.jsx'
import User from 'service/user-service.jsx'
import Pagination from 'util/pagination/index.jsx'
import PageTitle from 'component/page-title/index.jsx'
import TableList from 'util/table-list/index.jsx'

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

  onPageNumChange(pageNum){
    this.setState({
      pageNum
    }, () => {
      this.loadUserList()
    })
  }

  render() {
    let tableHeads = [
      { name: '序号', width: '5%' },
      { name: 'ID', width: '10%' },
      { name: '用户名', width: '15%' },
      { name: '邮箱', width: '20%' },
      { name: '电话', width: '15%' },
      { name: '注册时间', width: '15%' }
    ]
    return (
      <div id="page-wrapper">
        <PageTitle title="用户列表"/>
        <TableList tableHeads={tableHeads}>
          {
            this.state.list.map((user, index) => {
              return (
                <tr key={user.id}>
                  <td>{(this.state.pageNum - 1) * this.state.pageSize + (index + 1)}</td>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{new Date(user.createTime).toLocaleString()}</td>
                </tr>
              )
            })
          }
        </TableList>
        <Pagination
          current={this.state.pageNum}
          total={this.state.total}
          onChange={ pageNum => { this.onPageNumChange(pageNum) } }/>
      </div>
    )
  }
}

export default Error;