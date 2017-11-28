<template>
  <div class="findGoods">
    <h2>{{ title }}</h2>
    <ul class="text" v-if="!onlyTitle">
      <li>
        <span>搜索关键词</span>
      </li>
      <li>
        <p>{{ value }}</p>
      </li>
      <li>
        <i @click="refresh"></i>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'findGoods',
  data () {
    return {
    }
  },
  methods: {
    refresh () {
      this.$emit('refresh')
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    onlyTitle: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.findGoods
  h2
    font-size 1.6rem
    color #08090A
    line-height 1
  .text
    margin-top 1rem
    padding 1rem
    display flex
    justify-content space-between
    font-size 1.4rem
    li
      &:first-child
        min-width 7rem
      &:nth-child(2)
        flex 1
      &:last-child
        min-width 1.6rem
      p
        padding-left 1.6rem
        padding-right 2rem
        line-height 2.2rem
        color #08090A
      span
        color #75787F
        line-height 2.2rem
      i
        display inline-block
        width 1.6rem
        height 1.6rem
        font-size 1.6rem
        text-align center
        background red
</style>