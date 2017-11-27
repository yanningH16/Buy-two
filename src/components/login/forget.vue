<template>
  <div class="forget">
    <div class="group border">
      <div class="input border">
        <input type="number" v-model="phone" placeholder="输入手机号" @input="input" @blur="blur">
      </div>
      <div class="input haveButton">
        <input type="number" v-model="keyNum" placeholder="输入验证码" @input="input" @blur="blur">
        <span @click="getkey">{{ timeout }}</span>
      </div>
    </div>
    <div class="group border">
      <div class="input border">
        <input type="password" v-model="pass1" placeholder="输入新密码" @input="input" @blur="blur">
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
      let reg = /^1[34578]\d{9}$/
      if (this.timeout === '获取' && reg.test(this.phone)) {
        let left = 60
        let timeset = setInterval(() => {
          left--
          this.timeout = left + ' s'
          if (left === 0) {
            clearInterval(timeset)
            this.timeout = '获取'
          }
        }, 1000)
      } else {
        Toast({
          message: '请输入手机号码',
          position: 'bottom'
        })
      }
    },
    input () {
      if ((/^1[34578]\d{9}$/).test(this.phone) && this.keyNum !== '' && this.pass1 !== '' && this.pass2 !== '' && this.pass1 === this.pass2) {
        this.isOk = true
      }
    },
    blur () {

    },
    sure () {
      if (this.isOk) {
        // 验证可以修改
      }
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
        border 0.5px solid #B7B9BF
        border-radius 0.2rem
        width 4.8rem
        height 3.4rem
        line-height 3.4rem
        text-align center
        color #999999
        font-size 1.4rem
  .buttons
    margin-top 0.4rem
    padding 1.6rem
</style>