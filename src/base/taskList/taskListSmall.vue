<template>
  <div>
    <div class="wrap">
      <div class="shopName">
        <h2>任务信息</h2>
      </div>
      <div class="shopConten">
        <img :src="obj.imgSrc" alt="" class="picImg">
        <div class="shopText">
          <p class="shopName">商品的名字名字名字就能打开附件二</p>
          <p>垫付本金(元)&nbsp;
            <span class="color">{{obj.myMoney}}</span>
          </p>
          <p class="yongjin">佣金收益(元)&nbsp;
            <span class="color">{{obj.yongMoney}}</span>
          </p>
        </div>
      </div>
      <div class="detail">
        <div class="detail_first">
          <p>
            <span v-if="obj.task===0">子</span>任务编号
            <span>{{obj.taskNumber}}</span>
          </p>
          <p class="copy">复制</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'taskList',
  props: {
    obj: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.wrap
  background white
  padding-left 1.6rem
  margin-bottom 1.2rem
  .shopName
    padding-bottom 1.6rem
    margin-top 2rem
    h2
      width 17rem
      font-size 1.6rem
      color #08090a
  .shopConten
    display flex
    justify-content flex-start
    .picImg
      width 8rem
      height 8rem
    .shopText
      margin-top -2%
      margin-left 1.6rem
      font-size 1.2rem
      color #666666
      .shopName
        font-size 1.4rem
        color #08090A
        width 17.2rem
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
      .color
        color #E6A545
      .yongjin
        margin-top 1.25rem
  .detail
    padding-bottom 1.2rem
    margin-top 1.5rem
    font-size 1.2rem
    color #666666
    .detail_first
      display flex
      justify-content space-between
      .copy
        margin-right 1.6rem
        font-size 1rem
        border 1px solid #383a3f
        padding 4px 8px
        border-radius 3px
        cursor pointer
</style>