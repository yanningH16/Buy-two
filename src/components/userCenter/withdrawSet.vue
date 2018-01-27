<template>
  <div class="withdrawSet">
    <div class="step">
      <step :stepArr="stepArr" :stepIndex="0"></step>
    </div>
    <div class="bindCard">
      <bindCard :otherPage="true"></bindCard>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Step from '../../base/step/step'
import BindCard from './bindCard'

export default {
  name: 'withdrawSet',
  components: {
    Step,
    BindCard
  },
  data () {
    return {
      showAddress: false,
      stepArr: ['绑定银行卡', '设置提现密码'],
      provinceArr: [],
      addressArr: [],
      pcName: '',
      slots: [
        {
          flex: 1,
          values: [{ code: '110000', id: 1, name: '北京市' }],
          className: 'slot1',
          textAlign: 'center'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: [],
          className: 'slot3',
          textAlign: 'center'
        }
      ],
      bankName: '',
      bankUserName: '',
      bankCardNo: ''
    }
  },
  watch: {
    provinceArr (val) {
      if (val) {
        this.getCity(val.code)
      }
    }
  },
  methods: {
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
  .addressWrap
    position fixed
    width 100%
    height 100%
    top 0
    left 0
    background rgba(0, 0, 0, 0.6)
    animation fadeIn 0.2s ease-out
    transition 0.2s
    @keyframes fadeIn
      from
        opacity 0
    .address
      position absolute
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