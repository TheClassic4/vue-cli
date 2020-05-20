import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import { VueAxios } from './http/request'

import './core/use' // 注入依赖
import './permission' // 权限控制
import './utils/filter' // 过滤器
import './assets/css/reset.css'

Vue.config.productionTip = false

Vue.use(VueAxios)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
