import React, { Component } from 'react'
import { Card, Button, message } from 'antd'
import '../style.scss'

export default class Messages extends Component {
  showMessage = type => {
    message[type](`${type}`, 1 , () => {
      console.log('close callback')
    })
  }
  render() {
    return (
      <div>
        <Card title="Messages" className="card-wrap">
          <Button type="primary" onClick={()=>this.showMessage('success')}>Success</Button>
          <Button type="primary" onClick={()=>this.showMessage('error')}>Error</Button>
          <Button type="primary" onClick={()=>this.showMessage('info')}>Info</Button>
          <Button type="primary" onClick={()=>this.showMessage('warning')}>Warning</Button>
        </Card>
      </div>
    )
  }
}