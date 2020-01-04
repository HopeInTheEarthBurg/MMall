import React from 'react'
import Pagination from 'rc-pagination'
import 'rc-pagination/dist/rc-pagination.min.css'

class RcPagination extends React.Component {
  
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <Pagination {...this.props} hideOnSinglePage showQuickJumper />
        </div>
      </div>
    )
  }
}

export default RcPagination