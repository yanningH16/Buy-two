<template>
  <div class="login">
    <h2>手机号密码登录</h2>
    <div class="input">
      <input type="number" v-model="phone" @input="isInput" placeholder="输入手机号">
    </div>
    <div class="input">
      <input type="password" v-model="password" @input="isInput" placeholder="输入密码">
    </div>
    <div class="goIn">
      <button class="btn" :class="{'btn-gray': !canLogin}" @click="login">登录</button>
      <p @click="$router.push({name: 'forget'})">忘记密码</p>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import md5 from 'md5'
import { Toast } from 'mint-ui'
import { mapActions } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      canLogin: false,
      phone: '',
      password: ''
    }
  },
  methods: {
    login () {
      // 登录
      this.$ajax.post('/api/buyerAccount/login', {
        telephone: this.phone,
        password: md5(this.password)
      }).then((data) => {
        if (data.data.code === '200') {
          this.setUserInfo(data.data.data)
          this.setUserToken(data.headers.accesstoken)
          localStorage.setItem('__userAccount__', this.phone + '&&' + this.password)
          this.$router.push({ name: 'getOrder' })
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
    ...mapActions([
      'setUserInfo',
      'setUserToken'
    ]),
    isInput () {
      let reg = /^1[34578]\d{9}$/
      if (reg.test(this.phone) && this.password.length >= 6) {
        this.canLogin = true
      } else {
        this.canLogin = false
      }
    }
  },
  mounted () {
    this.isInput()
    if (localStorage.getItem('__userAccount__')) {
      let account = localStorage.getItem('__userAccount__')
      this.phone = account.split('&&')[0]
      this.password = account.split('&&')[1]
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.login
  width 100%
  height 100%
  box-sizing border-box
  background #ffffff
  overflow hidden
  padding-left 1.6rem
  padding-right 1.6rem
  color #08090A
  h2
    font-size 2rem
    margin-top 5.2rem
    margin-bottom 3rem
    text-align center
  .input
    height 1.4rem
    padding-top 1.8rem
    padding-bottom 1.8rem
    border-bottom 0.5px solid #D4D5D8
    input
      font-size 1.4rem
      height 1.4rem
      line-height 1.4rem
      width 100%
      outline none
  .goIn
    margin-top 2rem
    p
      color #08090A
      font-size 1.4rem
      line-height 1
      margin-top 1.6rem
      text-align center
    .btn
      outline none
      border none
</style>