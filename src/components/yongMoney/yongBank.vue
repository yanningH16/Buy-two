<template>
  <div class="wrap">
    <div class="moneyBank">
      <div class="flex two">
        <mt-field label="" placeholder="输入转本金金额" type="tel" v-model="moneyNum" style="width:15rem;padding-left:0.8rem"></mt-field>
        <p class="benjin">
          <span>可转出佣金(元):</span>
          <span>1.23</span>
        </p>
      </div>
      <div class="money">
        <p>实际到账金额为:
          <span>20.00</span>
        </p>
      </div>
      <div class="flex yanpass">
        <mt-field label="" placeholder="请输入密码" type="password" v-model="password" style="width:100%"></mt-field>
      </div>
    </div>
    <mt-button size="large" type="danger" style="margin-top:2rem" @click="tixian">转出</mt-button>
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
      personName: '鄢宁'
    }
  },
  methods: {
    tixian () {
      // this.cover = true
      this.$router.push({ name: 'submit' })
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
    // margin-top 1.2rem
    padding-top 1.8rem
    .flex
      display flex
      justify-content space-between
      font-size 1.2rem
      color #666666
      background #ffffff
    .flex .benjin
      margin-top 1.5rem
      padding-right 1.6rem
    .two
      padding-left 0.6rem
      // border-bottom 1px solid #d4d5d8
    .money
      margin-top 1.2rem
      padding-left 1.6rem
      font-size 1.2rem
      color #666666
      background #EFF0F2
      .top
        margin-top 0.8rem
    .yanpass
      padding-left 1.6rem
      margin-top 0.5rem
      // border-bottom 1px solid #d4d5d8
      span
        width 4.8rem
        height 3.4rem
        border 1px solid #08090A
        line-height 3.4rem
        color #08090A
        border-radius 3px
        margin-right 1.6rem
        text-align center
  .yongjin
    text-align center
    margin-top 1.6rem
    font-size 1.2rem
    color #000000
    text-decoration underline
</style>