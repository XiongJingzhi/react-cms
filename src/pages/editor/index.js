import React, { Component } from 'react'
import { Card, Button, Modal } from 'antd'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState } from 'draft-js'
import draftjs from 'draftjs-to-html'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import './style.scss'

export default class RichEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
    showRichText: false,
    editorContent: '',
  }
  handleClearContent = () => {
    this.setState({
      editorState: null
    })
  }
  handleGetText = () => {
    this.setState({
      showRichText: true
  })
  }
  onEditorStateChange = (editorState) => {
    console.log('onEditorStateChange')
    this.setState({
      editorState
    })
  }
  onEditorChange = (editorContent) => {
    this.setState({
      editorContent
    })
  }
  render() {
    let { editorState } = this.state
    return (
      <div>
        <Card style={{marginTop:10}}>
          <Button type="primary" onClick={this.handleClearContent}>清空内容</Button>
          <Button type="primary" onClick={this.handleGetText}>获取HTML文本</Button>
        </Card>
        <Card title="富文本编辑器">
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={this.onEditorStateChange}
            onContentStateChange={this.onEditorChange}
          />
        </Card>
        <Modal
          title="富文本"
          visible={this.state.showRichText}
          onCancel={()=>{
            this.setState({
              showRichText:false
            })
          }}
          footer={null}
        >
          {draftjs(this.state.editorContent)}
        </Modal>
      </div>
    )
  }
}
