<template>
<div>
  <div class="content">
    <h2 class="border-bottom-1px">佣金提现规则</h2>
    <ul>
      <li><span></span>提现50金,扣除手续费2金,实际到账48元</li>
      <li><span></span>提现100金,实际到账100元</li>
      <li><span></span>提现200金,奖励2金,实际到账202元</li>
      <li><span></span>提现300金,奖励3金,实际到账303元</li>
      <li><span></span>提现400金,奖励4金,实际到账404元</li>
      <li><span></span>提现500金,奖励5金,实际到账505元</li>
      <li><span></span>提现600金,奖励6金,实际到账606元</li>
      <li><span></span>提现700金,奖励7金,实际到账707元</li>
      <li><span></span>提现800金,奖励8金,实际到账808元</li>
      <li><span></span>提现900金,奖励9金,实际到账909元</li>
      <li><span></span>提现1000金,奖励10金,实际到账1010元</li>
    </ul>
  </div>
</div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'yongText',
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../assets/stylus/mixin.styl'
  @import '../../assets/stylus/font.styl'
.content
  padding 2rem 2.6rem 1.6rem
  h2
    font-size 1.6rem
    color #08090a
    padding-bottom 1.2rem
  ul
    margin-top 2rem
    font-size 1.4rem
    li
      padding-bottom 2rem
      span 
        width 5px
        height 5px
        background black
        border-radius 50%  
        display inline-block
        vertical-align middle
        margin-right 0.3rem
</style>