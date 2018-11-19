import React, { Component } from 'react'
import { Card, Tabs, message, Icon } from 'antd'
import '../style.scss'

export default class TabPages extends Component {
  newTabIndex = 0
  componentWillMount(){
    const panes = [
      {
        title:'Tab 1',
        content: 'Tab 1',
        key:'1'
      },
      {
        title: 'Tab 2',
        content: 'Tab 2',
        key: '2'
      },
      {
        title: 'Tab 3',
        content: 'Tab 3',
        key: '3'
      }
    ]
    this.setState({
        activeKey: panes[0].key,
        panes
    })
  }
  handleCallback = (key) => {
    console.log(key, this)
    message.info("Hi,您选择了页签："+key)
  }
  onChange = (activeKey) => {
    console.log(activeKey, this)
    this.setState({
      activeKey
    })
  }
  onEdit = (targetKey, action) => {
    this[action](targetKey)
  }
  add = () => {
    const panes = this.state.panes
    const activeKey = `newTab${this.newTabIndex++}`
    panes.push({ title: activeKey, content: 'New Tab Pane', key: activeKey })
    this.setState({ activeKey, panes })
  }
  remove = (targetKey) => {
    let activeKey = this.state.activeKey
    let lastIndex
    this.state.panes.forEach((pane, i) => {
      if ( pane.key === targetKey) {
        lastIndex = i - 1
      }
    })
    const panes = this.state.panes.filter(pane => pane.key !== targetKey)
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key
    }
    this.setState({ panes, activeKey })
  }
  render() {
    const TabPane = Tabs.TabPane
    const { activeKey, panes } = this.state
    return (
      <div>
        <Card title="Tab标签" className="card-wrap">
          <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
            <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
            <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
            <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
          </Tabs>
        </Card>
        <Card title="Tab带图的页签" className="card-wrap">
          <Tabs defaultActiveKey="2" onChange={this.handleCallback}>
            <TabPane tab={<span><Icon type="plus" />Tab 1</span>} key="1">欢迎学习</TabPane>
            <TabPane tab={<span><Icon type="edit" />Tab 2</span>} key="2">欢迎学习</TabPane>
            <TabPane tab={<span><Icon type="delete" />Tab 3</span>} key="3">受欢迎</TabPane>
          </Tabs>
      </Card>
      <Card title="Tab带图页面标签" className="card-wrap">
        <Tabs
          onChange={this.onChange}
          activeKey={activeKey}
          type="editable-card"
          onEdit={this.onEdit}
        >
          { 
            panes.map((pane) => {
              return (
                <TabPane tab={pane.title} key={pane.key}>
                {pane.content}
                </TabPane>
              )
            })
          }
        </Tabs>
      </Card>
      </div>
    )
  }
}