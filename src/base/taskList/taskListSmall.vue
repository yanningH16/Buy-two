<template>
  <div>
    <div class="wrap">
      <div class="shopName">
        <h2>任务信息</h2>
      </div>
      <div class="shopConten">
        <img :src="infoImg" alt="" class="picImg">
        <div class="shopText">
          <p class="shopName">{{ infoArr[0] }}</p>
          <p>佣金收益(元)&nbsp;
            <span class="color">{{ infoArr[1] }}</span>
          </p>
          <p class="yongjin">垫付本金(元)&nbsp;
            <span class="color">{{ infoArr[2] }}</span>
          </p>
        </div>
      </div>
      <div class="detail">
        <div class="detail_first">
          <p>
            <span>子任务编号</span>
            <span>{{ infoArr[3] }}</span>
          </p>
          <span class="btn copy border-1px" @click="doCopy" :data-clipboard-text="infoArr[3]">复制</span>
        </div>
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
    infoArr: {
      type: Array,
      default: ['', '', '', '']
    },
    infoImg: {
      type: String,
      default: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511875719755&di=ab6dcb955b793b77820db79130a2f05d&imgtype=0&src=http%3A%2F%2Fdiy.qqjay.com%2Fu2%2F2014%2F0721%2F31d87362da0efcf126a487a049b1576e.jpg'
    }
  },
  data () {
    return {
    }
  },
  methods: {
    doCopy () {
      var clipboard = new Clipboard('.copy')
      clipboard.on('success', (e) => {
        Toast({
          message: '复制成功'
        })
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.wrap
  .shopName
    padding-bottom 1.6rem
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
    margin-top 1.5rem
    font-size 1.2rem
    color #666666
    .detail_first
      display flex
      justify-content space-between
      p
        span
          line-height 1.8rem
          vertical-align middle
          &:last-child
            display inline-block
            width 18rem
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
      .copy
        height 1.8rem
        width 3.6rem
        font-size 1rem
        line-height 1.8rem
        background #ffffff
        color #08090a
</style>