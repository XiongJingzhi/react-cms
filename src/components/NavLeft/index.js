import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { switchMenu } from './../../redux/action'
import { Menu } from 'antd'

import MenuConfig from '../../config/menuConfig'
import './style.scss'
const SubMenu = Menu.SubMenu

class NavLeft extends Component {
  state = {
    currentKey: ''
  }
  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig)
    this.setState({
      menuTreeNode
    })
  }
  renderMenu = config => {
    return config.map(item => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>
      )
    })
  }
  handleClick = ({ item, key }) => {
    if (key === this.state.currentKey) {
      return false
    }
    // 事件派发，自动调用reducer，通过 reducer 保存到 store对象中
    const { dispatch } = this.props
    dispatch(switchMenu(item.props.title))

    this.setState({
      currentKey: key
    })
  }
  homeHandleClick = () => {
    const { dispatch } = this.props
    dispatch(switchMenu('首页'))
    this.setState({
      currentKey: ''
    })
  }
  render() {
    return (
      <div className="nav-left">
        <div className="logo" onClick={() => this.homeHandleClick}>
          <img src="/assets/logo-ant.svg" alt="logo" />
          <h1>CMS</h1>
        </div>
        <Menu onClick={this.handleClick} theme="dark" mode="vertical">
          {this.state.menuTreeNode}
        </Menu>
      </div>
    )
  }
}

export default connect()(NavLeft)
