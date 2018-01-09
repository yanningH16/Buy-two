<template>
  <div class="addWechat">
    <p class="common">备注：平台确认已添加您的微信号后您才可以接单</p>
    <ul class="cont">
      <li>
        <h3>请您复制如下信息添加备注</h3>
      </li>
      <li>
        <strong>{{ weChatObj.memo || '暂无备注' }}</strong>
        <span class="border-1px copy" @click="doCopy" :data-clipboard-text='weChatObj.memo'>复制</span>
      </li>
      <li>
        <img :src="weChatObj.wechatPicId" alt="erCode">
      </li>
      <li>
        <h2>微信号: {{ weChatObj.wechatNum }}</h2>
        <h3>扫码加好友或者
          <br /> 复制添加该微信号为好友
        </h3>
      </li>
    </ul>
    <div class="footer">
      <span class="btn" @click="toCenter">我已确认添加了微信</span>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'
import { Toast, MessageBox } from 'mint-ui'
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
      MessageBox.confirm('确认已经复制了备注并提交了微信添加申请?').then((action) => {
        this.$router.push({ name: 'submit', query: { addWechat: 1 } })
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    if (this.$route.query.weChatObj) {
      let obj = JSON.parse(sessionStorage.getItem('bindJdAccountObj'))
      this.weChatObj = obj
      this.weChatObj.memo = obj.name
      this.weChatObj.wechatPicId = obj.wechatUrl
      this.weChatObj.wechatNum = obj.wechatId
    } else {
      this.getWechat()
    }
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
      margin-top 1.2rem
      margin-bottom 2rem
      font-size 1.4rem
      line-height 2.2rem
      color #08090A
    h2
      margin-top 2rem
      font-size 1.6rem
      line-height 2.2rem
      color #08090A
    img
      display inline-block
      width 13.4rem
      height 13.4rem
    strong
      line-height 3.4rem
      font-size 2rem
      margin-right 2rem
      font-weight bold
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