<template>
  <div>
    <div class="wrap" v-for="(item,index) in datas" :key="index">
      <div class="header">
        <p>
          <em class="img"></em>
          <span class="jd">{{item.jdTask}}</span>
        </p>
        <p class="slot" v-if="item.slot==='1'">待下单</p>
        <p class="slot" v-else-if="item.slot==='3'">待商家确认并返还本金</p>
        <p class="slot" v-else-if="item.slot==='10'">待根据提示评价</p>
        <p class="slot" v-else-if="item.slot==='11'">待商家确认并返还佣金</p>
        <p class="slot gray" v-else-if="item.slot==='20'">已完成</p>
        <p class="slot gray" v-else-if="item.slot==='19'">已放弃</p>
        <p class="slot" v-else>已下单</p>
      </div>
      <div class="shopName">
        <h2>{{item.shopName}}</h2>
      </div>
      <div class="shopConten">
        <img :src="item.imgSrc" alt="" class="picImg" width="8rem" height="8rem">
        <div class="shopText">
          <p>垫付本金(元)&nbsp;
            <span class="color">{{item.myMoney}}</span>
          </p>
          <p class="yongjin">佣金收益(元) &nbsp;
            <span class="color">{{item.yongMoney}}</span>
          </p>
        </div>
      </div>
      <div class="detail">
        <div class="detail_first">
          <p>
            任务编号
            <span class="taskNumber">{{item.taskNumber}}</span>
          </p>
          <p class="copy" @click="doCopy" :data-clipboard-text='item.taskNumber'>复制</p>
        </div>
        <p class="detail_two" v-if="item.prom==='1'">请一定要签收后再评价哦~</p>
        <p class="detail_two red" v-else-if="item.prom==='1'||item.prom==='10'">驳回原因：
          <span>拍错商品</span>
        </p>
        <p class="detail_two red" v-if="item.proms==='10'">修改方案:
          <span>拍正确的商品</span>
        </p>
      </div>
      <div class="bottom">
        <p class="appraise" v-if="item.btn==='1'" @click="goTask(index)">去做任务</p>
        <p class="appraise" v-else-if="item.btn==='10'" @click="goTask(index)">去评价</p>
        <p class="appraise grey" v-else-if="item.btn==='20'" @click="goTask(index)">删除任务</p>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Clipboard from 'clipboard'
import { Toast } from 'mint-ui'
export default {
  name: 'taskList',
  props: {
    datas: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
    }
  },
  methods: {
    goTask (index) {
      this.$emit('myrouter', index)
    },
    doCopy () {
      var clipboard = new Clipboard('.copy')
      clipboard.on('success', (e) => {
        Toast('复制成功')
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.wrap
  background white
  padding-left 1.6rem
  // margin-bottom 1.2rem
  margin-top 1.2rem
  .header
    display flex
    justify-content space-between
    border-bottom 1px solid #D4D5D8
    padding-bottom 1.3rem
    padding-top 1.3rem
    .img
      width 1.5rem
      height 1.5rem
      background #ff3341
      display inline-block
      vertical-align middle
      border-radius 2px
    .jd
      display inline-block
      font-size 1.2rem
      color #000000
      margin-left 0.4rem
      vertical-align middle
    .slot
      font-size 1.2rem
      color #ff3341
      margin-right 1.6rem
    .gray
      color #666666
  .shopName
    border-bottom 1px solid #D4D5D8
    padding-bottom 1.2rem
    margin-top 2rem
    h2
      width 17rem
      font-size 1.4rem
      color #08090a
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
  .shopConten
    display flex
    justify-content flex-start
    margin-top 1.2rem
    .picImg
      width 8rem
      height 8rem
    .shopText
      margin-top 8%
      margin-left 1.6rem
      font-size 1.2rem
      .color
        color #E6A545
      .yongjin
        margin-top 1.25rem
  .detail
    border-top 1px solid #D4D5D8
    border-bottom 1px solid #D4D5D8
    padding-top 1.5rem
    padding-bottom 1.2rem
    margin-top 2rem
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
      .taskNumber
        display inline-block
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        width 14.5rem
        vertical-align top
    .detail_two
      margin-top 1.1rem
    .red
      color #ff3341
  .bottom
    padding-bottom 1.2rem
    overflow hidden
    .appraise
      float right
      margin-right 1.6rem
      font-size 1.4rem
      border 1px solid #ff3341
      padding 0.8rem 1.9rem
      cursor pointer
      color #ff3341
      margin-top 1.2rem
      border-radius 3px
    .grey
      border 1px solid #000000
      color #000000
</style>