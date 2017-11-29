<template>
  <div class="upImgs">
    <h2>{{ title }}</h2>
    <p>长按图片保存到本地</p>
    <div class="imgs">
      <img v-for="(item, index) in imgsArr" :key="index" :src="item" alt="pic">
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'upImgs',
  data () {
    return {
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    imgsArr: {
      type: Array,
      default: []
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.upImgs
  color #08090A
  h2
    font-size 1.6rem
    line-height 1
  p
    font-size 1.2rem
    color #666666
    margin-top 1.2rem
  .imgs
    overflow hidden
    margin-top 1.2rem
    img
      width 5.8rem
      height 5.8rem
      border-radius 2px
      float left
      margin 0.8rem
      &:first-child
        margin-left 0.4rem
      &:nth-child(4n)
        margin-right 0
</style>