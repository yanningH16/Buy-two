<template>
  <div class="shopName">
    <h2>{{ title }}
      <i>？</i>
    </h2>
    <div class="inputs">
      <input type="text" placeholder="输入店铺名称" v-model="value">
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'shopName',
  data () {
    return {
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.shopName
  color #08090A
  h2
    font-size 1.6rem
    line-height 1
    i
      display inline-block
      font-size 1.6rem
      line-height 1
      width 1.6rem
      height 1.6rem
      background red
  .inputs
    margin-top 4rem
    input
      font-size 1.4rem
      outline none
      line-height 1
      width 100%
</style>