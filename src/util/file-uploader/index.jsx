import React from 'react'
import FileUpload from './FileUpload.jsx';

class FileUploader extends React.Component {
  render(){
    const options={
      baseUrl:'/manage/product/upload.do',
      fileFieldName: 'upload_file',
      dataType: 'json',
      chooseAndUpload: true,
      uploadSuccess: res => {
        this.props.onSuccess(res.data)
      },
      uploadError: error => {
        this.props.onError(error.message || '上传图片出错啦～')
      }
    }
    return (
      <FileUpload options={options}>
        <button className="btn btn-default btn-xs" ref="chooseAndUpload">请选择图片</button>
      </FileUpload>
    )	        
  }
}

export default FileUploader