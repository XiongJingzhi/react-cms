/**
 * Created by hao.cheng on 2017/4/23.
 */
import React, { Component } from 'react'
import { Row, Col, Card, Spin, Alert, Switch, Button, Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

class BreadcrumbCustom extends React.Component {
  render() {
    const first = <Breadcrumb.Item>{this.props.first}</Breadcrumb.Item> || ''
    const second = <Breadcrumb.Item>{this.props.second}</Breadcrumb.Item> || ''
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

class Spins extends Component {
  state = { loading: false }
  toggle = value => {
    this.setState({ loading: value })
  }
  componentWillMount() {
    NProgress.start()
  }
  componentDidMount() {
    NProgress.done()   
  }
  nprogressStart = () => {
    NProgress.start()
  }
  nprogressDone = () => {
    NProgress.done()
  }
  render() {
    const container = (
      <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
    )
    return (
      <div className="gutter-example button-demo">
        <BreadcrumbCustom first="UI" second="加载中" />
        <Row gutter={16}>
          <Col className="gutter-row" md={12}>
            <div className="gutter-box">
              <Card bordered={false}>
                <Spin />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" md={12}>
            <div className="gutter-box">
              <Card>
                <Spin size="small" />
                <Spin />
                <Spin size="large" />
              </Card>
            </div>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col className="gutter-row" md={12}>
            <div className="gutter-box">
              <Card bordered={false}>
                <Spin tip="Loading...">
                  <Alert
                    message="Alert message title"
                    description="Further details about the context of this alert."
                    type="info"
                  />
                </Spin>
              </Card>
            </div>
          </Col>

          <Col className="gutter-row" md={12}>
            <div className="gutter-box">
              <Card bordered={false}>
                <Spin spinning={this.state.loading}>{container}</Spin>
                Loading state：
                <Switch checked={this.state.loading} onChange={this.toggle} />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" md={12}>
            <div className="gutter-box">
              <Card bordered={false}>
                <h4>顶部进度条</h4>
                <p>
                  <Button icon="caret-right" onClick={this.nprogressStart} />
                  <span> NProgress.start() — 显示进度条</span>
                </p>
                <p style={{ marginTop: 20 }}>
                  <Button icon="caret-right" onClick={this.nprogressDone} />
                  <span> NProgress.done() — 进度条完成</span>
                </p>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Spins
