<template>
  <div class="wrap">
    <div class="submit">
      <img :src='imgPic' alt="" v-if="state===1" class="pic">
      <img :src='imgPic1' alt="" v-if="state===2" class="pic">
      <h2 v-if="state===1">提交成功</h2>
      <h2 v-if="state===2">提交失败</h2>
      <p v-if="state===1">我们会在1-2个工作日内处理</p>
      <p v-if="state===2" style="color:#ff3341">失败原因:系统繁忙,请稍后再试</p>
      <span>返回个人中心</span>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'evalute',
  data () {
    return {
      imgPic: 'http://cdn.static.renqizhu.cn/upload/activity/28867/15118541853711.jpg?imageView2/2/w/380',
      imgPic1: 'http://cdn.static.linlangxiu.com/upload/trade/20171119/c3a45075b9cc08d4ef3fd33867a2d8b9.jpg',
      state: 2
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.wrap
  background #EFF0F2
  width 100%
  height 100%
  overflow auto
  .submit
    background #ffffff
    padding-top 4rem
    text-align center
    padding-bottom 2rem
    .pic
      width 60px
      height 60px
      border-radius 50%
    h2
      color #08090A
      font-size 1.4rem
      margin-top 2rem
    p
      margin-top 2rem
      color #75787f
      font-size 1.2rem
    span 
      width 12.4rem
      height 3.4rem
      display inline-block
      line-height 3.4rem
      text-align center
      font-size 1.4rem
      color #08090a
      border-radius 3px
      border 1px solid  #383a3f
      margin-top 2rem  
</style>