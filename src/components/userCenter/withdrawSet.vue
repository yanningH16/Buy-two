<template>
  <div class="withdrawSet">
    <div class="step">
      <step :stepArr="stepArr" :stepIndex="0"></step>
    </div>
    <ul class="cont">
      <li class="border-bottom-1px">
        <input type="text" placeholder="输入持卡人姓名，须和支付宝姓名一致">
      </li>
      <li class="border-bottom-1px">
        <input type="number" placeholder="输入银行卡号">
      </li>
      <li class="border-bottom-1px" @click="showAddress=true">
        <input type="text" style="width:80%" readonly placeholder="开户行省、市">
        <i></i>
      </li>
      <li>
        <input type="text" placeholder="输入开户行名称">
      </li>
    </ul>
    <div class="footer">
      <p>
        1. 只支持提现到借记卡（普通储蓄卡），不支持提现 到信用卡和农村信用社<br />2. 如果您填写的银行卡账户信息不正确，可能将无法 成功返款，平台不承担由此产生的一切费用<br/>3. 为确保您资金安全，绑定后支付宝信息、银行卡开 户名不可修改，即便帐号被盗，您帐号里的资金也不会 转移到他人的账户中
      </p>
      <span class="btn">下一步</span>
    </div>
    <div class="address" v-show="showAddress">
      <div class="buttons border-bottom-1px">
        <span @click="showAddress=false">取消</span>
        <span>确定</span>
      </div>
      <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Vue from 'vue'
import Step from '../../base/step/step'
import { Picker } from 'mint-ui'
Vue.component(Picker.name, Picker)

export default {
  name: 'withdrawSet',
  components: {
    Step
  },
  data () {
    return {
      showAddress: false,
      stepArr: ['绑定银行卡', '设置提现密码'],
      slots: [
        {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot3',
          textAlign: 'left'
        }
      ]
    }
  },
  methods: {
    onValuesChange (picker, values) {
      console.log(picker, values)
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0])
      }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.withdrawSet
  width 100%
  height 100%
  overflow auto
  background #EFF0F2
  position relative
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
      input
        width 100%
        outline none
      i
        position relative
        float right
        &:after
          border solid 2px #999999
          border-bottom-width 0
          border-left-width 0
          content ''
          top 0.75rem
          right 0.75rem
          position absolute
          width 5px
          height 5px
          -webkit-transform translateY(-50%) rotate(135deg)
          transform translateY(-50%) rotate(135deg)
  .footer
    padding 0 1.6rem
    p
      font-size 1.2rem
      color #75787F
      line-height 2.4rem
      margin-top 1.2rem
    .btn
      margin-top 2rem
      margin-bottom 2rem
  .address
    position fixed
    bottom 0
    left 0
    width 100%
    background #ffffff
    animation slideUp 0.2s ease-out
    transition 0.2s
    @keyframes slideUp
      from
        transform translate3d(0, 20rem, 0)
    .buttons
      display flex
      span
        flex 1
        font-size 1.2rem
        line-height 3.2rem
        color #26a2ff
        text-align center
</style>