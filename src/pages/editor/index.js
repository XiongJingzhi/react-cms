import React, { Component } from 'react'
import { Card } from 'antd'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState } from 'draft-js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import './style.scss'

export default class RichEditor extends Component {
  state = {
    editorState: EditorState.createEmpty()
  }
  onEditorStateChange = (editorState) => {
    console.log('onEditorStateChange')
    this.setState({
      editorState
    })
  }
  render() {
    let { editorState } = this.state
    return (
      <div>
        <Card title="富文本编辑器">
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={this.onEditorStateChange}
          />
        </Card>
      </div>
    )
  }
}
