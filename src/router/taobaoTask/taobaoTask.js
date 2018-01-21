const TaobaoTask = (resolve) => {
  import('@/components/taobaoTask/taobaoTask').then((module) => {
    resolve(module)
  })
}

const myTask = [{
  path: '/taobaoTask',
  component: TaobaoTask,
  name: 'taobaoTask',
  meta: { title: '淘宝/天猫任务' }
}]

export default myTask
