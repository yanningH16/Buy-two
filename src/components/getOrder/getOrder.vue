<template>
  <div class="userCenter userCenterBg">
    <ul class="top">
      <li>当前接单方案
        <span style="float:right;color:#FFFFFF;font-size:1rem">赚取更多</span>
      </li>
      <li class="point">
        <span>淘宝/天猫</span>
        <span>京东</span>
      </li>
    </ul>
    <div class="bottom" v-show="true">
      <h3>你有一个新的任务包</h3>
      <ul class="boxContent">
        <li class="first">
          <div><img src="../../assets/images/bg_account.png" alt="" width="80px" height="80px"></div>
          <div>
            <h6>任务类型:</h6>
            <p>
              <i>猫</i> 天猫垫付X3</p>
            <p>
              <i>JD</i> 京东垫付X3</p>
          </div>
        </li>
        <li class="first two">
          <div class="line">
            <p>佣金收益</p>
            <p class="money">23.00</p>
          </div>
          <div>
            <p>佣金收益</p>
            <p class="money">23.00</p>
          </div>
        </li>
      </ul>
      <ul class="title">
        <li class="border-right-1px" @click="toDo('yongjin')" style="color:#666">
          <span>取消</span>
        </li>
        <li class="color" @click="toDo('benjin')" style="color:white">
          <span>去做任务</span>
        </li>
      </ul>
    </div>
    <!-- 第二种未点亮的状态 -->
    <div class="bottom text" v-show="false">
      <div class="text_1">
        <p>哎呦,不错呦!</p>
        <p>点亮自己告诉平台我要做活动</p>
      </div>
      <button class="btnss" @click="light" v-show="yes">点亮自己</button>
      <button class="btngray" disabled v-show="no">已点亮</button>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import { Toast } from 'mint-ui'
import { mapGetters } from 'vuex'
export default {
  name: 'userCenter',
  data () {
    return {
      moneyObj: {},
      taskNumObj: {},
      yes: true,
      no: false
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  methods: {
    toDo (where) {
      switch (where) {
        case 'task':
          this.$router.push({ name: 'myTask' })
          break
        case 'benjin':
          this.$router.push({ name: 'needTask' })
          break
        default:
          break
      }
    },
    light () {
      this.yes = false
      this.no = true
    },
    getMoney () {
      this.$ajax.post('/api/userFund/getBuyerUserFund', {
        buyerUserAccountId: this.userInfo.buyerUserAccountId
      }).then((data) => {
        if (data.data.code === '200') {
          this.moneyObj = data.data.data
        } else {
          Toast({
            message: data.data.message,
            position: 'bottom'
          })
        }
      }).catch((err) => {
        console.log(err)
        Toast({
          message: err,
          position: 'bottom'
        })
      })
    },
    getTaskNum () {
      this.$ajax.post('/api/order/search/buyerStatistics', {
        buyerUserId: this.userInfo.buyerUserAccountId
      }).then((data) => {
        if (data.data.code === '200') {
          this.taskNumObj = data.data.data
        } else {
          Toast({
            message: data.data.message,
            position: 'bottom'
          })
        }
      }).catch((err) => {
        console.log(err)
        Toast({
          message: err,
          position: 'bottom'
        })
      })
    }
  },
  mounted () {
    this.getMoney()
    this.getTaskNum()
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.userCenter
  width 100%
  height 100%
  overflow hidden
  display flex
  flex-direction column
  .top
    height 9rem
    color #75787F
    font-size 1.2rem
    padding 1.65rem 1rem 0rem 2rem
    .point
      margin-top 2.4rem
      span
        border 1px solid #B7B9BF
        border-radius 0.2rem
        width 7.4rem
        height 2.8rem
        display inline-block
        line-height 2.8rem
        text-align center
  .bottom
    flex 1
    position relative
    background #F5F5F5
    border-top-left-radius 2rem
    border-top-right-radius 2rem
    padding-left 2.4rem
    h3
      font-size 1.4rem
      color #333
      margin-top 2.4rem
    .boxContent
      width 27rem
      height 24rem
      background #ffffff
      border-radius 2px
      margin-top 2rem
      position relative
      .first
        display flex
        justify-content space-between
        padding 4rem 4.5rem 3.4rem 3.2rem
        font-size 1.2rem
        color #666
        h6
          font-size 1.4rem
          padding-bottom 0.5rem
        p
          line-height 2.35rem
        i
          background #ff3341
          color white
          padding 2px
      .two
        margin-top -5rem
        color #666
        .line
          border-right 1px solid #ccc
          padding-right 4.4rem
        .money
          font-size 2rem
          color #E6A545
    .title
      position absolute
      display flex
      background #ffffff
      bottom 10rem
      left -2rem
      right 0
      width 20rem
      height 3.6rem
      margin auto
      // padding 1.2rem
      box-sizing border-box
      border-radius 3.2rem
      box-shadow 0 6px 8px rgba(204, 204, 204, 0.3)
      font-size 1.4rem
      color #ffffff
      line-height 3.6rem
      text-align center
      li
        flex 1
        min-width 10.8rem
        box-sizing border-box
        padding 0 2rem
        span
          white-space nowrap
          font-size 1.2rem
          line-height 1
        p
          margin-top 0.8rem
          font-size 2rem
          line-height 1
          color #E6A545
          width 100%
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
      .color
        width 10rem
        height 3.6rem
        background #ff3341
        border-top-right-radius 3.2rem
        border-bottom-right-radius 3.2rem
        color white
        font-size 1.4rem
  .text
    text-align center
    color #666
    font-size 1.4rem
    line-height 2rem
    padding-left 0rem
    .text_1
      margin-top 11.5rem
</style>
