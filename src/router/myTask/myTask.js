const MyTask = (resolve) => {
  import('@/components/myTask/myTask').then((module) => {
    resolve(module)
  })
}
const allege = (resolve) => {
  import('@/components/myTask/allege').then((module) => {
    resolve(module)
  })
}
const allegeDetail = (resolve) => {
  import('@/components/myTask/allegeDetail').then((module) => {
    resolve(module)
  })
}
const allegeAlert = (resolve) => {
  import('@/components/myTask/allegeAlert').then((module) => {
    resolve(module)
  })
}
const myTask = [{
  path: '/myTask',
  component: MyTask,
  name: 'myTask',
  meta: { title: '我的任务' }
}, {
  path: '/allege',
  component: allege,
  name: 'allege',
  meta: { title: '申述' }
}, {
  path: '/allegeDetail',
  component: allegeDetail,
  name: 'allegeDetail',
  meta: { title: '申述详情' }
}, {
  path: '/allegeAlert',
  component: allegeAlert,
  name: 'allegeAlert',
  meta: { title: '提交申述' }
}]

export default myTask
