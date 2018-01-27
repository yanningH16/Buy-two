<template>
  <div id="app">
    <router-view class="top" />
    <ul class="bottomNav" v-if="bottomNav">
      <router-link :to="{name:'getOrder'}">
        <li>
          <img v-if="$route.name=='getOrder'" src="./assets/images/jidan-2.svg" alt="">
          <img v-else src="./assets/images/jiedan.svg" alt="">
          <p v-if="$route.name=='getOrder'" style="color:#FF3341">接单</p>
          <p v-else>接单</p>
        </li>
      </router-link>
      <li @click="taobaoTask">
        <img v-if="$route.name=='taobaoTask'" src="./assets/images/tao-2.svg" alt="">
        <img v-else src="./assets/images/Group 5.svg" alt="">
        <div class="cir" v-if="this.totelNumTian>0"></div>
        <p v-if="$route.name=='taobaoTask'" style="color:#FF3341">淘宝</p>
        <p v-else>淘宝</p>
      </li>
      <li @click="myTask">
        <img v-if="$route.name=='myTask'" src="./assets/images/jdIcon.svg" alt="">
        <img v-else src="./assets/images/Group 6.svg" alt="">
        <div class="cir" v-if="this.totelNum>0"></div>
        <p v-if="$route.name=='myTask'" style="color:#FF3341">京东</p>
        <p v-else>京东</p>
      </li>
      <router-link :to="{name:'userCenter'}">
        <li>
          <img v-if="$route.name=='userCenter'" src="./assets/images/uesr_sel.svg" alt="">
          <img v-else src="./assets/images/icon_user.svg" alt="">
          <p v-if="$route.name=='userCenter'" style="color:#FF3341">我的</p>
          <p v-else>我的</p>
        </li>
      </router-link>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      totelNum: 0,
      totelNumTian: 0
    }
  },
  created () {
    this.$ajax.post('/api/buyer/task/getTodoNumList', {
      buyerUserId: this.userInfo.buyerUserAccountId,
      shopType: '0'
    }).then((data) => {
      let res = data.data
      if (res.code === '200') {
        // 待评价
        this.totelNum = res.data.toFavorNum + res.data.toPlaceOrderNum
      }
    }).catch((err) => {
      console.log(err)
    })
    this.$ajax.post('/api/buyer/task/getTodoNumList', {
      buyerUserId: this.userInfo.buyerUserAccountId,
      shopType: '1,2'
    }).then((data) => {
      let res = data.data
      if (res.code === '200') {
        // 待评价
        this.totelNumTian = res.data.toFavorNum + res.data.toPlaceOrderNum
        console.log(this.totelNumTian)
      }
    }).catch((err) => {
      console.log(err)
    })
  },
  computed: {
    bottomNav: function () {
      let bottom = false
      if (this.$route.name === 'getOrder' || this.$route.name === 'userCenter' || this.$route.name === 'myTask' || this.$route.name === 'taobaoTask') {
        bottom = true
      }
      return bottom
    },
    ...mapGetters([
      'userInfo'
    ])
  },
  methods: {
    taobaoTask () {
      this.$router.push({ name: 'taobaoTask' })
    },
    myTask () {
      this.$router.push({ name: 'myTask' })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  width 100%
  height 100%
  overflow hidden
  display flex
  flex-direction column
  .bottomNav
    width 100%
    height 5.1rem
    min-height 5.1rem
    background #ffffff
    display flex
    justify-content space-around
    box-sizing border-box
    z-index 999
    li
      padding-bottom 0.65rem
      text-align center
      margin-top 0.8rem
      position relative
      img
        width 2rem
        height 2rem
      p
        margin-top 0.5rem
      .cir
        position absolute
        top -4px
        left 15px
        width 10px
        height 10px
        border-radius 50%
        background #ff3341
</style>
