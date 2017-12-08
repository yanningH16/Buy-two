<template>
  <div class="addWechat">
    <p class="common">备注：平台确认已添加您的微信号后您才可以接单</p>
    <ul class="cont">
      <li>
        <h3>长按扫码添加该微信号为好友</h3>
      </li>
      <li>
        <img src="https://qr.api.cli.im/qr?data=http%253A%252F%252F10.0.0.42%253A9998%252FwithdrawSet2&level=H&transparent=false&bgcolor=%23ffffff&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&size=280&kid=cliim&key=95adf5a72e9f22bb430283139d680afb" alt="erCode">
      </li>
      <li>
        <h3>或者<br />长按复制添加该微信号为好友</h3>
      </li>
      <li>
        <strong>baoyi2017</strong>
        <span class="border-1px">复制</span>
      </li>
    </ul>
    <div class="footer">
      <span class="btn">确认并返回个人中心</span>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'addWechat',
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.addWechat
  width 100%
  height 100%
  overflow auto
  p
    height 3.6rem
    font-size 1.2rem
    line-height 3.6rem
    padding-left 1rem
    padding-right 1rem
    background #FFEBCC
    color #D17D00
  .cont
    text-align center
    h3
      margin-top 3.2rem
      margin-bottom 2rem
      font-size 1.4rem
      line-height 2.2rem
      color #08090A
    img
      display inline-block
      width 13.4rem
      height 13.4rem
    strong
      line-height 3.4rem
      font-size 2.4rem
      margin-right 2rem
      color #08090A
      vertical-align middle
    span
      display inline-block
      vertical-align middle
      border-radius 2px
      width 4.8rem
      height 3.3rem
      line-height 3.3rem
      text-align center
      font-size 1.4rem
  .footer
    margin-top 4rem
    padding 2rem 1.6rem
</style>