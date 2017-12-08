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
const AccountLink = (resolve) => {
  import('@/components/userCenter/accountLink').then((module) => {
    resolve(module)
  })
}
const WithdrawSet = (resolve) => {
  import('@/components/userCenter/withdrawSet').then((module) => {
    resolve(module)
  })
}
const WithdrawSet2 = (resolve) => {
  import('@/components/userCenter/withdrawSet2').then((module) => {
    resolve(module)
  })
}
const AddWechat = (resolve) => {
  import('@/components/userCenter/addWechat').then((module) => {
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
}, {
  path: '/accountLink',
  component: AccountLink,
  name: 'accountLink',
  meta: { title: '帐号绑定' }
}, {
  path: '/withdrawSet',
  component: WithdrawSet,
  name: 'withdrawSet',
  meta: { title: '提现设置' }
}, {
  path: '/withdrawSet2',
  component: WithdrawSet2,
  name: 'withdrawSet2',
  meta: { title: '提现设置' }
}, {
  path: '/addWechat',
  component: AddWechat,
  name: 'addWechat',
  meta: { title: '添加微信好友' }
}]

export default userCenter
