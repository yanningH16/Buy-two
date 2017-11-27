<template>
  <div class="login">
    <h2>手机号密码登录</h2>
    <div class="input">
      <input type="number" placeholder="输入手机号">
    </div>
    <div class="input">
      <input type="password" placeholder="输入密码">
    </div>
    <div class="goIn">
      <span class="btn btn-gray">登录</span>
      <p>忘记密码</p>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'login',
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.login
  width 100%
  height 100%
  box-sizing border-box
  background #ffffff
  overflow auto
  padding-left 1.6rem
  padding-right 1.6rem
  h2
    font-size 2rem
    margin-top 5.2rem
    margin-bottom 3rem
    text-align center
  .input
    height 1.4rem
    padding-top 1.8rem
    padding-bottom 1.8rem
    border-bottom 0.5px solid #D4D5D8
    input
      font-size 1.4rem
      height 1.4rem
      width 100%
      outline none
</style>