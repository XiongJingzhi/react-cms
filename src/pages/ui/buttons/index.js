import React, { Component } from 'react'
import { Card, Icon, Button, Radio } from 'antd'
import BreadcrumbCustom from '@/components/Breadcrumb'
import '../style.scss'

export default class Buttons extends Component {
  state = {
    loading: false,
    size: 'default'
  }
  handleToggleLoading = () => {
    this.setState({
      loading: !this.state.loading
    })
  }
  handleChange = e => {
    this.setState({
      size: e.target.value
    })
  }
  render() {
    return (
      <div>
        <BreadcrumbCustom first="UI" second="buttons" />
        <Card title="基础按钮" className="card-wrap">
          <Button type="primary">按钮</Button>
          <Button type="normal">按钮</Button>
          <Button>按钮</Button>
          <Button disabled>按钮</Button>
          <Button type="danger">按钮</Button>
        </Card>
        <Card title="图形按钮" className="card-wrap">
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button shape="circle" icon="search" />
          <Button type="primary" icon="search">
            搜索
          </Button>
          <Button type="primary" icon="download">
            下载
          </Button>
        </Card>
        <Card title="Loading按钮" className="card-wrap">
          <Button type="primary" loading={this.state.loading}>
            确定
          </Button>
          <Button type="primary" shape="circle" loading={this.state.loading} />
          <Button loading={this.state.loading}>点击加载</Button>
          <Button shape="circle" loading={this.state.loading} />
          <Button type="primary" onClick={this.handleToggleLoading}>
            切换
          </Button>
        </Card>
        <Card title="按钮组" style={{ marginBottom: 10 }}>
          <Button.Group>
            <Button type="primary" icon="left">
              返回
            </Button>
            <Button type="primary" icon="right">
              前进
            </Button>
          </Button.Group>
        </Card>
        <Card title="Card title" className="card-wrap">
          <Button.Group>
            <Button type="primary">
              <Icon type="left" />
              返回
            </Button>
            <Button type="primary">
              前进
              <Icon type="right" />
            </Button>
          </Button.Group>
        </Card>
        <Card title="按钮尺寸" className="card-wrap">
          <Radio.Group value={this.state.size} onChange={this.handleChange}>
            <Radio value="small">小</Radio>
            <Radio value="default">中</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group>
          <Button type="primary" size={this.state.size}>
            按钮
          </Button>
          <Button size={this.state.size} />
          <Button type="dashed" size={this.state.size}>
            按钮
          </Button>
          <Button type="danger" size={this.state.size}>
            按钮
          </Button>
        </Card>
      </div>
    )
  }
}
