const UserCenter = (resolve) => {
  import('@/components/userCenter/userCenter').then((module) => {
    resolve(module)
  })
}
const UserSet = (resolve) => {
  import('@/components/userCenter/userSet').then((module) => {
    resolve(module)
  })
}

const userCenter = [{
  path: '/userCenter',
  component: UserCenter,
  name: 'userCenter',
  meta: { title: '我的' }
}, {
  path: '/userSet',
  component: UserSet,
  name: 'userSet',
  meta: { title: '设置' }
}]

export default userCenter
