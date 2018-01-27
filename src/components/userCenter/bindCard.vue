<template>
  <div class="bindCard">
    <ul class="cont">
      <li class="border-bottom-1px">
        <input type="text" v-model="name" placeholder="姓名">
      </li>
      <li class="border-bottom-1px" @click="chooseBank">
        <input type="text" v-model="bank" style="width:70%" readonly placeholder="银行">
        <i></i>
      </li>
      <li v-if="bank=='其他银行'" class="border-bottom-1px">
        <input type="text" v-model="otherBank" placeholder="银行名称">
      </li>
      <li>
        <input type="text" v-model="bankNum" placeholder="银行卡号">
      </li>
    </ul>
    <div class="tip" v-if="otherPage">
      <p>
        1. 只支持提现到借记卡（普通储蓄卡），不支持提现 到信用卡和农村信用社<br />2. 如果您填写的银行卡账户信息不正确，可能将无法 成功返款，平台不承担由此产生的一切费用<br/>3. 为确保您资金安全，绑定后支付宝信息、银行卡开 户名不可修改，即便帐号被盗，您帐号里的资金也不会 转移到他人的账户中
      </p>
    </div>
    <div class="addressWrap" v-show="showBank">
      <div class="address">
        <div class="buttons border-bottom-1px">
          <span @click="showBank=false">取消</span>
          <span @click="sureBank">确定</span>
        </div>
        <mt-picker ref='pickerObj' :slots="slots" :visibleItemCount="7" value-key="bankName" @change="onValuesChange"></mt-picker>
      </div>
    </div>
    <div class="sureBtn">
      <span v-if="!otherPage" class="btn" @click="sureToBindCard">确认</span>
      <span v-else class="btn" @click="sureToBindCard">下一步</span>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { Picker, Toast } from 'mint-ui'
Vue.component(Picker.name, Picker)
export default {
  name: 'bindCard',
  props: {
    otherPage: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      name: '',
      bank: '',
      bankNum: '',
      checkBank: '',
      otherBank: '',
      showBank: false,
      slots: [
        {
          flex: 1,
          values: [{ id: '1', bankName: '中国工商银行' }],
          className: 'slot1',
          textAlign: 'center'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  methods: {
    onValuesChange (picker, values) {
      // console.log(values)
      this.checkBank = values[0]
    },
    chooseBank () {
      this.$ajax.post('/api/config/bankCard/getBankInfoList', {
      }).then((data) => {
        if (data.data.code === '200') {
          this.showBank = true
          let res = data.data.data
          res.push({
            bankName: '其他银行',
            id: '0'
          })
          this.slots[0].values = res
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
    sureBank () {
      this.showBank = false
      this.bank = this.checkBank.bankName
    },
    sureToBindCard () {
      this.$ajax.post('/api/buyerAccount/bindBankCard', {
        buyerUserAccountId: this.userInfo.buyerUserAccountId,
        bankName: this.bank,
        bankUserName: this.name,
        bankCardNo: this.bankNum
      }).then((data) => {
        if (data.data.code === '200') {
          Toast({
            message: '绑定成功!',
            position: 'bottom'
          })
          if (this.otherPage) {
            this.$router.push({ name: 'withdrawSet2' })
          } else {
            this.$router.push({ name: 'accountLink' })
          }
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
  },
  mounted () {
    if (this.userInfo.bankUserName) {
      this.name = this.userInfo.bankUserName
    }
    if (this.userInfo.bankName) {
      this.bank = this.userInfo.bankName
    }
    if (this.userInfo.bankCardNo) {
      this.bankNum = this.userInfo.bankCardNo
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.bindCard
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
        &:before
          content '选择银行'
          font-size 1.2rem
          color #666666
          margin-right 2rem
          vertical-align middle
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
  .tip
    padding 0 1.6rem
    p
      font-size 1.2rem
      color #75787F
      line-height 2.4rem
      margin-top 1.2rem
  .sureBtn
    padding 2rem 1.6rem
</style>