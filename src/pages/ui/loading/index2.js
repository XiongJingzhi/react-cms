import React, { Component } from 'react'
import { Card, Spin, Icon, Alert } from 'antd'
import '../style.scss'

export default class Loadings extends Component {
  render() {
    const icon = <Icon type="loading" style={{ fontSize: 24 }} />
    const iconLoading = <Icon type="loading" style={{ fontSize: 24 }} />
    return (
      <div>
        <Card title="Spin用法" className="card-wrap">
          <Spin size="small" />
          <Spin style={{ margin: '0 10px' }} />
          <Spin size="large" />
          <Spin indicator={icon} style={{ marginLeft: 10 }} spinning={true} />
        </Card>
        <Card title="内容遮罩" className="card-wrap">
          <Alert
            message="React"
            description="欢迎来到ant-design"
            type="info"
            style={{ marginBottom: 10 }}
          />
          <Spin>
            <Alert
              message="React"
              description="欢迎来到ant-design"
              type="warning"
              style={{ marginBottom: 10 }}
            />
          </Spin>
          <Spin tip="加载中...">
            <Alert
              message="React"
              description="欢迎来到ant-design"
              type="warning"
              style={{ marginBottom: 10 }}
            />
          </Spin>
          <Spin indicator={iconLoading}>
            <Alert
              message="React"
              description="欢迎来到ant-design"
              type="warning"
            />
          </Spin>
        </Card>
      </div>
    )
  }
}
