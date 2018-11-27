import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'antd'

export default class BreadcrumbCustom extends Component {
  render() {
    const first = <Breadcrumb.Item>{this.props.first}</Breadcrumb.Item>
    const second = <Breadcrumb.Item>{this.props.second}</Breadcrumb.Item>
    return (
      <span>
        <Breadcrumb style={{ margin: '12px 0' }}>
          <Breadcrumb.Item>
            <Link to={'/home'}>首页</Link>
          </Breadcrumb.Item>
          {first}
          {second}
        </Breadcrumb>
      </span>
    )
  }
}