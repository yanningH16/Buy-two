<template>
  <div class="forget">
    <div class="group border-bottom-1px">
      <div class="input border-bottom-1px">
        <input type="number" v-model="phone" placeholder="输入手机号" @input="input">
      </div>
      <div class="input haveButton">
        <input type="number" v-model="keyNum" placeholder="输入验证码" @input="input">
        <span class="border-1px" @click="getMessage">{{ timeout }}</span>
      </div>
    </div>
    <div class="group border-bottom-1px">
      <div class="input border-bottom-1px">
        <input type="password" v-model="pass1" placeholder="输入新密码" @input="input">
      </div>
      <div class="input">
        <input type="password" v-model="pass2" placeholder="再次输入新密码" @input="input" @blur="blur">
      </div>
    </div>
    <div class="buttons">
      <span class="btn" :class="{'btn-gray': !isOk}" @click="sure">确认</span>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import md5 from 'md5'
import { Toast } from 'mint-ui'
export default {
  name: 'forget',
  comments: {
    Toast
  },
  data () {
    return {
      timeout: '获取',
      phone: '',
      keyNum: '',
      pass1: '',
      pass2: '',
      isOk: false
    }
  },
  methods: {
    getkey () {
      let left = 60
      let timeset = setInterval(() => {
        left--
        this.timeout = left + ' s'
        if (left === 0) {
          clearInterval(timeset)
          this.timeout = '获取'
        }
      }, 1000)
    },
    input () {
      if ((/^1[34578]\d{9}$/).test(this.phone) && this.keyNum !== '' && this.pass1 !== '' && this.pass2 !== '' && this.pass1 === this.pass2) {
        this.isOk = true
      } else {
        this.isOk = false
      }
    },
    blur () {
      if (!(/^1[34578]\d{9}$/).test(this.phone)) {
        Toast({
          message: '请输入手机号码',
          position: 'bottom'
        })
      } else if (this.keyNum === '') {
        Toast({
          message: '请输入验证码',
          position: 'bottom'
        })
      } else if (this.pass1 === '') {
        Toast({
          message: '请输入新密码',
          position: 'bottom'
        })
      } else if (this.pass2 === '') {
        Toast({
          message: '请再次输入新密码',
          position: 'bottom'
        })
      } else if (this.pass1 !== this.pass2) {
        Toast({
          message: '密码不一致',
          position: 'bottom'
        })
      }
    },
    // 获取短信接口
    getMessage () {
      let reg = /^1[34578]\d{9}$/
      if (this.timeout === '获取' && reg.test(this.phone)) {
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
          this.fixPass()
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
    sure () {
      if (this.isOk) {
        // 验证可以修改
        this.testMessage()
      }
    },
    fixPass () {
      this.$ajax.post('/api/buyerAccount/resetPassword', {
        newPassword: md5(this.pass1),
        telephone: this.phone
      }).then((data) => {
        if (data.data.code === '200') {
          Toast({
            message: '修改成功!',
            position: 'bottom'
          })
          this.$router.push({ name: 'login' })
        } else {
          Toast({
            message: data.data.message,
            position: 'bottom'
          })
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.forget
  background #F5F5F5
  width 100%
  height 100%
  overflow hidden
  box-sizing border-box
  .border
    border-bottom 0.5px solid #D4D5D8
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
</style>