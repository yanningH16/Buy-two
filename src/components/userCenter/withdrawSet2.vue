<template>
  <div class="withdrawSet2">
    <div class="step">
      <step :stepArr="stepArr" :stepIndex="1"></step>
    </div>
    <ul class="cont">
      <li class="border-bottom-1px">
        <input type="number" v-model="phone" placeholder="输入手机号">
      </li>
      <li>
        <input style="width:50%;" type="number" v-model="keyNum" placeholder="输入验证码">
        <span class="get border-1px" @click="getMessage">{{ timeout }}</span>
      </li>
    </ul>
    <ul class="cont">
      <li class="border-bottom-1px">
        <input type="password" v-model="pass1" placeholder="输入提现密码">
      </li>
      <li>
        <input type="password" v-model="pass2" placeholder="再次输入密码">
      </li>
    </ul>
    <div class="footer">
      <span class="btn" @click="finsh">完成</span>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Step from '../../base/step/step'
import { Toast } from 'mint-ui'
import { mapGetters, mapActions } from 'vuex'
import md5 from 'md5'

export default {
  name: 'withdrawSet2',
  components: {
    Step
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  data () {
    return {
      stepArr: ['绑定银行卡', '设置提现密码'],
      timeout: '获取',
      phone: '',
      pass1: '',
      pass2: '',
      keyNum: ''
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
          this.setPass()
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
    // 请求设置提现密码
    setPass () {
      this.$ajax.post('/api/buyerAccount/resetWithdrawPassword', {
        newWithdrawPassword: md5(this.pass1),
        telephone: this.phone
      }).then((data) => {
        if (data.data.code === '200') {
          this.reFresh()
          this.$router.push({ name: 'userCenter' })
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
    finsh () {
      if (this.pass1 === '' || this.pass2 === '') {
        Toast({
          message: '请填写提现密码',
          position: 'bottom'
        })
      } else if (this.pass1 !== this.pass2) {
        Toast({
          message: '密码不一致,请重新输入',
          position: 'bottom'
        })
      } else {
        this.testMessage()
      }
    },
    // 刷新用户信息
    reFresh () {
      this.$ajax.post('/api/buyerAccount/refresh', {
        telephone: this.userInfo.telephone
      }).then((data) => {
        if (data.data.code === '200') {
          this.setUserInfo(data.data.data)
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
      'setUserInfo'
    ])
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.withdrawSet2
  width 100%
  height 100%
  overflow auto
  background #EFF0F2
  .cont
    margin-top 1.2rem
    background #ffffff
    padding-left 1.6rem
    li
      height 1.4rem
      padding-top 1.8rem
      padding-right 1rem
      padding-bottom 1.8rem
      font-size 1.4rem
      .get
        float right
        margin-top -1rem
        width 4.8rem
        height 3.4rem
        line-height 3.4rem
        text-align center
        font-size #999999
      input
        width 100%
        outline none
  .footer
    padding 2rem 1.6rem
</style>