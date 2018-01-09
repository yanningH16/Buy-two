<template>
  <div class="myPush">
    <ul class="myPushBox" v-if="!showNoCont">
      <li class="border-bottom-1px">
        <mt-cell class="title">
          <span class="text" slot="title">请复制以下链接分享给您要邀请的朋友</span>
        </mt-cell>
      </li>
      <li class="border-bottom-1px">
        <mt-cell class="title">
          <span class="text url" slot="title">{{ inivitedObj.inviteBuyerCode }}</span>
          <span class="copy border-1px" @click="doCopy" :data-clipboard-text='url'>复制</span>
        </mt-cell>
      </li>
      <li @click="toMyPush">
        <mt-cell class="title" is-link>
          <span class="text" slot="title">我已邀请</span>
        </mt-cell>
      </li>
    </ul>
    <p v-if="!showNoCont">
      备注:
      <br />1.邀请成功的人员越多，您的等级越高，能赚到的钱就更多。
      <br />2.请告知您的亲友，我们会在后续的活动中联系他们。
    </p>
    <noCont :inivited="true" v-if="showNoCont"></noCont>
  </div>
</template>
<script type="text/ecmascript-6">
import { Toast } from 'mint-ui'
import { mapGetters } from 'vuex'
import Clipboard from 'clipboard'
import NoCont from '../../base/noCont/noCont'
export default {
  name: 'myPush',
  components: {
    NoCont
  },
  data () {
    return {
      inivitedObj: {},
      showNoCont: true
    }
  },
  computed: {
    url: function () {
      let url = `这里有钱赚,速来注册!${this.inivitedObj.inviteBuyerCode}`
      return url
    },
    ...mapGetters([
      'userInfo'
    ])
  },
  methods: {
    doCopy () {
      var clipboard = new Clipboard('.copy')
      clipboard.on('success', (e) => {
        Toast({
          message: '复制成功',
          position: 'bottom'
        })
      })
    },
    toMyPush () {
      if (this.inivitedObj.inviteBuyerCode) {
        this.$router.push({ name: 'inivited', query: { code: this.inivitedObj.inviteBuyerCode.split('=')[1] } })
      } else {
        Toast({
          message: '你还没有邀请码',
          position: 'bottom'
        })
      }
    },
    getPush () {
      this.$ajax.post('/api/buyerAccount/getInviteCode', {
        buyerAccountId: this.userInfo.buyerUserAccountId
      }).then((data) => {
        console.log(data)
        if (data.data.code === '200') {
          this.inivitedObj = data.data.data
          this.showNoCont = false
        } else if (data.data.code === '1016') {
          this.inivitedObj = {}
          this.showNoCont = true
        } else {
          Toast({
            message: data.data.message,
            position: 'bottom'
          })
        }
      }).catch((err) => {
        console.error(err)
      })
    }
  },
  mounted () {
    this.getPush()
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.myPush
  width 100%
  height 100%
  overflow auto
  background #EFF0F2
  padding-top 1.2rem
  li
    background #ffffff
    .Asuccess
      color #52CC68
    .Aerror
      color #FF3341
    .Awaiting
      color #E6A545
    .title
      color #08090A
      min-height 5rem
      font-size 1.4rem
      .text
        font-size 1.4rem
      .copy
        padding 0.5rem
        font-size 1.4rem
      .url
        display inline-block
        max-width 22rem
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
  p
    padding 1rem
    font-size 1.2rem
    line-height 2rem
    color #666666
</style>