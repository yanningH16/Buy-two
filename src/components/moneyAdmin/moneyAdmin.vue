<template>
  <div class="moneyAdmin" ref="myTask">
    <!-- 上部分 -->
    <header>
      <div>
        <p class="availab">可提现本金 (单位:元)</p>
        <p class="detail" :class="{'isactive':click}" @click="btn">本金明细</p>
      </div>
      <div class="money">
        <h2>{{money}}</h2>
        <span @click="takeMoney">提现</span>
      </div>
    </header>
    <p class="title">提现明细</p>
    <mt-loadmore :bottom-method="loadTop" @bottom-status-change="handleTopChange">
      <div class="content border-bottom-1px" v-for="(item,index) in tableData" :key="index">
        <div>
          <p class="first">{{item.withdrawApplyId}}</p>
          <p class="first_1" v-if="item.status==='0'">处理中</p>
          <p class="first_1 green" v-else-if="item.status==='1'">到账成功</p>
          <p class="first_1 red" v-else-if="item.status==='2'">提现失败
            <!-- <span>银行卡有误</span> -->
          </p>
        </div>
        <div class="numbers">
          <p class="data">{{item.gmtModify}}</p>
          <p class="money">
            <span>{{item.actualAmount}}</span> 元</p>
        </div>
      </div>
      <div class="spinnerWrap" v-show="showMore">
        <div class="spinner">
          <mt-spinner type="fading-circle" color="rgba(0,0,0,0.8)" :size="20"></mt-spinner>
        </div>
      </div>
    </mt-loadmore>
    <noCont v-if="tableData.length===0"></noCont>
  </div>
</template>
<script type="text/ecmascript-6">
import { MessageBox, Loadmore, Toast, InfiniteScroll, Spinner } from 'mint-ui'
import Vue from 'vue'
import { mapGetters } from 'vuex'
import NoCont from '../../base/noCont/noCont'
Vue.component(Spinner.name, Spinner, Loadmore)
Vue.use(InfiniteScroll)
export default {
  name: 'evalute',
  components: {
    NoCont
  },
  data () {
    return {
      state: 2,
      click: false,
      topStatus: '',
      money: 0,
      pageSize: 6,
      tableData: [],
      pageNo: 1,
      pageNos: 1,
      showMore: false
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
        let res = data.data
        if (res.code === '200') {
          this.money = res.data.availableCapitalAmount
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
      this.$ajax.post('/api/withdrawApply/getApplysByConditions', {
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        statusList: ['0', '1', '2'],
        buyerTelephoneOrName: this.userInfo.telephone
      }).then((data) => {
        let res = data.data
        if (res.code === '200') {
          let arr = []
          for (let word of res.data.withdrawApplys) {
            let obj = {
              withdrawApplyId: word.withdrawApplyId,
              gmtModify: word.gmtModify,
              status: word.status,
              actualAmount: word.actualAmount
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
        Toast('无可提现的金额')
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
          title: '未完成提现设置',
          message: '未完成提现密码设置不能提现',
          confirmButtonText: '前去设置',
          confirmButtonClass: 'sureAlert'
        }).then((data) => {
          this.$router.push({ name: 'withdrawSet2' })
        })
      } else {
        this.$router.push({ name: 'moneybank', query: { money: this.money } })
      }
    },
    btn () {
      this.click = true
      this.$router.push({ name: 'personMoney' })
    },
    handleScroll () {
      let scrollTop = this.$refs.myTask.scrollTop
      let clientHeight = this.$refs.myTask.clientHeight
      let scrollHeight = this.$refs.myTask.scrollHeight
      if ((scrollHeight - clientHeight - scrollTop <= 10) && (this.pageNos > this.pageNo) && !this.showMore) {
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
  .spinnerWrap
    background #ffffff
    // margin-top 5px
    .spinner
      text-align center
      width 28px
      height 28px
      margin 0 auto
</style>