<template>
  <div class="withdrawSet2">
    <div class="step">
      <step :stepArr="stepArr" :stepIndex="1"></step>
    </div>
    <ul class="cont">
      <li class="border-bottom-1px">
        <input type="number" placeholder="输入手机号">
      </li>
      <li>
        <input style="width:50%;" type="number" placeholder="输入验证码">
        <span class="get border-1px">获取</span>
      </li>
    </ul>
    <ul class="cont">
      <li class="border-bottom-1px">
        <input type="password" placeholder="输入提现密码">
      </li>
      <li>
        <input type="password" placeholder="再次输入密码">
      </li>
    </ul>
    <div class="footer">
      <span class="btn">完成</span>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Step from '../../base/step/step'

export default {
  name: 'withdrawSet2',
  components: {
    Step
  },
  data () {
    return {
      stepArr: ['绑定银行卡', '设置提现密码']
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.withdrawSet2
  width 100%
  height 100%
  overflow auto
  background #EFF0F2
  .cont
    margin-top 1.2rem
    background #ffffff
    padding-left 1.6rem
    li
      height 1.4rem
      padding-top 1.8rem
      padding-right 1rem
      padding-bottom 1.8rem
      font-size 1.4rem
      .get
        float right
        margin-top -1rem
        width 4.8rem
        height 3.4rem
        line-height 3.4rem
        text-align center
        font-size #999999
      input
        width 100%
        outline none
  .footer
    padding 2rem 1.6rem
</style>