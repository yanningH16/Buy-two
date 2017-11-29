import Vue from 'vue'
import Router from 'vue-router'

import Evalute from './evalute/evalute'
import Login from './login/login'
import MyTask from './myTask/myTask'
import OperateTask from './operateTask/operateTask'
import UserCenter from './userCenter/userCenter'
import MoneyAdmin from './moneyAdmin/moneyAdmin'

Vue.use(Router)

const defaultRouter = [{
  path: '/',
  redirect: {
    name: 'personMoney'
  }
}]
const routes = [...defaultRouter, ...Evalute, ...Login, ...MyTask, ...OperateTask, ...UserCenter, ...MoneyAdmin]
let router = new Router({
  routes,
  mode: 'history'
})

// 设置title
router.beforeEach((to, from, next) => {
  if (to.meta.title || to.params.message) {
    document.title = to.meta.title || to.params.message.title
  } else {
    document.title = '任务系统'
  }
  next()
})
export default router
