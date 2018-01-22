<template>
  <div id="app">
    <router-view class="top" />
    <ul class="bottomNav" v-if="bottomNav">
      <router-link :to="{name:'getOrder'}">
        <li @click="first">
          <img v-if="active==0" src="./assets/images/jidan-2.svg" alt="">
          <img v-else src="./assets/images/jiedan.svg" alt="">
          <p v-if="active==0" style="color:#FF3341">接单</p>
          <p v-else>接单</p>
        </li>
      </router-link>
      <router-link :to="{name:'taobaoTask'}">
        <li @click="two">
          <img v-if="active==1" src="./assets/images/tao-2.svg" alt="">
          <img v-else src="./assets/images/Group 5.svg" alt="">
          <p v-if="active==1" style="color:#FF3341">淘宝</p>
          <p v-else>淘宝</p>
        </li>
      </router-link>
      <router-link :to="{name:'myTask'}">
        <li @click="three">
          <img v-if="active==2" src="./assets/images/jdIcon.svg" alt="">
          <img v-else src="./assets/images/Group 6.svg" alt="">
          <p v-if="active==2" style="color:#FF3341">京东</p>
          <p v-else>京东</p>
        </li>
      </router-link>
      <router-link :to="{name:'userCenter'}">
        <li @click="four">
          <img v-if="active==3" src="./assets/images/uesr_sel.svg" alt="">
          <img v-else src="./assets/images/icon_user.svg" alt="">
          <p v-if="active==3" style="color:#FF3341">我的</p>
          <p v-else>我的</p>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      active: 0
    }
  },
  computed: {
    bottomNav: function () {
      let bottom = false
      if (this.$route.name === 'getOrder' || this.$route.name === 'userCenter' || this.$route.name === 'myTask' || this.$route.name === 'taobaoTask') {
        bottom = true
      }
      return bottom
    }
  },
  methods: {
    first () {
      this.active = 0
    },
    two () {
      this.active = 1
    },
    three () {
      this.active = 2
    },
    four () {
      this.active = 3
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
      img
        width 2rem
        height 2rem
      p
        margin-top 0.5rem
</style>
