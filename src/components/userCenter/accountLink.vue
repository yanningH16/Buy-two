<template>
  <ul class="accountLink">
    <li class="border-bottom-1px">
      <mt-cell v-if="userInfo.isAddManagerWechat==0" title="加微信好友" class="title" is-link to="addWechat">
        <span class="contText">未加好友</span>
      </mt-cell>
      <mt-cell v-if="userInfo.isAddManagerWechat==1" title="加微信好友" class="title">
        <span class="contText Asuccess">已加好友</span>
      </mt-cell>
    </li>
    <li>
      <mt-cell v-if="userInfo.isJdPassCheck==0" class="title" is-link>
        <span slot="title">绑定京东买号</span>
        <span class="contText">未绑定</span>
      </mt-cell>
      <mt-cell v-if="userInfo.isJdPassCheck==2" class="title">
        <span slot="title">绑定京东买号：{{ userInfo.jdNickName }}</span>
        <span class="contText Awaiting">审核中</span>
      </mt-cell>
      <mt-cell v-if="userInfo.isJdPassCheck==3" class="title" is-link>
        <span slot="title">绑定京东买号：{{ userInfo.jdNickName }}</span>
        <span class="contText Aerror">未通过审核</span>
      </mt-cell>
      <mt-cell v-if="userInfo.isJdPassCheck==1" class="title">
        <span slot="title">绑定京东买号：{{ userInfo.jdNickName }}</span>
        <span class="contText Asuccess">已通过审核</span>
      </mt-cell>
    </li>
  </ul>
</template>
<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'
export default {
  name: 'accountLink',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
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