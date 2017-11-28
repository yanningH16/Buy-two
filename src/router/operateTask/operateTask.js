const OperateTask = (resolve) => {
  import('@/components/operateTask/operateTask').then((module) => {
    resolve(module)
  })
}
const OperateTask2 = (resolve) => {
  import('@/components/operateTask/operateTask2').then((module) => {
    resolve(module)
  })
}

const operateTask = [{
  path: '/operateTask',
  component: OperateTask,
  name: 'operateTask',
  meta: { title: '操作任务' }
}, {
  path: '/operateTask2',
  component: OperateTask2,
  name: 'operateTask2',
  meta: { title: '操作任务' }
}]

export default operateTask
