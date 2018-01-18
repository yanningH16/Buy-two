<template>
  <div id="app">
    <router-view class="top" />
    <ul class="bottomNav">
      <li>
        <img src="./assets/images/logo.png" width="37px" height="37px" alt="">
        <p>接单</p>
      </li>
      <li>
        <img src="./assets/images/logo.png" width="37px" height="37px" alt="">
        <p>淘宝</p>
      </li>
      <li>
        <img src="./assets/images/logo.png" width="37px" height="37px" alt="">
        <p>京东</p>
      </li>
      <li>
        <img src="./assets/images/logo.png" width="37px" height="37px" alt="">
        <p>我的</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  width 100%
  height 100%
  overflow hidden
  display flex
  flex-direction column
  .top
    flex 1
  .bottomNav
    width 100%
    height 5rem
    background red
    display flex
    justify-content space-around
    box-sizing border-box
</style>
