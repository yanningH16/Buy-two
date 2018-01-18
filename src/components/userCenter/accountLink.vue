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
      <mt-cell v-if="userObj.isTaobaoPassCheck==2" class="title">
        <span slot="title">绑定淘宝买号：{{ userObj.taobaoWangNickName }}</span>
        <span class="contText Awaiting">审核中</span>
      </mt-cell>
      <div v-if="userObj.isTaobaoPassCheck==3" @click="toBindTb(1)">
        <mt-cell class="title" is-link>
          <span slot="title">绑定淘宝买号：{{ userObj.taobaoWangNickName }}</span>
          <span class="contText Aerror">未通过审核</span>
        </mt-cell>
      </div>
      <mt-cell v-if="userObj.isTaobaoPassCheck==1" class="title">
        <span slot="title">绑定淘宝买号：{{ userObj.taobaoWangNickName }}</span>
        <span class="contText Asuccess">已通过审核</span>
      </mt-cell>
      <div v-if="userObj.isTaobaoPassCheck==0" @click="toBindTb">
        <mt-cell class="title" is-link>
          <span slot="title">绑定淘宝买号</span>
          <span class="contText">未绑定</span>
        </mt-cell>
      </div>
    </li>
    <li>
      <div v-if="userObj.isJdPassCheck==0" @click="toBindJd">
        <mt-cell class="title" is-link>
          <span slot="title">绑定京东买号</span>
          <span class="contText">未绑定</span>
        </mt-cell>
      </div>
      <mt-cell v-if="userObj.isJdPassCheck==2" class="title">
        <span slot="title">绑定京东买号：{{ userObj.jdNickName }}</span>
        <span class="contText Awaiting">审核中</span>
      </mt-cell>
      <div v-if="userObj.isJdPassCheck==3" @click="toBindJd(1)">
        <mt-cell class="title" is-link>
          <span slot="title">绑定京东买号：{{ userObj.jdNickName }}</span>
          <span class="contText Aerror">未通过审核</span>
        </mt-cell>
      </div>
      <mt-cell v-if="userObj.isJdPassCheck==1" class="title">
        <span slot="title">绑定京东买号：{{ userObj.jdNickName }}</span>
        <span class="contText Asuccess">已通过审核</span>
      </mt-cell>
    </li>
    <li class="button">
      <span class="btn" @click="$router.push({name: 'userCenter'})">返回至个人中心</span>
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
    },
    toBindJd (type) {
      if (type === 1) {
        this.$router.push({ name: 'bindJdAccount', query: { buyerAccountId: this.userInfo.buyerUserAccountId, returnBack: 1 } })
      } else {
        this.$router.push({ name: 'bindJdAccount', query: { buyerAccountId: this.userInfo.buyerUserAccountId, login: 1 } })
      }
    },
    toBindTb (type) {
      if (type === 1) {
        this.$router.push({ name: 'bindTbAccount', query: { buyerAccountId: this.userInfo.buyerUserAccountId, returnBack: 1 } })
      } else {
        this.$router.push({ name: 'bindTbAccount', query: { buyerAccountId: this.userInfo.buyerUserAccountId, login: 1 } })
      }
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
  .button
    padding 1.2rem
    margin-top 2rem
    background none
</style>