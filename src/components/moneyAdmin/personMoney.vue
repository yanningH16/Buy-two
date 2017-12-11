<template>
  <div class="personMoney">
    <div style="background:#ffffff">
      <div class="conten" v-for="item in 3" :key="item">
        <div>
          <p v-if="shopState===1" class="top">
            <span>本金返款</span>-
            <span class="overflow">夏季新款男士家乐福Joe</span>
          </p>
          <p v-if="shopState===2" class="top">
            <span>备用金支取</span>
          </p>
          <p v-if="shopState===3" class="top">
            <span>提现</span>
          </p>
          <p v-if="state===1" class="font">
            <em>+</em>
            <span>200</span>
            <i>元</i>
          </p>
          <p v-if="state===2" class="font green">
            <em>-</em>
            <span>200</span>
            <i>元</i>
          </p>
        </div>
        <div class="time border-bottom-1px">
          <p>2017-10-10 11:20</p>
          <p style="margin-right:1.6rem">余额:
            <span>100.00</span>元</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'
export default {
  name: 'userCenter',
  data () {
    return {
      state: 2,
      shopState: 2,
      pageSize: 5
    }
  },
  computed: {
    ...mapGetters([
      'userInfo',
      'userToken'
    ])
  },
  created () {
    this.taskList(1, this.pageSize)
  },
  methods: {
    taskList (pageNo, pageSize) {
      this.$ajax.post('/api/userFund/getBuyerCommissionFundFlows', {
        pageNo: pageNo,
        pageSize: pageSize,
        buyerUserAccountId: this.userInfo.buyerUserAccountId
      }).then((data) => {
        console.log(data)
        let res = data.data
        if (res.code === '200') {
          // let arr = []
          // for (let word of res.data) {
          //   let obj = {
          //     jdTask: word.taskTypeDetail || '暂无数据',
          //     slot: word.status || '暂无数据',
          //     shopName: word.productName || '暂无数据',
          //     wchat: word.wechatNum || '暂无数据',
          //     imgSrc: word.productPicUrl || '暂无数据',
          //     myMoney: word.payment || '暂无数据',
          //     yongMoney: word.commision || '暂无数据',
          //     taskNumber: word.sellerTaskDayId || '暂无数据',
          //     city: word.postCity || '暂无数据',
          //     money: word.jdMonthIncome || '暂无数据',
          //     sellerUserId: word.buyerUserAccountId || '暂无数据',
          //     btn: word.status || '暂无数据',
          //     prom: word.status || '暂无数据',
          //     buyerTaskId: word.buyerTaskId
          //   }
          //   arr.push(obj)
          // }
          // this.tableData = arr
        } else {
          this.$message({
            type: 'error',
            message: res.message
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