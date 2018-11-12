import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Util from '@/utils/util'
import Axios from '@/axios/index'
import './style.scss'
export default class Header extends Component {
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
      .then((res) => {
        console.log(res)
        let data = res.results[0].weather_data[0]
        let picUrl = Util.isNight() ? data.nightPictureUrl: data.dayPictureUrl
        this.setState({
          dayPictureUrl: picUrl,
          weather: data.weather,
          pm25: res.results[0].pm25
        })
      })
      .catch((err) => {
        console.log('err', err)
      })
  }
  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span={24}>
            <span>欢迎， {this.state.userName}</span>
            <a href="/logout">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={4} className="breadcrumb-title">
            首页
          </Col>
          <Col span={20} className="breadcrumb-weather">
            <time className="breadcrumb-date">{this.state.sysTime}</time>
            <span className="whether-img">
              <img src={this.state.dayPictureUrl} alt="weather-img"/>
            </span>
            <span className="weather-detail">{this.state.weather}</span>
            <span>PM2.5: {this.state.pm25}</span>
          </Col>
        </Row>
      </div>
    )
  }
}