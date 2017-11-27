<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import './assets/stylus/index.styl'
#app
  width 100%
  height 100%
  overflow hidden
</style>
