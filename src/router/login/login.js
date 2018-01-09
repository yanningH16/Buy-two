const Login = (resolve) => {
  import('@/components/login/login').then((module) => {
    resolve(module)
  })
}
const Forget = (resolve) => {
  import('@/components/login/forget').then((module) => {
    resolve(module)
  })
}
const active = (resolve) => {
  import('@/components/login/active').then((module) => {
    resolve(module)
  })
}
const reg = (resolve) => {
  import('@/components/login/reg').then((module) => {
    resolve(module)
  })
}

const login = [{
  path: '/login',
  component: Login,
  name: 'login',
  meta: { title: '登录' }
}, {
  path: '/forget',
  component: Forget,
  name: 'forget',
  meta: { title: '忘记密码' }
}, {
  path: '/reg',
  component: reg,
  name: 'reg',
  meta: { title: '注册' }
}, {
  path: '/active',
  component: active,
  name: 'active',
  meta: { title: '活动邀请' }
}]

export default login
