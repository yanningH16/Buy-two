const GetOrder = (resolve) => {
  import('@/components/getOrder/getOrder').then((module) => {
    resolve(module)
  })
}
const getOrder = [{
  path: '/getOrder',
  component: GetOrder,
  name: 'getOrder',
  meta: { title: '接单' }
}]

export default getOrder
