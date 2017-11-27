const UserCenter = (resolve) => {
  import('@/components/userCenter/userCenter').then((module) => {
    resolve(module)
  })
}

const userCenter = [{
  path: '/userCenter',
  component: UserCenter,
  name: 'userCenter',
  meta: { title: '我的' }
}]

export default userCenter
