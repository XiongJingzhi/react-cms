import React, { Component } from 'react'
import { Menu } from 'antd'

import MenuConfig from '../../config/menuConfig'
import './style.scss'
const SubMenu = Menu.SubMenu

export default class NavLeft extends Component {
  state = {
    currentKey: ''
  }
  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig)
    this.setState({
      menuTreeNode
    })
  }
  renderMenu = (config) => {
    return config.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            { this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          <a href={item.key}>{item.title}</a>
        </Menu.Item>
      )
    })
  }
  handleClick = (e) => {
    console.log('handleClick', e, this)
  }
  render() {
    return (
      <div className="nav-left">
        <div className="logo" onClick={this.handleClick}>
          <img src="/assets/logo-ant.svg" alt="logo"/>
          <h1>CMS</h1>
        </div>
        <Menu onClick={this.handleClick} theme="dark" mode="vertical">
          { this.state.menuTreeNode }
        </Menu>
      </div>
    )
  }
}