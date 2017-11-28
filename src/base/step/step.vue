<template>
  <ul class="step">
    <li class="stepItem" v-for="(item, index) in stepArr" :key="index">
      <strong :class="{'active': stepIndex==index}">{{ index+1 }}&nbsp;&nbsp;{{ item }}</strong>
      <div class="split" v-if="index!==0">
        <span></span>
        <b></b>
      </div>
    </li>
  </ul>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'step',
  props: {
    stepArr: {
      type: Array,
      default: []
    },
    stepIndex: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.step
  overflow hidden
  height 6rem
  display flex
  li
    flex 1
    background #ffffff
    color #666666
    font-size 1.2rem
    line-height 6rem
    text-align center
    position relative
    .active
      color #08090A
    .split
      position absolute
      top 0
      left -1rem
      width 2rem
      height 5.9rem
      background #D4D5D8
      overflow hidden
      span
        position absolute
        left 0
        top 0
        width 0
        height 0
        border-top 3rem solid #ffffff
        border-right 2rem dashed transparent
        border-bottom 3rem solid #ffffff
        border-left 2rem dashed transparent
      b
        position absolute
        top 0
        left -1px
        width 0
        height 0
        border-top 3rem dashed transparent
        border-right 2rem dashed transparent
        border-bottom 3rem dashed transparent
        border-left 2rem solid #ffffff
</style>