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
}]

export default login
