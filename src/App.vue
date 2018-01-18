<template>
  <div id="app">
    <router-view class="top" />
    <ul class="bottomNav" v-if="bottomNav">
      <li>
        <img src="./assets/images/bg_account.png" alt="">
        <p>接单</p>
      </li>
      <li>
        <img src="./assets/images/bg_account.png" alt="">
        <p>淘宝</p>
      </li>
      <li>
        <img src="./assets/images/bg_account.png" alt="">
        <p>京东</p>
      </li>
      <li>
        <img src="./assets/images/bg_account.png" alt="">
        <p>我的</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
  computed: {
    bottomNav: function () {
      let bottom = false
      if (this.$route.name === 'getOrder' || this.$route.name === 'userCenter') {
        bottom = true
      }
      return bottom
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
    li
      padding-bottom 0.65rem
      text-align center
      img
        width 3.7rem
        height 3.7rem
        p
        font-size 1rem
</style>
