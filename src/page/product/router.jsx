import React from 'react'
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'

import ProductList from 'page/product/index/index.jsx'

class ProductRouter extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount(){
    console.log('djdj')
  }
  render() {
    return (
      <Switch>
        <Route path="product/index" component={ProductList} />
        <Redirect exact from="product" to="/product/index" />
      </Switch>
    )
  }
}

export default ProductRouter