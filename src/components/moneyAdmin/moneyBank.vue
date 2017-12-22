<template>
  <div class="wrap">
    <div class="moneyBank">
      <div class="flex first border-bottom-1px">
        <p class="bankName">提现到银行卡</p>
        <p class="right">{{this.userInfo.bankCardName}}</p>
      </div>
      <div class="flex two border-bottom-1px">
        <mt-field label="" placeholder="输入可提现金额" type="tel" v-model="moneyNum" style="width:15rem;padding-left:0.8rem" @change="change"></mt-field>
        <p class="benjin">
          <span>可提现本金(元):</span>
          <span>{{this.$route.query.money}}</span>
        </p>
      </div>
      <div class="money">
        <p>实际到账金额为:
          <span>{{money}}</span>
        </p>
        <p class="top">当前提现手续费为:
          <span>{{feeMoney}}</span>%</p>
        <p class="border-bottom-1px">
          <mt-field label="" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        </p>
      </div>
      <!-- <div class="flex yanpass">
        <mt-field label="" placeholder="输入手机验证码" type="tel" v-model="phone"></mt-field>
        <span class="get" @click="get" v-show="show">获取</span>
        <span class="get gray" v-show="hidden">{{time}}</span>
      </div> -->
    </div>
    <mt-button size="large" type="danger" style="margin-top:2rem" @click="tixian">提现</mt-button>
    <router-link :to="{name:'yongText'}">
      <div class="guize">
        <p>本金提现规则</p>
        <router-link :to="{name:'withdrawSet2'}">
          <p style="margin-top:1.5rem">忘记提现密码</p>
        </router-link>
      </div>
    </router-link>
    <div class="cover" v-show="cover">
      <div class="content">
        <h3>核对金额</h3>
        <p class="tishi">本次提现金额:
          <span>{{countMoney}}</span>元</p>
        <p style="margin-top:1rem">实际到账金额:
          <span>{{money}}</span>元</p>
        <div class="work">
          <span class="work_1" @click="cover=false">取消</span>
          <span class="work_2" @click="sureTx">确认提现</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import { Toast } from 'mint-ui'
import { mapGetters } from 'vuex'
import md5 from 'md5'
export default {
  name: 'evalute',
  data () {
    return {
      phone: '',
      password: '',
      moneyNum: '',
      feeMoney: 0,
      cover: false,
      show: true,
      hidden: false,
      money: 0,
      countMoney: 0
    }
  },
  filters: {
    point: function (value) {
      value = Number(value)
      return value.toFixed(2)
    }
  },
  computed: {
    ...mapGetters([
      'userInfo',
      'userToken'
    ])
  },
  methods: {
    tixian () {
      if (this.moneyNum === '' || this.password === '') {
        Toast('请正确填写信息')
        return false
      }
      this.cover = true
    },
    sureTx () {
      this.$ajax.post('/api/withdrawApply/createBuyerApply', {
        withdrawAmount: this.moneyNum,
        userId: this.userInfo.buyerUserAccountId,
        withdrawPassword: md5(this.password)
      }).then((data) => {
        if (data.data.code === '200') {
          Toast(data.data.message)
          this.$router.push({ name: 'submit', query: { state: 1 } })
        } else {
          Toast(data.message)
        }
      }).catch((err) => {
        console.log(err)
        Toast('未知错误')
      })
    },
    // 提现手续费的获取
    change () {
      if (this.moneyNum > this.$route.query.money) {
        Toast('输入金额不能大于可提现本金')
        this.moneyNum = ''
        return false
      }
      this.$ajax.post('/api/withdrawApply/feeCalculate', {
        withdrawAmount: this.moneyNum
      }).then((data) => {
        let res = data.data
        if (res.code === '200') {
          this.money = res.data.actualAmount
          this.feeMoney = res.data.feeAmount
          this.countMoney = res.data.withdrawAmount
        } else {
          Toast(res.message)
        }
      }).catch((err) => {
        console.log(err)
        Toast('未知错误')
      })
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
  .moneyBank
    margin-top 1.2rem
    background #ffffff
    padding-top 1.8rem
    .flex
      display flex
      justify-content space-between
      font-size 1.2rem
      color #666666
      .bankName
        font-size 1.4rem
        color #08090a
        padding-left 1.6rem
      .right
        padding-right 1.6rem
    .first
      padding-bottom 1.75rem
    .flex .benjin
      margin-top 1.5rem
      padding-right 1.6rem
    .two
      margin-top 0.4rem
      padding-left 0.8rem
    .money
      margin-top 1.2rem
      padding-left 1.6rem
      font-size 1.2rem
      color #666666
      .top
        margin-top 0.8rem
    .yanpass
      padding-left 1.6rem
      margin-top 0.5rem
      border-bottom 1px solid #d4d5d8
      .get
        width 4.8rem
        height 3.4rem
        border 1px solid #08090A
        line-height 3.4rem
        color #08090A
        border-radius 3px
        margin-right 1.6rem
        text-align center
      .gray
        border 1px solid #d4d5d8
        color #d4d5d8
  .cover
    width 100%
    height 100%
    position fixed
    top 0
    left 0
    background rgba(0, 0, 0, 0.5)
    .content
      width 24rem
      height 17.4rem
      background #ffffff
      text-align center
      margin 0 auto
      margin-top 50%
      color #666666
      font-size 1.4rem
      h3
        padding-top 2.8rem
        font-size 2rem
        color #08090A
      .tishi
        margin-top 1.7rem
      .work
        margin-top 2rem
        border-top 1px solid #D4D5D8
        padding-top 1.7rem
        font-size 1.6rem
        color #08090A
        .work_1
          border-right 1px solid #d4d5d8
          padding-right 5rem
        .work_2
          margin-left 4rem
          color #ff3341
  .guize
    margin-top 1.6rem
    text-align center
    color #000000
    font-size 1.2rem
    text-decoration underline
</style>