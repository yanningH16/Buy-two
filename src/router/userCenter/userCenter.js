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
const bindTbAccount = (resolve) => {
  import('@/components/userCenter/bindTbAccount').then((module) => {
    resolve(module)
  })
}
const bindJdAccount = (resolve) => {
  import('@/components/userCenter/bindJdAccount').then((module) => {
    resolve(module)
  })
}
const myPush = (resolve) => {
  import('@/components/userCenter/myPush').then((module) => {
    resolve(module)
  })
}
const inivited = (resolve) => {
  import('@/components/userCenter/inivited').then((module) => {
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
  path: '/bindTbAccount',
  component: bindTbAccount,
  name: 'bindTbAccount',
  meta: { title: '绑定淘宝帐号' }
}, {
  path: '/bindJdAccount',
  component: bindJdAccount,
  name: 'bindJdAccount',
  meta: { title: '绑定京东帐号' }
}, {
  path: '/myPush',
  component: myPush,
  name: 'myPush',
  meta: { title: '我的推广' }
}, {
  path: '/inivited',
  component: inivited,
  name: 'inivited',
  meta: { title: '我已邀请' }
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
