// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import MintUI from 'mint-ui'
import 'babel-polyfill'
import 'mint-ui/lib/style.css'
import axios from './assets/js/http'

Vue.use(MintUI)
Vue.config.productionTip = false
Vue.prototype.$ajax = axios
Vue.filter('phonePwd', function (value) {
  if (!value) {
    return false
  }
  let reg = /^(\d{4})[\d]*(\d{4})$/
  return value.replace(reg, '$1****$2')
})

Vue.filter('name', function (value) {
  if (!value) {
    return false
  }
  let reg = /^([\u4e00-\u9fa5]{1})[\u4e00-\u9fa5]*([\u4e00-\u9fa5]{0})$/
  return value.replace(reg, '$1**')
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
