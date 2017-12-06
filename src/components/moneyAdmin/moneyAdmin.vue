<template>
  <div class="moneyAdmin">
    <!-- 上部分 -->
    <header>
      <div>
        <p class="availab">可提现本金 (单位:元)</p>
        <p class="detail" :class="{'isactive':click}" @click="btn">本金明细</p>
      </div>
      <div class="money">
        <h2>100.00</h2>
        <span @click="takeMoney">提现</span>
      </div>
    </header>
    <p class="title">提现明细</p>
    <mt-loadmore :bottom-method="loadTop" @bottom-status-change="handleTopChange">
      <div class="content border-bottom-1px" v-for="item in 10" :key="item">
        <div>
          <p class="first">tx444644</p>
          <p class="first_1" v-if="state===1">处理中</p>
          <p class="first_1 green" v-else-if="state===2">到账成功</p>
          <p class="first_1 red" v-else>提现失败
            <span>银行卡有误</span>
          </p>
        </div>
        <div class="numbers">
          <p class="data">2017-09-10 21:30</p>
          <p class="money">
            <span>310.00</span> 元</p>
        </div>
      </div>
      <div slot="bottom" class="mint-loadmore-bottom">
        <span v-show="topStatus === 'loading'">Loading...</span>
      </div>
    </mt-loadmore>
  </div>
</template>
<script type="text/ecmascript-6">
import { MessageBox, Loadmore } from 'mint-ui'
import Vue from 'vue'
Vue.component(Loadmore.name, Loadmore)
export default {
  name: 'evalute',
  data () {
    return {
      state: 2,
      click: false,
      topStatus: ''
    }
  },
  methods: {
    takeMoney () {
      if (this.state === 1) {
        MessageBox({
          title: '未完成提现设置',
          message: '未完成提现设置不能提现',
          confirmButtonText: '前去设置',
          confirmButtonClass: 'sureAlert'
        }).then((data) => {
          // 点击确认后出发的事件
          alert(111)
        })
      } else {
        this.$router.push({ name: 'moneybank' })
      }
    },
    btn () {
      this.click = true
      this.$router.push({ name: 'personMoney' })
    },
    loadBottom () {
      this.allLoaded = true
      // this.$refs.loadmore.onBottomLoaded()
    },
    loadTop () {
      // this.$refs.loadmore.onBottomLoaded()
    },
    // 底部数据发生变化的回调函数
    handleTopChange (status) {
      this.topStatus = status
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.moneyAdmin
  background #EFF0F2
  width 100%
  height 100%
  overflow auto
  header
    height 10rem
    background #1B1C1F
    padding 1.65rem 1.6rem 3rem 2rem
    color #ffffff
    div
      display flex
      justify-content space-between
      .availab
        font-size 1.2rem
        color #75787f
      .detail
        font-size 1rem
      .isactive
        color green
    .money
      margin-top 3rem
      h2
        font-size 6rem
      span
        display inline-block
        width 4.7rem
        height 2.7rem
        border 0.5px solid #ffffff
        font-size 1.2rem
        line-height 2.7rem
        text-align center
        border-radius 3px
        margin-top 1.8rem
  .title
    color #08090a
    margin-top 1.6rem
    margin-left 1.1rem
    padding-bottom 1.6rem
  .content
    background #ffffff
    padding 1.6rem 1.7rem
    div
      display flex
      justify-content space-between
      .first
        font-size 1.4rem
        color #08090a
      .first_1
        font-size 1rem
        color #e6a545
      .green
        color #52CC68
      .red
        color #ff3341
    .numbers
      margin-top 0.8rem
      p
        color #75757f
        font-size 1.2rem
      .money
        color #08090a
        span
          font-size 2rem
      .data
        margin-top 0.6rem
</style>