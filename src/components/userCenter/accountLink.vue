<template>
  <ul class="accountLink">
    <li class="border-bottom-1px">
      <mt-cell v-if="userObj.isAddManagerWechat==0" title="加微信好友" class="title" is-link to="addWechat">
        <span class="contText">未加好友</span>
      </mt-cell>
      <mt-cell v-if="userObj.isAddManagerWechat==1" title="加微信好友" class="title">
        <span class="contText Asuccess">已加好友</span>
      </mt-cell>
    </li>
    <li>
      <mt-cell v-if="userObj.isJdPassCheck==0" class="title" is-link to="bindJdAccount">
        <span slot="title">绑定京东买号</span>
        <span class="contText">未绑定</span>
      </mt-cell>
      <mt-cell v-if="userObj.isJdPassCheck==2" class="title">
        <span slot="title">绑定京东买号：{{ userObj.jdNickName }}</span>
        <span class="contText Awaiting">审核中</span>
      </mt-cell>
      <mt-cell v-if="userObj.isJdPassCheck==3" class="title" is-link>
        <span slot="title">绑定京东买号：{{ userObj.jdNickName }}</span>
        <span class="contText Aerror">未通过审核</span>
      </mt-cell>
      <mt-cell v-if="userObj.isJdPassCheck==1" class="title">
        <span slot="title">绑定京东买号：{{ userObj.jdNickName }}</span>
        <span class="contText Asuccess">已通过审核</span>
      </mt-cell>
    </li>
  </ul>
</template>
<script type="text/ecmascript-6">
import { Toast } from 'mint-ui'
import { mapGetters } from 'vuex'
export default {
  name: 'accountLink',
  data () {
    return {
      userObj: {}
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  methods: {
    getInfo () {
      this.$ajax.post('/api/buyerAccount/refresh', {
        telephone: this.userInfo.telephone
      }).then((data) => {
        if (data.data.code === '200') {
          this.userObj = data.data.data
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
    this.getInfo()
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.accountLink
  width 100%
  height 100%
  overflow auto
  background #EFF0F2
  padding-top 1.2rem
  .contText
    font-size 1.2rem
    line-height 2rem
    color #666666
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
</style>