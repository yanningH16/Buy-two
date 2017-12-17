<template>
  <div class="personMoney" ref="myTask">
    <div style="background:#ffffff">
      <div class="conten" v-for="(item,index) in tableData" :key="index">
        <div>
          <!-- <p v-if="shopState===1" class="top">
            <span>本金返款</span>-
            <span class="overflow">夏季新款男士家乐福Joe</span>
          </p> -->
          <p v-if="shopState===2" class="top">
            <span>{{item.content}}
              <span style="color:#ff3341" v-if="item.fundsFlowType===1">(冻结)</span>
            </span>
          </p>
          <!-- <p v-if="shopState===3" class="top">
            <span>提现</span>
          </p> -->
          <p v-if="item.income" class="font">
            <em>+</em>
            <span>{{item.income}}</span>
            <i>元</i>
          </p>
          <p v-if="item.pay" class="font green">
            <em>-</em>
            <span>{{item.pay}}</span>
            <i>元</i>
          </p>
        </div>
        <div class="time border-bottom-1px">
          <p>{{item.gmtModify}}</p>
          <p style="margin-right:1.6rem">余额:
            <span>{{item.availableCommission}}</span>元</p>
        </div>
      </div>
      <div class="spinnerWrap" v-show="showMore">
        <div class="spinner">
          <mt-spinner type="fading-circle" color="rgba(0,0,0,0.8)" :size="20"></mt-spinner>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { Toast, InfiniteScroll, Spinner } from 'mint-ui'
Vue.use(InfiniteScroll)
Vue.component(Spinner.name, Spinner)
export default {
  name: 'userCenter',
  data () {
    return {
      shopState: 2,
      pageSize: 7,
      tableData: [],
      pageNo: 1,
      showMore: false,
      pageNos: 1,
      freeze: false
    }
  },
  computed: {
    ...mapGetters([
      'userInfo',
      'userToken'
    ])
  },
  mounted () {
    this.userMoneyDetail()
    this.$refs.myTask.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    userMoneyDetail (type) {
      this.$ajax.post('/api/userFund/getBuyerCommissionFundFlows', {
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        buyerUserAccountId: this.userInfo.buyerUserAccountId
      }).then((data) => {
        console.log(data)
        let res = data.data
        if (res.code === '200') {
          let arr = []
          for (let word of res.data.fundsFlows) {
            let obj = {
              content: word.content,
              gmtModify: word.gmtModify,
              income: word.income || '',
              pay: word.pay || '',
              availableCommission: word.availableCommission,
              fundsFlowType: word.fundsFlowType === 'TYP_BUYER_COMMISSION_FREEZE' ? 1 : 0
            }
            arr.push(obj)
          }
          if (type === 1) {
            // concat() 方法用于连接两个或多个数组。
            this.tableData = this.tableData.concat(arr)
          } else {
            this.tableData = arr
          }
          this.showMore = false
          this.pageNos = Math.ceil(res.data.totalCount / this.pageSize)
          console.log(this.pageNos, this.pageNo)
        } else {
          Toast(res.message)
        }
      }).catch((err) => {
        console.log(err)
        Toast('未知错误')
      })
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
.personMoney
  background #EFF0F2
  width 100%
  height 100%
  overflow auto
  .spinnerWrap
    background #ffffff
    // margin-top 5px
    .spinner
      text-align center
      width 28px
      height 28px
      margin 0 auto
  .conten
    margin-top 1rem
    background #ffffff
    padding-top 2rem
    padding-left 1.6rem
    div
      display flex
      justify-content space-between
      p
        font-size 1.2rem
        color #75787f
      .top
        font-size 1.4rem
        color #08090a
        .overflow
          width 8rem
          display inline-block
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
      .font
        font-size 2rem
        color #ff3341
        padding-right 1.6rem
        i
          font-size 1.2rem
          color #08009a
      .green
        color #00cc88
    .time
      margin-top 0.8rem
      padding-bottom 1.75rem
</style>