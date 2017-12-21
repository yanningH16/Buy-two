<template>
  <div class="check">
    <h2>{{ title }}</h2>
    <div class="cont">
      <div>
        <img :src="goodsImg" alt="pic">
      </div>
      <div class="right">
        <h3>{{ infoArr[0] }}</h3>
        <p>
          <span>店铺名称</span>
          <strong>{{ shopNameFormate }}</strong>
        </p>
        <p>
          <span>下单数量</span>
          <strong>{{ infoArr[2] }}</strong>
        </p>
        <p>
          <span>规格</span>
          <strong>{{ infoArr[3] }}</strong>
        </p>
        <p>
          <span>价格</span>
          <strong>{{ infoArr[4] }}</strong>
        </p>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'check',
  data () {
    return {
    }
  },
  computed: {
    shopNameFormate: function () {
      console.log(this.infoArr[1])
      let shopName = this.infoArr[1].split('')
      for (let i = 0; i < shopName.length; i++) {
        console.log(i)
        if (i % 2 !== 0) {
          shopName[i] = '※'
        }
      }
      shopName = shopName.join('')
      return shopName
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    goodsImg: {
      type: String,
      default: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511875719755&di=ab6dcb955b793b77820db79130a2f05d&imgtype=0&src=http%3A%2F%2Fdiy.qqjay.com%2Fu2%2F2014%2F0721%2F31d87362da0efcf126a487a049b1576e.jpg'
    },
    infoArr: {
      type: Array,
      default: []
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.check
  color #08090A
  h2
    font-size 1.6rem
    line-height 1
  .cont
    margin-top 2rem
    overflow hidden
    font-size 1.4rem
    >div
      float left
      width 14rem
      height 14rem
      img
        width 14rem
        height 14rem
        border-radius 2px
      h3
        margin-bottom 1.2rem
        padding-left 1.2rem
        padding-right 1.2rem
        line-height 3rem
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
      p
        margin-bottom 1.2rem
        padding-left 1.2rem
        display flex
        span
          flex 1
          color #75787F
        strong
          flex 1
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
    .right
      width calc(100% - 14rem)
</style>