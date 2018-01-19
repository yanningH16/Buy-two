const GetOrder = (resolve) => {
  import('@/components/getOrder/getOrder').then((module) => {
    resolve(module)
  })
}
const Cancel = (resolve) => {
  import('@/components/getOrder/cancel').then((module) => {
    resolve(module)
  })
}
const getOrder = [{
  path: '/getOrder',
  component: GetOrder,
  name: 'getOrder',
  meta: { title: '接单' }
},
{
  path: '/cancel',
  component: Cancel,
  name: 'cancel',
  meta: { title: '取消接单' }
}]

export default getOrder
