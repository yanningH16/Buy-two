<template>
  <div class="reg">
    <div class="group">
      <div class="input border-bottom-1px">
        <input type="text" v-model="userName" placeholder="姓名(请与收款卡号名一致)" @input="input">
      </div>
      <div class="input border-bottom-1px">
        <input type="number" v-model="phone" placeholder="手机号" @input="input">
      </div>
      <div class="input haveButton border-bottom-1px">
        <input type="number" v-model="keyNum" placeholder="验证码" @input="input">
        <span class="border-1px" @click="getMessage" v-show="!showCanClick">{{ timeout }}</span>
        <span class="border-1px" v-show="showCanClick">{{ timeout }}</span>
      </div>
      <div class="input border-bottom-1px">
        <input type="password" v-model="password" placeholder="密码" @input="input">
      </div>
      <div class="input border-bottom-1px">
        <input type="text" v-model="weChat" placeholder="常用微信号" @input="input">
      </div>
    </div>
    <div class="buttons">
      <span class="btn" :class="{'btn-gray': !isOk}" @click="sureToReg">注册</span>
    </div>
    <p class="toLogin" @click="$router.push({name: 'login'})">去登录</p>
  </div>
</template>
<script type="text/ecmascript-6">
import { Toast } from 'mint-ui'
import md5 from 'md5'
export default {
  name: 'reg',
  data () {
    return {
      timeout: '获取',
      isOk: false,
      userName: '',
      phone: '',
      keyNum: '',
      password: '',
      weChat: '',
      inviteCode: '',
      showCanClick: false
    }
  },
  methods: {
    toReg () {
      this.$ajax.post('/api/buyerAccount/invite/register', {
        userName: this.userName,
        telephone: this.phone,
        password: md5(this.password),
        wechatNum: this.weChat,
        inviteCode: this.$route.query.inviteCode
      }).then((data) => {
        if (data.data.code === '200') {
          Toast({
            message: '注册成功!',
            position: 'bottom'
          })
          this.$router.push({ name: 'bindTbAccount', query: { buyerAccountId: data.data.data.buyerAccountId } })
        } else if (data.data.code === '1005') {
          Toast({
            message: '该用户已经注册',
            position: 'bottom'
          })
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
    input () {
      if ((/^1[34578]\d{9}$/).test(this.phone) && this.userName !== '' && this.keyNum !== '' && this.password !== '' && this.weChat !== '') {
        this.isOk = true
      } else {
        this.isOk = false
      }
    },
    sureToReg () {
      if (!(/^1[34578]\d{9}$/).test(this.phone)) {
        Toast({
          message: '请输入手机号码',
          position: 'bottom'
        })
      } else if (this.userName === '') {
        Toast({
          message: '请输入姓名',
          position: 'bottom'
        })
      } else if (this.keyNum === '') {
        Toast({
          message: '请输入验证码',
          position: 'bottom'
        })
      } else if (this.password === '') {
        Toast({
          message: '请输入密码',
          position: 'bottom'
        })
      } else if (this.weChat === '') {
        Toast({
          message: '请输入微信号',
          position: 'bottom'
        })
      } else {
        if (this.isOk) {
          // 验证可以修改
          this.testMessage()
        }
      }
    },
    // 获取短信接口
    getMessage () {
      let reg = /^1[34578]\d{9}$/
      if (this.timeout === '获取' && reg.test(this.phone)) {
        this.showCanClick = true
        this.$ajax.post('/api/config/sms/sendSms', {
          type: 2,
          telephone: this.phone
        }).then((data) => {
          if (data.data.code === '200') {
            this.getkey()
          } else {
            Toast({
              message: data.data.message,
              position: 'bottom'
            })
          }
        }).catch((err) => {
          console.log(err)
        })
      } else {
        Toast({
          message: '请输入手机号码',
          position: 'bottom'
        })
      }
    },
    // 验证验证码
    testMessage () {
      this.$ajax.post('/api/config/sms/vertify', {
        type: 2,
        telephone: this.phone,
        code: this.keyNum
      }).then((data) => {
        if (data.data.code === '200') {
          this.toReg()
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
    getkey () {
      let left = 60
      let timeset = setInterval(() => {
        left--
        this.timeout = left + ' s'
        if (left === 0) {
          clearInterval(timeset)
          this.timeout = '获取'
          this.showCanClick = false
        }
      }, 1000)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.reg
  width 100%
  height 100%
  overflow auto
  .group
    margin-top 1.2rem
    background #ffffff
    padding-left 1.6rem
    .input
      height 1.4rem
      padding-top 1.8rem
      padding-bottom 1.8rem
      input
        font-size 1.4rem
        line-height 1
        outline none
    .haveButton
      position relative
      input
        width 50%
      span
        position absolute
        top 0.8rem
        right 1.6rem
        border-radius 0.2rem
        width 4.8rem
        height 3.4rem
        line-height 3.4rem
        text-align center
        color #999999
        font-size 1.4rem
      .active
        border 0.5px solid #B7B9BF
        color #000000
  .buttons
    margin-top 0.4rem
    padding 1.6rem
  .toLogin
    margin-top 1rem
    font-size 1.2rem
    color #666666
    text-align center
</style>