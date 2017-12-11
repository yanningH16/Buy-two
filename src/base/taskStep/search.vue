<template>
  <div class="search">
    <h2>{{ title }}</h2>
    <ul class="cont">
      <li>
        <span>排序方式</span>
        <p>{{ condition[0] }}</p>
      </li>
      <li>
        <span>折扣和服务</span>
        <p>{{ condition[1] }}</p>
      </li>
      <li>
        <span>品牌</span>
        <p>{{ condition[2] }}</p>
      </li>
      <li>
        <span>发货地</span>
        <p>{{ condition[3] }}</p>
      </li>
    </ul>
    <div class="buttons">
      <span class="border-1px" @click="alert=true">找不到商品？</span>
    </div>
    <div class="alert" v-if="alert">
      <div class="tip">
        <h2>提示</h2>
        <p>找不到商品？可以刷新关键词再试试查找商品</p>
        <h3 class="red" @click="lookMore">再找找</h3>
        <h3 @click="giveup">放弃该任务</h3>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'search',
  data () {
    return {
      alert: false
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    condition: {
      type: Array,
      default: ['综合排序', '无', '0.00-0.00元', '全国']
    }
  },
  methods: {
    giveup () {
      this.$emit('giveup')
      this.alert = false
    },
    lookMore () {
      this.$emit('lookMore')
      this.alert = false
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.search
  font-size 1.4rem
  color #08090A
  h2
    font-size 1.6rem
    line-height 1
  .cont
    margin-top 1rem
    padding 1rem
    li
      display flex
      span
        width 7rem
        line-height 3rem
        vertical-align top
        color #75787F
        margin-right 1.6rem
      p
        flex 1
        line-height 3rem
        vertical-align top
  .buttons
    text-align center
    margin-top 0.4rem
    span
      display inline-block
      border-radius 0.2rem
      line-height 2.9rem
      width 10.7rem
  .alert
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    background rgba(8, 9, 10, 0.6)
    animation fade 0.2s ease-in
    transition 0.2s
    @keyframes fade
      from
        opacity 0
      to
        opacity 1
    .red
      color #FF3341
    .tip
      position absolute
      top 0
      left 0
      right 0
      bottom 0
      margin auto
      background #ffffff
      border-radius 2px
      width 24rem
      height 22.2rem
      text-align center
      color #08090A
      animation scale 0.2s ease-in
      transition 0.2s
      @keyframes scale
        from
          transform scale(0)
        to
          transform scale(1)
      h2
        font-size 2rem
        line-height 1
        margin-top 2.8rem
      p
        padding 1.6rem
        font-size 1.4rem
        line-height 1.8rem
        vertical-align top
        color #666666
      h3
        font-size 1.6rem
        line-height 5rem
        margin-top 0.5px
        border-top 1px solid #D4D5D8
</style>