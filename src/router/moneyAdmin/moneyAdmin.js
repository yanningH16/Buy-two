const MoneyAdmin = (resolve) => {
  import('@/components/moneyAdmin/moneyAdmin').then((module) => {
    resolve(module)
  })
}
const MoneyBank = (resolve) => {
  import('@/components/moneyAdmin/MoneyBank').then((module) => {
    resolve(module)
  })
}
const Submit = (resolve) => {
  import('@/components/moneyAdmin/submit').then((module) => {
    resolve(module)
  })
}
const PersonMoney = (resolve) => {
  import('@/components/moneyAdmin/personMoney').then((module) => {
    resolve(module)
  })
}

const moneyAdmin = [{
  path: '/moneyAdmin',
  component: MoneyAdmin,
  name: 'moneyAdmin',
  meta: { title: '我的本金' }
}, {
  path: '/moneyBank',
  component: MoneyBank,
  name: 'moneybank',
  meta: { title: '本金提现' }
}, {
  path: '/submit',
  component: Submit,
  name: 'submit',
  meta: { title: '提示信息' }
}, {
  path: '/personMoney',
  component: PersonMoney,
  name: 'personMoney',
  meta: { title: '本金明细' }
}
]

export default moneyAdmin
