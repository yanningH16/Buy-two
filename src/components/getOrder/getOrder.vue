<template>
  <div class="getOrder getOrderBg">
    <ul class="top">
      <li>当前接单方案
        <span @click="$router.push({name: 'accountLink',query: {getMore: 1}})" style="float:right;color:#FFFFFF;font-size:1rem">赚取更多</span>
      </li>
      <li class="point">
        <span>淘宝/天猫</span>
        <span>京东</span>
      </li>
    </ul>
    <div class="bottom" v-if="packageObj.actualLeftNum!=0">
      <h3>你有一个新的任务包</h3>
      <ul class="boxContent">
        <li class="first">
          <div class="imgWrap">
            <img v-for="(item, index) in (packageObj ? JSON.parse(packageObj.imageUrls) : [])" :style="{ 'top': 5*index+'px', 'left': 5*index+'px' }" :src="item" :key="index" alt="">
          </div>
          <div>
            <h6>任务类型:</h6>
            <p v-if="packageObj.jdNum">
              <i class="jdIcon"></i> 京东垫付X{{ packageObj.jdNum }}</p>
            <p v-if="packageObj.taobaoNum">
              <i class="taobaoIcon"></i> 淘宝垫付X{{ packageObj.taobaoNum }}</p>
            <p v-if="packageObj.tianmaoNum">
              <i class="tianmaoIcon"></i> 天猫垫付X{{ packageObj.tianmaoNum }}</p>
          </div>
        </li>
        <li class="first two">
          <div class="line">
            <p>佣金收益(元)</p>
            <p class="money">{{ packageObj.totalCommission }}</p>
          </div>
          <div>
            <p>垫付本金(元)</p>
            <p class="money">{{ packageObj.totalCapital }}</p>
          </div>
        </li>
      </ul>
      <ul class="title">
        <li class="border-right-1px" @click="toDo('cancel')" style="color:#666">
          <span>取消</span>
        </li>
        <li class="color" @click="toDo('toDoTask')" style="color:white">
          <span>去做任务</span>
        </li>
      </ul>
    </div>
    <!-- 第二种未点亮的状态 -->
    <div class="bottom text" v-if="packageObj.actualLeftNum==0">
      <div class="text_1">
        <p>哎呦,不错呦!</p>
        <p>点亮自己告诉平台我要做活动</p>
      </div>
      <button class="btnss" @click="toLightMe" v-show="!userInfo.buyerIdentify">点亮自己</button>
      <button class="btngray" disabled v-show="userInfo.buyerIdentify">已点亮</button>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import { Toast } from 'mint-ui'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'getOrder',
  data () {
    return {
      packageObj: {},
      taskNumObj: {}
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
        case 'cancel':
          this.$router.push({ name: 'cancel' })
          break
        case 'needTask':
          this.$router.push({ name: 'needTask' })
          break
        case 'toDoTask':
          this.toGetPackage()
          break
        default:
          break
      }
    },
    // 领取该任务包
    toGetPackage () {
      this.$ajax.post('/api/order/buyerAcceptPackage', {
        assignedUserId: this.userInfo.buyerUserAccountId,
        platformPackageId: this.packageObj.platformPackageId
      }).then((data) => {
        if (data.data.code === '200') {
          if (this.packageObj.taobaoNum || this.packageObj.tianmaoNum) {
            this.$router.push({ name: 'taobaoTask' })
          } else {
            this.$router.push({ name: 'myTask' })
          }
        } else {
          Toast({
            message: data.data.message,
            position: 'bottom'
          })
          this.$router.push({ name: 'needTask' })
        }
      }).catch((err) => {
        Toast({
          message: err,
          position: 'bottom'
        })
      })
    },
    getPackage () {
      this.$ajax.post('/api/order/getBuyerRecivedPackage', {
        assignedUserId: this.userInfo.buyerUserAccountId
      }).then((data) => {
        if (data.data.code === '200') {
          if (data.data.data) {
            this.packageObj = data.data.data
          } else {
            this.packageObj = {}
          }
        } else {
          Toast({
            message: data.data.message,
            position: 'bottom'
          })
        }
      }).catch((err) => {
        Toast({
          message: err,
          position: 'bottom'
        })
      })
    },
    toLightMe () {
      this.$ajax.post('/api/buyerAccount/changeIdentify', {
        buyerAccountId: this.userInfo.buyerUserAccountId,
        identify: 1
      }).then((data) => {
        if (data.data.code === '200') {
          this.yes = false
          this.refresh()
        } else {
          Toast({
            message: data.data.message,
            position: 'bottom'
          })
        }
      }).catch((err) => {
        Toast({
          message: err,
          position: 'bottom'
        })
      })
    },
    // 刷新用户信息
    refresh () {
      this.$ajax.post('/api/buyerAccount/refresh', {
        telephone: this.userInfo.telephone
      }).then((data) => {
        if (data.data.code === '200') {
          this.setUserInfo(data.data.data)
        } else {
          Toast({
            message: data.data.message,
            position: 'bottom'
          })
        }
      }).catch((err) => {
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
        Toast({
          message: err,
          position: 'bottom'
        })
      })
    },
    ...mapActions([
      'setUserInfo'
    ])
  },
  mounted () {
    this.getPackage()
    // this.getTaskNum()
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.getOrder
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
          display inline-block
          vertical-align middle
          width 1.4rem
          height 1.4rem
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
  .imgWrap
    position relative
    width 8rem
    height 8rem
    overflow hidden
    img
      position absolute
      width 100%
      height 100%
</style>
