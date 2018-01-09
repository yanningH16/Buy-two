<template>
  <div class="wrap">
    <div class="submit">
      <img :src='imgPic' alt="" v-if="$route.query.state==1 || $route.query.addWechat==1 || $route.query.bindAccount==1" class="pic">
      <img :src='imgPic1' alt="" v-if="$route.query.state==2" class="pic">
      <h2 v-if="$route.query.state==1 || $route.query.bindAccount==1">提交成功</h2>
      <h2 v-if="$route.query.state==2">提交失败</h2>
      <h2 v-if="$route.query.addWechat==1">您已获得参与活动资质</h2>
      <p v-if="$route.query.addWechat==1">平台将在2个工作日内微信与您联系, 请耐心等待</p>
      <p v-if="$route.query.state==1">我们会在1-2个工作日内处理</p>
      <p v-if="$route.query.state==2" style="color:#ff3341">失败原因:系统繁忙,请稍后再试</p>
      <div v-if="$route.query.addWechat==1">
        <span>我会耐心等待平台联系我</span>
      </div>
      <router-link v-else :to="{name:'userCenter'}">
        <span>返回个人中心</span>
      </router-link>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'evalute',
  data () {
    return {
      imgPic: require('../../assets/images/success.svg'),
      imgPic1: require('../../assets/images/fail.svg'),
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
      min-width 12.4rem
      height 3.4rem
      padding-left 1rem
      padding-right 1rem
      display inline-block
      line-height 3.4rem
      text-align center
      font-size 1.4rem
      color #08090a
      border-radius 3px
      border 1px solid #383a3f
      margin-top 2rem
</style>