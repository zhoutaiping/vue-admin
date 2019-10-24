import axios from 'axios'
import { Message } from 'element-ui'
import { removeToken } from '@/utils/auth'
const service = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '/api' : process.env.BASE_API, // api 的 base_url
  // baseURL: '/api', // api 的 base_url
  timeout: 50000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  }
})

// 添加一个请求拦截器
service.interceptors.request.use(
  config => {
  // Do something before request is sent

    const { url } = config
    const _FD = url.indexOf('/fd/')
    const sys_plat = _FD > -1 ? 'apiV4' : 'adminV5Api'
    config.url = url + '?sys_plat=' + sys_plat
    return config
  }
)

// respone拦截器
service.interceptors.response.use(

  response => {
    const { status: statusCode, data: body } = response
    const { status, data } = body
    const { code, message } = status

    if (Number(code) === 0 && message === '没有登录') {
      Message({
        message,
        type: 'warning'
      })
      this.dispatch('delSession', { session: null })
      removeToken()
      setTimeout(() => {
        window.location.href = '/login'
      }, 500)
    }

    if (statusCode === 200) {
      if (code && message) {
        if (parseInt(code, 10) !== 1) {
          if (code === 16149) {
            this.dispatch('delSession', { session: null })
            removeToken()
            setTimeout(() => {
              window.location.href = '/login'
            }, 500)
          } else if (Number(code) === 0 && message === '用户不存在') {
            Message({
              message,
              type: 'warning'
            })
            this.dispatch('delSession', { session: null })
            removeToken()
            setTimeout(() => {
              window.location.href = '/login'
            }, 500)
          } else if (Number(code) === 0 && message === '没有登录') {
            Message({
              message,
              type: 'warning'
            })
            this.dispatch('delSession', { session: null })
            removeToken()
            setTimeout(() => {
              window.location.href = '/login'
            }, 500)
          } else {
            Message({
              message,
              type: 'warning'
            })
          }
          return Promise.reject(message)
        }
      } else {
        Message({
          message,
          type: 'error'
        })
        return Promise.reject(message)
      }
    } else {
      Message({
        message,
        type: 'error'
      })
      return Promise.reject(message)
    }

    if (data && data.data) {
      return data.data
    } else {
      return data
    }
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
