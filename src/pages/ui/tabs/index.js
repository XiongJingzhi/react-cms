import React, { Component } from 'react'
import { Tabs } from 'antd'
import '../style.scss'

export default class TabPages extends Component {
  callback = () => {
    console.log('callback')
  }
  render() {
    const TabPane = Tabs.TabPane
    return (
      <div>
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
            <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
            <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
        </Tabs>
      </div>
    )
  }
}