import React from 'react'
import MUtil from 'util/mm.jsx'
import Product from 'service/product-service.jsx'
import PageTitle from 'component/page-title/index.jsx'
import CategorySelector from './category-selector.jsx'

const _mm = new MUtil()
const _product = new Product()

class ProductDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.location.pathname.slice(16),  //this.props.match.params.pid 为什么是空对象
      categoryId: 0,
      parentCategoryId: 0,
      subImages: [],
      name: '',
      subtitle: '',
      price: '',
      stock: '',
      detail: '',
      status: 1   // 商品状态在售
    }
  }

  componentDidMount() {
    this.loadProduct()
  }

  loadProduct() {
    //有id为编辑，表单回填
    if (this.state.id) {
      _product.getProduct(this.state.id).then(res => {
        let images = res.subImages.split(',')
        res.subImages = images.map(imgUri => {
          return {
            uri: imgUri,
            url: res.imageHost + imgUri
          }
        })
        this.setState(res)
      }, errMsg => {
        _mm.errorTips(errMsg)
      })
    }
  }

  render() {
    return (
      <div id="page-wrapper">
        <PageTitle title="添加商品"/>
        <div className="form-horizontal">
          <div className="form-group">
            <label className="col-sm-2 control-label">商品名称</label>
            <div className="col-md-3">
              <p className="form-control-static">{this.state.name}</p>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">商品描述</label>
            <div className="col-md-3">
              <p className="form-control-static">{this.state.subtitle}</p>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">所属分类</label>
            <CategorySelector 
              readOnly
              categoryId={this.state.categoryId}
              parentCategoryId={this.state.parentCategoryId}/>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">商品价格</label>
            <div className="col-md-2">
              <div className="input-group">
                <input type="number" className="form-control"
                  readOnly
                  value={this.state.price}/>
                <span className="input-group-addon">元</span>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">商品库存</label>
            <div className="col-md-2">
              <div className="input-group">
                <input type="number" className="form-control"
                  readOnly
                  value={this.state.stock}/>
                <span className="input-group-addon">件</span>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">图片上传</label>
            <div className="col-md-10">
              {
                this.state.subImages ? this.state.subImages.map((image, index) =>
                  <div className="img-con" key={index}>
                    <img src={image.url} alt=""/>
                  </div>
                ) : (<div>暂无图片</div>)
              }
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">商品详情</label>
            <div className="col-md-10" dangrouslysetinnerhtml={{__html: this.state.detail}}>
              <div>{this.state.detail}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductDetail