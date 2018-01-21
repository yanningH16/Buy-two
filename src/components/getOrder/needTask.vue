<template>
  <div class="wrap">
    <div class="pic">
      <img src="../../assets/images/Group 2.svg" alt="">
      <p>你来晚了</p>
      <p>任务已经被别人抢走了</p>
      <button class="btnss" @click="task">我要报名做任务</button>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'cancel',
  data () {
    return {
    }
  },
  methods: {
    task () {
      this.$router.push({ name: 'getOrder' })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.wrap
  background #F5F5F5
  width 100%
  height 100%
  .pic
    width 100%
    text-align center
    margin-top 7.8rem
    img
      padding-bottom 2rem
    p
      color #666666
      font-size 1.2rem
      line-height 2rem
</style>