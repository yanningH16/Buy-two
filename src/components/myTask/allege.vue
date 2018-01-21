<template>
  <div class="allege">
    <ul class="cont">
      <li class="border-bottom-1px" @click="$router.push({name: 'allegeDetail'})">
        <div class="left">
          <strong>unsfs45664564562564161145456415</strong>
          <p>2017-10-10 11:26:55</p>
        </div>
        <div class="right">
          <strong class="red">待审核</strong>
          <p>详情></p>
        </div>
      </li>
      <li class="border-bottom-1px" @click="$router.push({name: 'allegeDetail'})">
        <div class="left">
          <strong>unsfs45664564562564161145456415</strong>
          <p>2017-10-10 11:26:55</p>
        </div>
        <div class="right">
          <strong class="success">已处理</strong>
          <p>详情></p>
        </div>
      </li>
    </ul>
    <div class="buttons">
      <span class="btn" @click="$router.push({name: 'allegeAlert'})">我要申述</span>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'allege',
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.allege
  width 100%
  height 100%
  overflow hidden
  background #EFF0F2
  padding-top 1rem
  display flex
  flex-direction column
  .red
    color #FF3341
  .success
    color #00CC88
  .cont
    background #ffffff
    flex 1
    overflow auto
    li
      display flex
      padding 1.6rem
      .left
        flex 1
        strong
          display inline-block
          width 20rem
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
          font-size 1.4rem
          color #08090A
        p
          margin-top 0.8rem
          font-size 1.2rem
          color #75787F
      .right
        width 6rem
        min-width 6rem
        text-align right
        strong
          font-size 2rem
        p
          margin-top 0.6rem
          font-size 1.2rem
          color #666666
  .buttons
    padding 2rem
</style>