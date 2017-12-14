<template>
  <div class="withdrawSet">
    <div class="step">
      <step :stepArr="stepArr" :stepIndex="0"></step>
    </div>
    <ul class="cont">
      <li class="border-bottom-1px">
        <input type="text" v-model="bankUserName" placeholder="输入持卡人姓名，须和支付宝姓名一致">
      </li>
      <li class="border-bottom-1px">
        <input type="number" v-model="bankCardNo" placeholder="输入银行卡号">
      </li>
      <li class="border-bottom-1px" @click="chooseAddress">
        <input type="text" v-model="pcName" style="width:80%" readonly placeholder="开户行省、市">
        <i></i>
      </li>
      <li>
        <input type="text" v-model="bankName" placeholder="输入开户行名称">
      </li>
    </ul>
    <div class="footer">
      <p>
        1. 只支持提现到借记卡（普通储蓄卡），不支持提现 到信用卡和农村信用社<br />2. 如果您填写的银行卡账户信息不正确，可能将无法 成功返款，平台不承担由此产生的一切费用<br/>3. 为确保您资金安全，绑定后支付宝信息、银行卡开 户名不可修改，即便帐号被盗，您帐号里的资金也不会 转移到他人的账户中
      </p>
      <span class="btn" @click="doNext">下一步</span>
    </div>
    <div class="addressWrap" v-show="showAddress">
      <div class="address">
        <div class="buttons border-bottom-1px">
          <span @click="showAddress=false">取消</span>
          <span @click="sureTheAddress">确定</span>
        </div>
        <mt-picker ref='pickerObj' :slots="slots" :visibleItemCount="7" value-key="name" @change="onValuesChange"></mt-picker>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import Step from '../../base/step/step'
import { Picker, Toast } from 'mint-ui'
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
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  watch: {
    provinceArr (val) {
      if (val) {
        this.getCity(val.code)
      }
    }
  },
  methods: {
    onValuesChange (picker, values) {
      this.provinceArr = values[0]
      this.addressArr = values
    },
    chooseAddress () {
      this.getProvince()
    },
    getProvince () {
      this.$ajax.post('/api/config/location/getProvinceList', {
      }).then((data) => {
        if (data.data.code === '200') {
          this.showAddress = true
          this.slots[0].values = data.data.data
        } else {
          Toast({
            message: data.data.message,
            position: 'bottom'
          })
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    getCity (provinceCode) {
      this.$ajax.post('/api/config/location/getCityListByProvinceCode', {
        provinceCode: provinceCode
      }).then((data) => {
        if (data.data.code === '200') {
          this.slots[2].values = data.data.data
        } else {
          Toast({
            message: data.data.message,
            position: 'bottom'
          })
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    sureTheAddress () {
      this.showAddress = false
      this.pcName = (this.addressArr[0].name) + (this.addressArr[1] ? this.addressArr[1].name : '')
    },
    doNext () {
      this.$ajax.post('/api/buyerAccount/bindBankCard', {
        buyerUserAccountId: this.userInfo.buyerUserAccountId,
        bankName: this.bankName,
        bankUserName: this.bankUserName,
        bankCardNo: this.bankCardNo
      }).then((data) => {
        console.log(data)
        if (data.data.code === '200') {
          this.$router.push({ name: 'withdrawSet2' })
        } else {
          Toast({
            message: data.data.message,
            position: 'bottom'
          })
        }
      }).catch((err) => {
        console.log(err)
      })
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