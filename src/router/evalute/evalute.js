const Evalute = (resolve) => {
  import('@/components/evalute/evalute').then((module) => {
    resolve(module)
  })
}

const evalute = [{
  path: '/evalute',
  component: Evalute,
  name: 'evalute',
  meta: { title: '收货评价' }
}]

export default evalute
