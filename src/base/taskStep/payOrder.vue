<template>
  <div class="payOrder">
    <h2>{{ title }}</h2>
    <p>
      1. 若平台包邮店铺不包邮，填写实付金额，会一起退还<br /> 2. 若京东价格与任务价格不符，核对商品正确请直接 下单，提交实际付款价格，无需联系客服<br /> 3. 下单后严禁擅自京东退货/退款，一经发现将做永久 封号处理！<br /> 4. 商品不接受指定快递
    </p>
    <div class="border">
      <input type="text" placeholder="填写订单号" v-model="orderInfo[0]">
    </div>
    <div>
      <input type="number" placeholder="填写实际付款金额" v-model="orderInfo[1]">
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'payOrder',
  data () {
    return {
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    orderInfo: {
      type: Array,
      default: ['', '']
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.payOrder
  color #08090A
  h2
    font-size 1.6rem
    line-height 1
  p
    font-size 1.2rem
    line-height 2rem
    color #666666
    margin-top 1.2rem
    margin-bottom 2rem
  >div
    padding-top 1.8rem
    height 1.4rem
    input
      width 100%
      font-size 1.4rem
      line-height 1
      outline none
  .border
    border-bottom 1px solid #D4D5D8
    padding-bottom 1.7rem
</style>