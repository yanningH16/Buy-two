const MyTask = (resolve) => {
  import('@/components/myTask/myTask').then((module) => {
    resolve(module)
  })
}

const myTask = [{
  path: '/myTask',
  component: MyTask,
  name: 'myTask',
  meta: { title: '我的任务' }
}]

export default myTask
