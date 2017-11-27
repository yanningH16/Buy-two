const Login = (resolve) => {
  import('@/components/login/login').then((module) => {
    resolve(module)
  })
}

const login = [{
  path: '/login',
  component: Login,
  name: 'login',
  meta: { title: '登录' }
}]

export default login
