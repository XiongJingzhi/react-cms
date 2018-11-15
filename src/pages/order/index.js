import React, { Component } from 'react'
import { Card, Button } from 'antd'

export default class Order extends Component {
  render() {
    return (
      <div>
        <Card title="订单管理">
          <Button>订单管理</Button>
          <p>我是订单管理</p>
        </Card>
      </div>
    )
  }
}