<template>
  <div class="bindJdAccount">
    <h2>
      <i class="jdIcon"></i>
      绑定京东帐号
    </h2>
    <div class="cont">
      <h6>案例</h6>
      <ul class="imgs">
        <li>
          <img @click="show(helpImg)" :src="helpImg" alt="">
          <!-- <p>帐号截图</p> -->
        </li>
        <!-- <li>
          <img @click="show(accountImg)" :src="accountSetImg" alt="">
          <p>帐号截图</p>
        </li>
        <li>
          <img @click="show(accountImg)" :src="plusImg" alt="">
          <p>帐号截图</p>
        </li> -->
      </ul>
    </div>
    <div @click="showImg=false" class="imgLook" v-if="showImg">
      <img :src="showUrl" alt="">
    </div>
    <div class="cont">
      <h6>上传截图</h6>
      <ul class="uploadShot">
        <li>
          <upload :myimgs="img1" :max="1" :isShow="false"></upload>
          <p>帐号截图</p>
        </li>
        <li>
          <upload :myimgs="img2" :max="1" :isShow="false"></upload>
          <p>帐号设置截图</p>
        </li>
        <li>
          <upload :myimgs="img3" :max="1" :isShow="false"></upload>
          <p>plus截图</p>
        </li>
      </ul>
    </div>
    <div class="buttons">
      <span class="btn" @click="bindAccount">提交</span>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Upload from '../../base/taskStep/upload'
import { Toast } from 'mint-ui'
import { mapGetters } from 'vuex'
export default {
  name: 'bindJdAccount',
  components: {
    Upload
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  data () {
    return {
      img1: [],
      img2: [],
      img3: [],
      showUrl: '',
      helpImg: require('./img/help.png'),
      showImg: false
    }
  },
  methods: {
    show (imgUrl) {
      this.showUrl = imgUrl
      this.showImg = true
    },
    bindAccount () {
      if (this.img1.length === 0 || this.img2.length === 0 || this.img3.length === 0) {
        Toast({
          message: '请上传完整截图',
          position: 'bottom'
        })
      } else {
        this.$ajax.post('/api/buyerAccount/bindJDAccount', {
          accountUrl: this.img1[0] || '',
          accountSettingUrl: this.img2[0] || '',
          plusUrl: this.img3[0] || '',
          buyerAccountId: this.$route.query.buyerAccountId
        }).then((data) => {
          if (data.data.code === '200') {
            sessionStorage.setItem('bindJdAccountObj', JSON.stringify(data.data.data))
            this.$router.push({ name: 'addWechat', query: { weChatObj: 1 } })
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
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.bindJdAccount
  width 100%
  height 100%
  overflow auto
  background #EFF0F2
  h2
    font-size 2rem
    color #08090A
    line-height 2.4rem
    padding 0 1.6rem
    margin 1.6rem 0
    i
      float left
      vertical-align middle
      line-height 2.4rem
      width 2.4rem
      height 2.4rem
      margin-right 1rem
  .cont
    background #ffffff
    padding 1.6rem
    margin-bottom 1.2rem
    h6
      font-size 1.4rem
      color #08090A
    .imgs
      // display flex
      // justify-content space-around
      // text-align center
      li
        // flex 1
        >img
          width 6rem
          height 6rem
          margin-top 1.6rem
        p
          font-size 1.2rem
          color #666666
          margin-top 1rem
    .uploadShot
      margin-top 1.6rem
      p
        font-size 1.2rem
        color #666666
        margin-top 1rem
  .imgLook
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    background rgba(0, 0, 0, 0.8)
    z-index 9999999
    overflow auto
    img
      position absolute
      top 0
      left 0
      right 0
      bottom 0
      margin auto
      max-width 100%
  .buttons
    padding 2rem
</style>