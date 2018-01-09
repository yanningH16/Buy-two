<template>
  <div class="active">
    <img class="bg" src="./img/bg.png" alt="">
    <div class="top">
      <div class="head">
        <img src="../../assets/images/headImgsssss.jpg" alt="">
      </div>
      <div class="name">
        <img src="./img/headCont.png" alt="">
        <p>
          <strong>{{ nameObj.name }}</strong>
          <br />
          <span>邀请你参加赚金活动</span>
        </p>
      </div>
    </div>
    <div class="bottom">
      <img class="bgs" src="./img/bgs.png" alt="">
      <img class="bg888" src="./img/888.png" alt="">
      <img @click="toReg" class="bgButtons" src="./img/button.png" alt="">
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import { Toast } from 'mint-ui'
export default {
  name: 'active',
  data () {
    return {
      bgImg: require('./img/bg.png'),
      nameObj: {}
    }
  },
  methods: {
    getName () {
      this.$ajax.post('/api/invite/getNameByInviteCode', {
        inviteCode: this.$route.query.invitedCode
      }).then((data) => {
        let res = data.data
        if (res.code === '200') {
          this.nameObj = res.data
        } else {
          Toast(res.message)
        }
      }).catch((err) => {
        console.error(err)
      })
    },
    toReg () {
      this.$router.push({ name: 'reg', query: { inviteCode: this.$route.query.invitedCode } })
    }
  },
  mounted () {
    this.getName()
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.active
  width 100%
  height 100%
  overflow hidden
  padding 0.5rem
  box-sizing border-box
  display flex
  flex-direction column
  position relative
  .bg
    position absolute
    z-index -1
    top 0
    left 0
    width 100%
    height 100%
  .top
    height 15rem
    .head
      height 5rem
      text-align center
      img
        width 6rem
        height 6rem
        border-radius 50%
        border 1px solid #ff3341
        transform translate3d(0, 2.5rem, 0)
    .name
      height 10rem
      text-align center
      position relative
      img
        position absolute
        top 0
        left 0
        z-index -1
        width 100%
        height 100%
      p
        font-size 1.4rem
        position absolute
        bottom 1rem
        left 0
        right 0
        margin 0 auto
        strong
          color #ff3341
          line-height 3rem
          font-weight bold
        span
          color #666666
  .bottom
    margin-top 1rem
    position relative
    flex 1
    .bgs
      position absolute
      top 0
      left 0
      width 100%
    .bg888
      position absolute
      top 0
      left 0
      width 100%
    .bgButtons
      position absolute
      bottom 3rem
      left 0
      width 100%
</style>