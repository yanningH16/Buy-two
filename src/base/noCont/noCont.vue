<template>
  <div class="noCont">
    <img v-if="!inivited" src="../../assets/images/noContainer.svg" alt="">
    <p v-if="!inivited">暂无数据</p>
    <img class="head" v-if="inivited" src="../../assets/images/icon_user.svg" alt="">
    <p v-if="inivited">对不起
      <br />您还没有资格做推广
    </p>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'noCont',
  props: {
    inivited: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.noCont
  padding 10rem 0
  background #ffffff
  text-align center
  width 100%
  height 100%
  position fixed
  img
    width 10rem
    height 10rem
  .head
    width 8rem
    height 8rem
  p
    font-size 1.4rem
    margin-top 1rem
    line-height 2rem
    color #666666
</style>