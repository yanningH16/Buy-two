<template>
  <div class="userCenter userCenterBg">
    <ul class="top">
      <li class="headImg">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511957696669&di=5bbc3ea76a7b62eae7dc82073b12b0a6&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201504%2F16%2F20150416H4223_vG4eY.jpeg" alt="">
        <b class="setI"><img src="../../assets/images/set.png" alt=""></b>
        <span @click="toDo('task')">设置</span>
      </li>
      <li class="userPhone">
        <span>{{ userInfo.telephone ? userInfo.telephone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2') : '******' }}</span>
        <i></i>
      </li>
    </ul>
    <div class="bottom">
      <ul class="title">
        <li class="border-right-1px" @click="toDo('yongjin')">
          <span>佣金收益(元)</span>
          <p>{{ moneyObj.availableCommissionAmount }}</p>
        </li>
        <li @click="toDo('benjin')">
          <span>本金总计(元)</span>
          <p>{{ moneyObj.availableCapitalAmount }}</p>
        </li>
      </ul>
      <ul class="cell">
        <li @click="toDo('bindAccount')">
          <b class="bangdingIcon"></b>
          <span>帐号绑定</span>
          <strong>
            <b v-if="0"></b>
            <i></i>
          </strong>
        </li>
        <li @click="toDo('myPush')">
          <b class="pushIcon"></b>
          <span>我的推广</span>
          <strong>
            <b v-if="0"></b>
            <i></i>
          </strong>
        </li>
        <li @click="toDo('help')">
          <b class="helpIcon"></b>
          <span>帮助与客服</span>
          <strong>
            <b v-if="0"></b>
            <i></i>
          </strong>
        </li>
        <li @click="toDo('setting')">
          <b class="complant"></b>
          <span>申诉</span>
          <strong>
            <b v-if="0"></b>
            <i></i>
          </strong>
        </li>
      </ul>
      <!-- <ul class="buttons">
        <li class="t" @click="toDo('task')">
          <span class="myTaskIcon"></span>
          <p>我的任务</p>
          <b v-if="taskNumObj.needOperateOrderCount!==0"></b>
        </li>
        <router-link :to="{name:'getOrder'}">
          <li class="c">
            <span class="userCenterIcon"></span>
            <p>个人中心</p>
          </li>
        </router-link>
      </ul> -->
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
        case 'task':
          this.$router.push({ name: 'userSet' })
          break
        case 'yongjin':
          this.$router.push({ name: 'yongMoney' })
          break
        case 'benjin':
          this.$router.push({ name: 'moneyAdmin' })
          break
        case 'bindAccount':
          this.$router.push({ name: 'accountLink' })
          break
        case 'setting':
          this.$router.push({ name: 'allege' })
          break
        case 'myPush':
          this.$router.push({ name: 'myPush' })
          break
        case 'help':
          this.$router.push({ name: 'help' })
          break
        default:
          break
      }
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
    height 17rem
    color #ffffff
    text-align center
    .headImg
      padding-top 2rem
      img
        width 7rem
        height 7rem
        border-radius 50%
      span
        vertical-align top
        position absolute
        right 2rem
        font-size 1rem
        color #B7B9BF
      .setI img
        width 20px
        height 20px
        vertical-align top
        position absolute
        right 4.5rem
        margin-top -0.5rem
    .userPhone
      padding 1.6rem 0
      font-size 1.6rem
  .bottom
    flex 1
    position relative
    background #F5F5F5
    border-top-left-radius 2rem
    border-top-right-radius 2rem
    .title
      position absolute
      display flex
      background #ffffff
      top -3.2rem
      left 0
      right 0
      width 24rem
      height 6.4rem
      margin auto
      padding 1.2rem
      box-sizing border-box
      border-radius 3.2rem
      box-shadow 0 6px 8px rgba(204, 204, 204, 0.3)
      li
        flex 1
        min-width 10.8rem
        box-sizing border-box
        padding 0 2rem
        span
          white-space nowrap
          font-size 1.2rem
          line-height 1
          color #666666
        p
          margin-top 0.8rem
          font-size 2rem
          line-height 1
          color #E6A545
          width 100%
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
    .cell
      padding 3.8rem 3.2rem
      li
        height 2.4rem
        margin-top 3.2rem
        font-size 1.6rem
        line-height 2.4rem
        overflow hidden
        b, span, strong, i
          vertical-align middle
        >b
          display inline-block
          width 2rem
          height 2rem
          font-size 2rem
          line-height 2rem
          color #333333
          margin-right 2.4rem
        span
          display inline-block
          font-size 1.6rem
          line-height 2rem
          color #000000
        strong
          float right
          height 2rem
          line-height 2rem
          >b
            display inline-block
            width 0.8rem
            height 0.8rem
            font-size 2rem
            line-height 2rem
            border-radius 50%
            background #FF3341
          >i
            position relative
            display inline-block
            width 2rem
            height 2rem
            &:after
              border solid 2px #999999
              border-bottom-width 0
              border-left-width 0
              content ' '
              top 1rem
              right 0.75rem
              position absolute
              width 5px
              height 5px
              -webkit-transform translateY(-50%) rotate(45deg)
              transform translateY(-50%) rotate(45deg)
    .buttons
      position absolute
      display flex
      justify-content space-between
      bottom 0
      left 0
      box-sizing border-box
      padding 2rem
      li
        min-width 4.8rem
        margin-left 4.5rem
        margin-right 4.5rem
        text-align center
        position relative
        span
          display inline-block
          width 4.4rem
          height 4.4rem
          line-height 4.4rem
          font-size 2rem
          border-radius 50%
          box-shadow 0 6px 8px rgba(204, 204, 204, 0.3)
        p
          font-size 1.2rem
          line-height 1
          margin-top 0.8rem
        b
          position absolute
          top 10px
          right 10px
          width 6px
          height 6px
          border-radius 50%
          background #ff3341
      .t
        color #999999
      .c
        color #333333
</style>
