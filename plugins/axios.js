import axios from 'axios'
import { Message } from 'element-ui'
if (process.env.__ENV === 'development') { // 开发环境
  axios.defaults.baseURL = `http://192.168.0.233:8083/`
}
if (process.env.__ENV === 'testing') { // 测试环境
  axios.defaults.baseURL = `http://192.168.0.233:8083/`
}
if (process.env.__ENV === 'production') { // 生产环境
  axios.defaults.baseURL = `http://192.168.0.233:8083/`
}
axios.interceptors.response.use(
  function (response) {
    if (response.data.flag === 1) {
      return response
    } else {
      Message.error(response.data.msg || '请检查您的网络')
      return response
    }
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 注入axios方便调用
export default ({ app }, inject) => {
  inject('axios', axios)
}
