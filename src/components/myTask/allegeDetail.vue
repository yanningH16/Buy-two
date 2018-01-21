<template>
  <div class="allegeDetail">
    <ul class="cont">
      <li class="border-bottom-1px">
        <span>处理状态</span>
        <strong>待审核</strong>
      </li>
      <li class="border-bottom-1px">
        <span>订单编号</span>
        <strong>RFT23654789321</strong>
      </li>
      <li class="border-bottom-1px">
        <span>申述时间</span>
        <strong>2017-12-14</strong>
      </li>
      <li class="border-bottom-1px">
        <span>申述原因</span>
        <strong>撒旦撒旦撒放沙</strong>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'allegeDetail',
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.allegeDetail
  width 100%
  height 100%
  overflow auto
  background #EFF0F2
  .cont
    padding-top 1rem
    li
      background #ffffff
      padding 1.6rem
      display flex
      strong
        flex 1
        text-align right
        color #666666
        font-size 1.2rem
        line-height 1.6rem
      span
        flex 1
        font-size 1.4rem
        color #08090A
</style>