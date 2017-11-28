<template>
  <div class="pay">
    <h2>{{ title }}</h2>
    <p :class="{'active': allowArr[0]}">
      <span v-if="!allowArr[0]">不</span>允许使用京东白条付款
    </p>
    <p :class="{'active': allowArr[1]}">
      <span v-if="!allowArr[1]">不</span>允许使用信用卡付款
    </p>
    <p :class="{'active': allowArr[2]}">
      <span v-if="!allowArr[2]">不</span>允许使用优惠券付款
    </p>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'pay',
  data () {
    return {
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    allowArr: {
      type: Array,
      default: [0, 0, 0]
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.pay
  h2
    font-size 1.6rem
    line-height 1
    color #08090A
    margin-bottom 1.2rem
  p
    font-size 1.2rem
    line-height 2rem
    color #666666
  .active
    color #52CC68
</style>