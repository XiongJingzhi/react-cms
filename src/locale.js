import React, { Component } from 'react'
import Router from '@/routes/router'
import { LocaleProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import 'moment/locale/zh-cn'

export default class Locale extends Component {
  render() {
    return (
      <LocaleProvider locale={zh_CN}>
        <Router />
      </LocaleProvider>
    )
  }
}