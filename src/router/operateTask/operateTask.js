const OperateTask = (resolve) => {
  import('@/components/operateTask/operateTask').then((module) => {
    resolve(module)
  })
}

const operateTask = [{
  path: '/operateTask',
  component: OperateTask,
  name: 'operateTask',
  meta: { title: '操作任务' }
}]

export default operateTask
