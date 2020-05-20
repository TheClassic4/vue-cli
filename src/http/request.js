// import Vue from 'vue'
import axios from 'axios'
// import store from '@/store'
import { VueAxios } from './axios'

// 创建 axios 实例
const service = axios.create({
  baseURL: '', // api base_url
  timeout: 6000 // 请求超时时间
})

const err = (error) => {
  // if (error.response) {
  //  const data = error.response.data
  //  const csessionId = sessionStorage.getItem('csessionId')
  //  if (error.response.status === 403) {
  //    notification.error({
  //      message: 'Forbidden',
  //      description: data.message
  //    })
  //  }
  //  if (error.response.status === 401 && !(data.result && data.result.isLogin)) {
  //    notification.error({
  //      message: 'Unauthorized',
  //      description: 'Authorization verification failed'
  //    })
  //    if (csessionId) {
  //      store.dispatch('Logout').then(() => {
  //        setTimeout(() => {
  //          window.location.reload()
  //        }, 1500)
  //      })
  //    }
  //  }
  // }
  return Promise.reject(error)
}

// request 拦截器
service.interceptors.request.use(config => {
  /* config.url = '/process' + config.url
  const csessionId = sessionStorage.getItem('csessionId')
  if(csessionId) {
  	config.headers['csessionId'] = csessionId // 让每个请求携带自定义 token 请根据实际情况自行修改
  } */
  return config
}, err)

// response 拦截器
service.interceptors.response.use((response) => {
  /* if(response.data.errorCode == 401) {
  	store.dispatch('Logout').then(() => {
  		setTimeout(() => {
  			window.location.reload()
  		}, 1500)
  	})
  } */
  return response.data
}, err)

const installer = {
  vm: {},
  install(Vue) {
    Vue.use(VueAxios, service)
  }
}

export {
  installer as VueAxios,
  service as axios
}
