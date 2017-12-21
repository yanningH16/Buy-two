<template>
  <div class="moneyAdmin" ref="myTask">
    <!-- 上部分 -->
    <header>
      <div>
        <p class="availab">可提现拥金 (单位:元)</p>
        <p class="detail" :class="{'isactive':click}" @click="btn">佣金明细</p>
      </div>
      <div class="money">
        <h2>{{money}}</h2>
        <span @click="takeMoney">佣金转本金</span>
      </div>
    </header>
    <p class="title">转本金明细</p>
    <div class="content border-bottom-1px" v-for="(item,index) in tableData" :key="index">
      <div>
        <p class="first">{{item.fundsFlowId}}</p>
        <p class="green first_1">到账成功</p>
      </div>
      <div class="numbers">
        <p class="data">{{item.gmtModify}}</p>
        <p class="money">
          <span>{{item.income||item.pay}}</span> 元</p>
      </div>
    </div>
    <div v-if="tableData.length===0" class="nocont">
      <noCont></noCont>
    </div>
    <div class="spinnerWrap" v-show="showMore">
      <div class="spinner">
        <mt-spinner type="fading-circle" color="rgba(0,0,0,0.8)" :size="20"></mt-spinner>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import { Loadmore, Toast, Spinner, InfiniteScroll, MessageBox } from 'mint-ui'
import Vue from 'vue'
import { mapGetters } from 'vuex'
import NoCont from '../../base/noCont/noCont'
Vue.use(InfiniteScroll)
Vue.component(Loadmore.name, Loadmore, Spinner.name, Spinner)
export default {
  name: 'evalute',
  components: {
    NoCont
  },
  data () {
    return {
      click: false,
      topStatus: '',
      money: 0,
      pageSize: 6,
      tableData: [],
      showMore: false,
      pageNo: 1,
      pageNos: 1
    }
  },
  computed: {
    ...mapGetters([
      'userInfo',
      'userToken'
    ])
  },
  mounted () {
    this.userMoney()
    this.userMoneyDetail(1, this.pageSize)
    this.$refs.myTask.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    // 进入页面后进行信息的获取 获取钱的数量
    userMoney () {
      this.$ajax.post('/api/userFund/getBuyerUserFund', {
        buyerUserAccountId: this.userInfo.buyerUserAccountId
      }).then((data) => {
        console.log(data)
        let res = data.data
        if (res.code === '200') {
          this.money = res.data.availableCommissionAmount
        } else {
          Toast(res.message)
        }
      }).catch((err) => {
        console.log(err)
        Toast('未知错误')
      })
    },
    // 进入页面后进行信息的获取 提现明细的资金流水
    userMoneyDetail (type) {
      this.$ajax.post('/api/userFund/getBuyerFundFlowsByUsageType', {
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        usageType: ['3'],
        buyerUserAccountId: this.userInfo.buyerUserAccountId,
        fundsFlowType: ['TYP_BUYER_COMMISSION_PAY']
      }).then((data) => {
        console.log(data)
        let res = data.data
        if (res.code === '200') {
          let arr = []
          for (let word of res.data.fundsFlows) {
            let obj = {
              fundsFlowId: word.fundsFlowId,
              gmtModify: word.gmtModify,
              income: word.income || '',
              pay: word.pay || ''
            }
            arr.push(obj)
          }
          if (type) {
            this.tableData = this.tableData.concat(arr)
          } else {
            this.tableData = arr
          }
          this.showMore = false
          this.pageNos = Math.ceil(res.data.totalCount / this.pageSize)
        } else {
          Toast(res.message)
        }
      }).catch((err) => {
        console.log(err)
        Toast('未知错误')
      })
    },
    takeMoney () {
      if (this.money === 0) {
        Toast('无可提现的佣金')
        return false
      }
      if (!(this.userInfo.bankName || this.userInfo.bankUserName || this.userInfo.bankCardNo)) {
        MessageBox({
          title: '未完成设置',
          message: '请先完成银行卡绑定与提现密码设置',
          confirmButtonText: '前去绑定',
          confirmButtonClass: 'sureAlert'
        }).then((data) => {
          this.$router.push({ name: 'withdrawSet' })
        })
      } else if (!this.userInfo.withdrawPassword) {
        MessageBox({
          title: '未完成转本金设置',
          message: '请先完成提现密码设置',
          confirmButtonText: '前去设置',
          confirmButtonClass: 'sureAlert'
        }).then((data) => {
          this.$router.push({ name: 'withdrawSet2' })
        })
      } else {
        this.$router.push({ name: 'yongBank', query: { money: this.money } })
      }
    },
    btn () {
      this.click = true
      this.$router.push({ name: 'yongDetail' })
    },
    handleScroll () {
      let scrollTop = this.$refs.myTask.scrollTop
      let clientHeight = this.$refs.myTask.clientHeight
      let scrollHeight = this.$refs.myTask.scrollHeight
      if ((scrollHeight - clientHeight - scrollTop <= 10) && (this.pageNos > this.pageNo) && !this.showMore) {
        console.log(scrollTop, clientHeight, scrollHeight)
        this.showMore = true
        this.pageNo++
        setTimeout(() => {
          this.userMoneyDetail(1)
        }, 600)
      }
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
  position relative
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
        width 8.3rem
        height 2.7rem
        border 0.5px solid #666666
        font-size 1.2rem
        line-height 2.7rem
        text-align center
        border-radius 3px
        margin-top 1.8rem
        color #666666
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
  .nocont
    position fixed
    width 100%
    height 100%
  .spinnerWrap
    background #ffffff
    // margin-top 5px
    .spinner
      text-align center
      width 28px
      height 28px
      margin 0 auto
</style>