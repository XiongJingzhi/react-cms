import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Util from '@/utils/util'
import Axios from '@/axios/index'
import './style.scss'

class Header extends Component {
  componentWillMount() {
    let sysTime = Util.formatDate(new Date().getTime())
    this.setState({
      userName: '敬之敬之',
      sysTime
    })
    setInterval(() => {
      let sysTime = Util.formatDate(new Date().getTime())
      this.setState({
        sysTime
      })
    }, 1000)
    this.getWeatherAPIData()
  }
  getWeatherAPIData() {
    let city = '武汉'
    city = encodeURIComponent(city)
    Axios.jsonp({
      url: `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
    })
      .then(res => {
        let data = res.results[0].weather_data[0]
        let picUrl = Util.isNight() ? data.nightPictureUrl : data.dayPictureUrl
        this.setState({
          dayPictureUrl: picUrl,
          weather: data.weather,
          pm25: res.results[0].pm25
        })
      })
      .catch(err => {
        console.log('err', err)
      })
  }
  render() {
    const { menuName, menuType } = this.props
    return (
      <div className="header">
        <Row className="header-top">
          {menuType ? (
            <Col span="6" className="logo">
              <img src="/assets/logo-ant.svg" alt="logo" />
              <span>通用管理系统</span>
            </Col>
          ) : (
            ''
          )}
          <Col span={menuType ? 18 : 24}>
            <span>欢迎，{this.state.userName}</span>
            <NavLink to="/logout">退出</NavLink>
          </Col>
        </Row>
        {menuType ? (
          ''
        ) : (
          <Row className="breadcrumb">
            <Col span={4} className="breadcrumb-title">
              {menuName || '首页'}
            </Col>
            <Col span={20} className="breadcrumb-weather">
              <time className="breadcrumb-date">{this.state.sysTime}</time>
              <span className="weather-img">
                <img src={this.state.dayPictureUrl} alt="weather-img" />
              </span>
              <span className="weather-detail">{this.state.weather}</span>
              <span>PM2.5: {this.state.pm25}</span>
            </Col>
          </Row>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    menuName: state.menuName
  }
}

export default connect(mapStateToProps)(Header)
