import React, { Component } from 'react'
import { Card, Button } from 'antd'

export default class Permission extends Component {
  render() {
    return (
      <div>
        <Card title="权限管理">
          <Button>权限</Button>
          <p>权限管理</p>
        </Card>
      </div>
    )
  }
}