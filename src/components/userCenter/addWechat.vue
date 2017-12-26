<template>
  <div class="addWechat">
    <p class="common">备注：平台确认已添加您的微信号后您才可以接单</p>
    <ul class="cont">
      <li>
        <h3>长按扫码添加该微信号为好友</h3>
      </li>
      <li>
        <img :src="weChatObj.wechatPicId" alt="erCode">
      </li>
      <li>
        <h3>或者<br />长按复制添加该微信号为好友</h3>
      </li>
      <li>
        <strong>{{ weChatObj.wechatNum }}</strong>
        <span class="border-1px copy" @click="doCopy" :data-clipboard-text='weChatObj.wechatNum'>复制</span>
      </li>
    </ul>
    <div class="footer">
      <span class="btn" @click="toCenter">确认并返回个人中心</span>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'
import { Toast } from 'mint-ui'
import Clipboard from 'clipboard'
export default {
  name: 'addWechat',
  data () {
    return {
      weChatObj: {}
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  methods: {
    getWechat () {
      this.$ajax.post('/api/platform/wechat/getByOperatorWechatId', {
        operatorWechatId: this.userInfo.operateWechatId || this.userInfo.wechatNum
      }).then((data) => {
        if (data.data.code === '200') {
          this.weChatObj = data.data.data
        } else {
          Toast({
            message: data.data.message,
            position: 'bottom'
          })
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    doCopy () {
      var clipboard = new Clipboard('.copy')
      clipboard.on('success', (e) => {
        Toast({
          message: '复制成功',
          position: 'bottom'
        })
      })
    },
    toCenter () {
      this.$router.push({ name: 'userCenter' })
    }
  },
  mounted () {
    this.getWechat()
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.addWechat
  width 100%
  height 100%
  overflow auto
  p
    height 3.6rem
    font-size 1.2rem
    line-height 3.6rem
    padding-left 1rem
    padding-right 1rem
    background #FFEBCC
    color #D17D00
  .cont
    text-align center
    h3
      margin-top 3.2rem
      margin-bottom 2rem
      font-size 1.4rem
      line-height 2.2rem
      color #08090A
    img
      display inline-block
      width 13.4rem
      height 13.4rem
    strong
      line-height 3.4rem
      font-size 2.4rem
      margin-right 2rem
      color #08090A
      vertical-align middle
    span
      display inline-block
      vertical-align middle
      border-radius 2px
      width 4.8rem
      height 3.3rem
      line-height 3.3rem
      text-align center
      font-size 1.4rem
  .footer
    margin-top 4rem
    padding 2rem 1.6rem
</style>