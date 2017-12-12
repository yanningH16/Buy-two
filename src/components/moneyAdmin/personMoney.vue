<template>
  <div class="personMoney">
    <div style="background:#ffffff">
      <div class="conten" v-for="(item,index) in tableData" :key="index">
        <div>
          <p v-if="shopState===1" class="top">
            <span>本金返款</span>-
            <span class="overflow">夏季新款男士家乐福Joe</span>
          </p>
          <p v-if="shopState===2" class="top">
            <span>{{item.content}}</span>
          </p>
          <p v-if="shopState===3" class="top">
            <span>提现</span>
          </p>
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
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'
import { Toast } from 'mint-ui'
export default {
  name: 'userCenter',
  data () {
    return {
      shopState: 2,
      pageSize: 5,
      tableData: []
    }
  },
  computed: {
    ...mapGetters([
      'userInfo',
      'userToken'
    ])
  },
  created () {
    this.userMoneyDetail(1, this.pageSize)
  },
  methods: {
    userMoneyDetail (pageNo, pageSize) {
      this.$ajax.post('/api/userFund/getBuyerCommissionFundFlows', {
        pageNo: pageNo,
        pageSize: pageSize,
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
              availableCommission: word.availableCommission
            }
            arr.push(obj)
          }
          this.tableData = arr
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
.personMoney
  background #EFF0F2
  width 100%
  height 100%
  overflow auto
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