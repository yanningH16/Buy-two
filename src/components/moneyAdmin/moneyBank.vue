<template>
  <div class="wrap">
    <div class="moneyBank">
      <div class="flex first border-bottom-1px">
        <p class="bankName">提现到银行卡</p>
        <p class="right">中信银行 {{personName | name}} {{bankCard | phonePwd}}</p>
      </div>
      <div class="flex two border-bottom-1px">
        <mt-field label="" placeholder="输入可提现金额" type="tel" v-model="moneyNum" style="width:15rem;padding-left:0.8rem"></mt-field>
        <p class="benjin">
          <span>可提现本金(元):</span>
          <span>421.23</span>
        </p>
      </div>
      <div class="money">
        <p>实际到账金额为:
          <span>20.00</span>
        </p>
        <p class="top">当前提现手续费为:
          <span>30</span>%</p>
        <p class="border-bottom-1px">
          <mt-field label="" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        </p>
      </div>
      <div class="flex yanpass">
        <mt-field label="" placeholder="输入手机验证码" type="tel" v-model="phone"></mt-field>
        <span class="get" @click="get" v-show="show">获取</span>
        <span class="get gray" v-show="hidden">{{time}}</span>
      </div>
    </div>
    <mt-button size="large" type="danger" style="margin-top:2rem" @click="tixian">提现</mt-button>
    <router-link :to="{name:'yongText'}">
      <div class="guize">
        <p>本金提现规则</p>
      </div>
    </router-link>
    <div class="cover" v-show="cover">
      <div class="content">
        <h3>核对金额</h3>
        <p class="tishi">本次提现金额:
          <span>200</span>元</p>
        <p style="margin-top:1rem">实际到账金额:
          <span>180</span>元</p>
        <div class="work">
          <span class="work_1">取消</span>
          <span class="work_2">确认提现</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'evalute',
  data () {
    return {
      phone: '',
      password: '',
      moneyNum: '',
      cover: false,
      show: true,
      hidden: false,
      time: 60,
      bankCard: '45446145631655686856654654654654654656',
      personName: '张三啊'
    }
  },
  created () {
  },
  methods: {
    tixian () {
      // this.cover = true
      this.$router.push({ name: 'submit' })
    },
    get () {
      this.show = false
      this.hidden = true
      let timeset = setInterval(() => {
        this.time--
        if (this.time === 0) {
          clearInterval(timeset)
          this.time = 60
          this.show = true
          this.hidden = false
        }
      }, 1000)
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