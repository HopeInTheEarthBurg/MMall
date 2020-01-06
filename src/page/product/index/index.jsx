import React from 'react'
import { Link } from 'react-router-dom'
import MUtil from 'util/mm.jsx'
import Product from 'service/product-service.jsx'
import './index.scss'

import PageTitle from 'component/page-title/index.jsx'
import TableList from 'util/table-list/index.jsx'
import Pagination from 'util/pagination/index.jsx'

const _mm = new MUtil()
const _product = new Product()

class ProductList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      pageNum: 1
    }
  }

  componentDidMount() {
    this.loadProductList()
  }

  loadProductList() {
    _product.getProductList(this.state.pageNum).then(res => {
      this.setState(res)
    }, errMsg => {
      this.setState({
        list: []
      })
      _mm.errorTips(errMsg)
    })
  }
  
  onPageNumChange(pageNum){
    this.setState({
      pageNum
    }, () => {
      this.loadProductList()
    })
  }

  onSetProductStatus(e, currentId, currentStatus) {
    let newStatus = currentStatus == 1 ? 2 : 1,
        confirmTips = currentStatus == 1 ? '确定要下架该商品？' : '确定要上架该商品？'
    if (window.confirm(confirmTips)) {
      _product.setProductStatus({
        productId: currentId,
        status: newStatus
      }).then(res => {
        _mm.successTips(res)
        this.loadProductList()
      }, errMsg => {
        _mm.errorTips(errMsg)
      })
    }
  }

  render() {
    let tableHeads = [
      { name: '序号', width: '5%' },
      { name: '商品信息', width: '50%' },
      { name: '商品名称', width: '10%' },
      { name: '价格', width: '10%' },
      { name: '状态', width: '10%' },
      { name: '操作', width: '15%' },
    ]
    return (
      <div id="page-wrapper">
        <PageTitle title="商品列表"/>
        <TableList tableHeads={tableHeads}>
          {
            this.state.list.map((product, index) => {
              return (
                <tr key={product.id}>
                  <td>{(this.state.pageNum - 1) * this.state.pageSize + (index+1)}</td>
                  <td>{product.name}</td>
                  <td>{product.subtitle}</td>
                  <td>¥{product.price}</td>
                  <td>
                    {
                      <div style={{}}>
                        <span className="opear">{product.status == 1 ? '在售' : '已下架'}</span>
                        <button className="btn btn-xs btn-warning update-status opear"
                                onClick={ e => this.onSetProductStatus(e, product.id, product.status)}>
                          {product.status == 1 ? '下架' : '上架'}
                        </button>
                      </div>
                    }
                  </td>
                  <td>
                    <Link className="opear" to={`/product/detail/${product.id}`}>查看详情</Link>
                    <Link className="opear" to={`/product/save/${product.id}`}>编辑</Link>
                  </td>
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

export default ProductList