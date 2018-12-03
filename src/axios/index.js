import axios from 'axios'
import Jsonp from 'jsonp'
import { Modal } from 'antd'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

axios.interceptors.request.use(function (config) {
  console.log('axios interceptors start')
  NProgress.start()
  return config
})

axios.interceptors.response.use(function (config) {
  console.log('axios interceptor response ending')
  NProgress.done()
  return config
})

export default class Axios {
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      Jsonp(options.url, {
        param: 'callback'
      }, function(err, response) {
        if (response && response.status === 'success') {
          resolve(response)
        } else {
          reject(err)
        }
      })
    })
  }

  static ajax(options) {
    let baseApi = 'https://www.easy-mock.com/mock/5bfcb54e0dae3c3de7500e28/admin'
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: options.method || 'get',
        baseURL: baseApi,
        timeout: 5000,
        params: (options.data && options.data.params) || ''
      })
        .then((response) => {
          console.log('response', response)
          if (response.status === 200 ) {
            let res = response.data
            if (res.code === 0) {
              resolve(res)
            } else {
              Modal.info({
                title: '提示',
                content: res.msg
              })
            }
          } else {
            reject(response)
          }
        })
    })
  }
}