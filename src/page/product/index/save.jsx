import React from 'react'
import MUtil from 'util/mm.jsx'
import Product from 'service/product-service.jsx'
import PageTitle from 'component/page-title/index.jsx'
import CategorySelector from './category-selector.jsx'
import FileUpload from 'util/file-uploader/index.jsx'
import RichEditor from 'util/rich-editor/index.jsx'

const _mm = new MUtil()
const _product = new Product()

class ProductSave extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.location.pathname.slice(14),  //this.props.match.params.pid 为什么是空对象
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
        res.defaultDetail = res.detail
        this.setState(res)
      }, errMsg => {
        _mm.errorTips(errMsg)
      })
    }
  }

  onValueChange(e) {
    let name = e.target.name,
        value = e.target.value.trim()
    this.setState({
      [name]: value
    })
  }

  onCategoryChange(categoryId, parentCategoryId) {
    this.setState({
      categoryId: categoryId,
      parentCategoryId: parentCategoryId
    })
  }

  onUploadSuccess(res) {
    let subImages = this.state.subImages
    subImages.push(res)
    this.setState({
      subImages: subImages
    })
  }

  onUploadError(errorMsg) {
    _mm.errorTips(errorMsg)
  }

  onImageDelete(e) {
    let index = parseInt(e.target.getAttribute(index)),
        subImages = this.state.subImages
    subImages.splice(index, 1)
    this.setState({
      subImages: subImages
    })
  }

  onRichEditorChange(value) {
    this.setState({
      detail: value
    })
  }

  getSubImagesString() {
    return this.state.subImages.map(image => image.uri).join(',')
  }

  onSubmit() {
    let product = {
      name: this.state.name,
      subtitle: this.state.subtitle,
      categoryId: parseInt(this.state.categoryId),
      subImages: this.getSubImagesString(),
      detail: this.state.detail,
      price: parseFloat(this.state.price),
      stock: parseInt(this.state.stock),
      status: this.state.status
    },
    productCheckResult = _product.checkProduct(product)
    if (this.state.id) {
      product.id = this.state.id
    }
    //表单验证成功
    if (productCheckResult.status) {
      _product.saveProduct(product).then(res => {
        _mm.successTips(res)
        this.props.history.push('/product/index')
      }, errMsg => {
        _mm.errorTips(errMsg)
      })
    }else {
      _mm.errorTips(productCheckResult.msg)
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
              <input type="text" className="form-control" placeholder="请输入商品名称"
                name="name"
                value={this.state.name}
                onChange={e => this.onValueChange(e)}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">商品描述</label>
            <div className="col-md-3">
              <input type="text" className="form-control" placeholder="请输入商品描述"
                name="subtitle"
                value={this.state.subtitle}
                onChange={e => this.onValueChange(e)}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">所属分类</label>
            <CategorySelector 
              categoryId={this.state.categoryId}
              parentCategoryId={this.state.parentCategoryId}
              onCategoryChange={(categoryId, parentCategoryId) => {
              this.onCategoryChange(categoryId, parentCategoryId)
            }}/>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">商品价格</label>
            <div className="col-md-2">
              <div className="input-group">
                <input type="number" className="form-control" placeholder="价格"
                  name="price"
                  value={this.state.price}
                  onChange={e => this.onValueChange(e)}/>
                <span className="input-group-addon">元</span>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">商品库存</label>
            <div className="col-md-2">
              <div className="input-group">
                <input type="number" className="form-control" placeholder="库存"
                  name="stock"
                  value={this.state.stock}
                  onChange={e => this.onValueChange(e)}/>
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
                    <i className="fa fa-close" index={index} onClick={e => this.onImageDelete(e)}></i>
                  </div>
                ) : (<div>请上传图片</div>)
              }
            </div>
            <div className="col-md-10 col-md-offset-2 file-upload-con">
              <FileUpload onSuccess={res => this.onUploadSuccess(res)} onError={errorMsg => this.onUploadError(errorMsg)}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">商品详情</label>
            <div className="col-md-10">
              <RichEditor 
                value={this.state.detail}
                defaultDetail={this.state.defaultDetail}
                onValueChange={value => this.onRichEditorChange(value)}/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-offset-2 col-md-10">
              <button type="submit" className="btn btn-primary" onClick={e => this.onSubmit(e)}>提交</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductSave