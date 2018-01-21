<template>
  <div class="help">
    <div class="rqCode">
      <p>亲，无论发生什么
        <br />您的专属客服风里雨里等着你</p>
      <img src="https://qr.api.cli.im/qr?data=sfsa&level=H&transparent=false&bgcolor=%23ffffff&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&size=280&kid=cliim&key=9eac5f79ed503ffa360539eded89bc04" alt="">
      <p>
        <strong>
          微信号: ****
        </strong>
      </p>
    </div>
    <ul class="cont">
      <li class="border-bottom-1px">
        <span>常见问题</span>
        <!-- <strong></strong> -->
      </li>
      <li class="border-bottom-1px" @click="$router.push({name: 'accountLink'})">
        <span>帐号绑定</span>
        <strong></strong>
      </li>
      <li class="border-bottom-1px" @click="$router.push({name: 'allege'})">
        <span>申述</span>
        <strong></strong>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'help',
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.help
  width 100%
  height 100%
  overflow auto
  background #EFF0F2
  .rqCode
    margin-top 1rem
    background #ffffff
    padding 2rem
    text-align center
    p
      font-size 1.4rem
      color #666666
      line-height 1.8rem
      strong
        font-size 1.6rem
        color #333333
    img
      width 13rem
      height 13rem
      margin-top 2rem
      margin-bottom 2rem
  .cont
    margin-top 1rem
    background #ffffff
    padding 0 1.6rem
    li
      padding 1.6rem 0
      color #08090A
      display flex
      span
        flex 1
        font-size 1.4rem
        line-height 2rem
      strong
        flex 1
        position relative
        display inline-block
        width 2rem
        height 2rem
        &:after
          border solid 2px #999999
          border-bottom-width 0
          border-left-width 0
          content ' '
          top 1rem
          right 0.75rem
          position absolute
          width 5px
          height 5px
          -webkit-transform translateY(-50%) rotate(45deg)
          transform translateY(-50%) rotate(45deg)
</style>