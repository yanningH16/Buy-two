const YongMoney = (resolve) => {
  import('@/components/yongMoney/yongMoney').then((module) => {
    resolve(module)
  })
}
const YongDetail = (resolve) => {
  import('@/components/yongMoney/yongDetail').then((module) => {
    resolve(module)
  })
}
const YongBank = (resolve) => {
  import('@/components/yongMoney/yongBank').then((module) => {
    resolve(module)
  })
}
const YongText = (resolve) => {
  import('@/components/yongMoney/yongText').then((module) => {
    resolve(module)
  })
}
const yongMoney = [{
  path: '/yongMoney',
  component: YongMoney,
  name: 'yongMoney',
  meta: { title: '我的佣金' }
},
{
  path: '/yongDetail',
  component: YongDetail,
  name: 'yongDetail',
  meta: { title: '佣金明细' }
},
{
  path: '/yongBank',
  component: YongBank,
  name: 'yongBank',
  meta: { title: '佣金提现' }
},
{
  path: '/yongText',
  component: YongText,
  name: 'yongText',
  meta: { title: '佣金提现规则' }
}
]

export default yongMoney
