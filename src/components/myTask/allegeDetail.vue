<template>
  <div class="allegeDetail">
    <ul class="cont">
      <li class="border-bottom-1px">
        <span>处理状态</span>
        <strong>{{this.$route.query.status}}</strong>
      </li>
      <!-- <li class="border-bottom-1px">
        <span>订单编号</span>
        <strong>RFT23654789321</strong>
      </li> -->
      <li class="border-bottom-1px">
        <span>申述时间</span>
        <strong>{{this.obj.applyTime}}</strong>
      </li>
      <li class="border-bottom-1px">
        <span>申述原因</span>
        <strong>{{this.obj.complainReason}}</strong>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'allegeDetail',
  data () {
    return {
      obj: {}
    }
  },
  created () {
    this.sureToPost()
  },
  methods: {
    sureToPost () {
      this.$ajax.post('/api/buyer/complain/getComplainDetail', {
        messageComplainId: this.$route.query.id
      }).then((data) => {
        console.log(data)
        if (data.data.code === '200') {
          this.obj = {
            applyTime: data.data.data.applyTime,
            complainReason: data.data.data.complainReason
          }
        } else {
          // Toast(data.data.message)
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.allegeDetail
  width 100%
  height 100%
  overflow auto
  background #EFF0F2
  .cont
    padding-top 1rem
    li
      background #ffffff
      padding 1.6rem
      display flex
      strong
        flex 1
        text-align right
        color #666666
        font-size 1.2rem
        line-height 1.6rem
      span
        flex 1
        font-size 1.4rem
        color #08090A
</style>