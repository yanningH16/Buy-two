<template>
  <div class="inputArea">
    <h2>{{ title }}</h2>
    <p>前去APP平台输入评价内容，长按复制粘贴</p>
    <div class="textarea">
      <!-- <textarea v-model="text" placeholder="商家给出的评价内容"></textarea> -->
      <p class="border-1px">{{ text }}</p>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'inputArea',
  data () {
    return {
    }
  },
  methods: {
    aaa () {
      return false
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.inputArea
  color #08090A
  h2
    font-size 1.6rem
    line-height 1
  p
    font-size 1.2rem
    color #666666
    margin-top 1.2rem
  .textarea
    position relative
    margin-top 2rem
    textarea, p
      width 100%
      height 14rem
      outline none
      box-sizing border-box
      padding 1.6rem
      resize none
      line-height 2.2rem
      font-size 1.4rem
      color #08090A
      border-radius 2px
</style>