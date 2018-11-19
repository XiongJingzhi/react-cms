import React, { Component } from 'react'
import { Card, Button, notification } from 'antd'
import '../style.scss'

export default class ENotification extends Component {
  openNotification = (type, direction) => {
    console.log('this', this)
    console.log('type', type, 'direction', direction)
    if (direction) {
      notification.config({
        placement: direction
      })
    }
    notification[type]({
      message: `type: ${type}`,
      description:
        `direction: ${direction}`,
      duration: 2
    })
  }
  render() {
    return (
      <div>
        <Card title="通知 Notification" className="card-wrap">
        {/* 此处传参，使用的是闭包，本来onclick函数没有参数，
        要调用参数就只能写在内部，传递了this*/}
          <Button type="primary" onClick={() => this.openNotification('success')} >
            Success
          </Button>
          <Button type="primary" onClick={() => this.openNotification('info')}>
            Info
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotification('warning')}
          >
            Warning
          </Button>
          <Button type="primary" onClick={() => this.openNotification('error')}>
            Error
          </Button>
        </Card>

        <Card title="通知提醒框反向" className="card-wrap">
          <Button
            type="primary"
            onClick={() => this.openNotification('success', 'topLeft')}
          >
            Success
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotification('info', 'topRight')}
          >
            Info
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotification('warning', 'bottomLeft')}
          >
            Warning
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotification('error', 'bottomRight')}
          >
            Error
          </Button>
        </Card>
      </div>
    )
  }
}
