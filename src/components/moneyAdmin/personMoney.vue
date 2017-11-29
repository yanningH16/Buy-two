<template>
  <div class="personMoney">
    <div class="conten">
      <div>
        <p v-if="shopState===1" class="top">
          <span>本金返款</span>-
          <span class="overflow">夏季新款男士家乐福Joe</span>
        </p>
        <p v-if="shopState===2" class="top">
          <span>备用金支取</span>
        </p>
        <p v-if="state===1" class="font">
          <em>+</em>
          <span>200</span>元</p>
        <p v-if="state===2" class="font">
          <em>-</em>
          <span >200</span>元</p>
      </div>
      <div>
        <p>2017-10-10 11:20</p>
        <p>余额: <span>100.00</span>元</p>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'userCenter',
  data () {
    return {
      state: 1,
      shopState: 1
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.personMoney
  background #EFF0F2
  width 100%
  height 100%
  overflow auto
  .conten
    margin-top 1rem
    background #ffffff
    padding-top 2rem
    padding-left 1.6rem
    div
      display flex
      justify-content space-between
      p
        font-size 1.2rem
        color #75787f
      .top
        font-size 1.4rem
        color #08090a  
        .overflow
          width 8rem
          display inline-block
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
      .font
        font-size 2rem
        color #ff3341    
</style>