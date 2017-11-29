<template>
  <div class="personMoney">
    <div style="background:#ffffff">
      <div class="conten" v-for="item in 3" :key="item">
        <div>
          <p v-if="shopState===1" class="top">
            <span>佣金返款</span>-
            <span class="overflow">夏季新款男士家乐福Joe</span>
          </p>
          <p v-if="shopState===2" class="top">
            <span>转成本金</span>
          </p>
          <p v-if="state===1" class="font">
            <em>+</em>
            <span>200</span>
            <i>元</i>
          </p>
          <p v-if="state===2" class="font green">
            <em>-</em>
            <span>200</span>
            <i>元</i>
          </p>
        </div>
        <div class="time border-bottom-1px">
          <p>2017-10-10 11:20</p>
          <p style="margin-right:1.6rem">余额:
            <span>100.00</span>元</p>
        </div>
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
        padding-right 1.6rem
        i
          font-size 1.2rem
          color #08009a
      .green
        color #00cc88    
    .time
      margin-top 0.8rem
      padding-bottom 1.75rem
</style>