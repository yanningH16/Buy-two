<template>
  <div class="userSet">
    <ul class="userInfo">
      <li class="border-bottom-1px">
        <mt-cell title="头像" class="title" is-link>
          <img class="headImg" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511957696669&di=5bbc3ea76a7b62eae7dc82073b12b0a6&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201504%2F16%2F20150416H4223_vG4eY.jpeg" alt="pic">
        </mt-cell>
      </li>
      <li class="border-bottom-1px">
        <mt-cell title="用户名" class="title">
          <span class="contText">{{ userInfo.userName || '暂无用户名' }}</span>
        </mt-cell>
      </li>
      <li class="border-bottom-1px">
        <mt-cell title="京东等级" class="title">
          <div class="leave">
            <strong class="gold">{{ (userInfo.jdPlusType == 0 ? '临时会员' : '正式会员') || '暂无等级' }}</strong>
            <p class="contText">Plus到期日：{{ (userInfo.jdPlusEndDate.split(' ')[0]) || '暂无' }}</p>
          </div>
        </mt-cell>
      </li>
      <li class="border-bottom-1px">
        <mt-cell title="性别" class="title">
          <span class="contText">{{ userInfo.gender == '1' ? '男' : '女' }}</span>
        </mt-cell>
      </li>
      <li>
        <mt-cell title="职业" class="title">
          <span class="contText">{{ userInfo.profession || '暂无' }}</span>
        </mt-cell>
      </li>
    </ul>
    <ul class="cashSet">
      <li class="label" v-if="!userInfo.bankCardName" @click="toDo('withdraw')">
        <mt-cell title="提现设置" class="title" label="买号通过审核后方可设置" is-link>
          <span class="contText">未设置</span>
        </mt-cell>
      </li>
      <li class="label" v-else>
        <mt-cell title="提现设置" class="title" label="买号通过审核后方可设置">
          <span class="contText">已设置</span>
        </mt-cell>
      </li>
    </ul>
    <ul class="changePass">
      <li @click="toDo('changePass')">
        <mt-cell title="更改登录密码" class="title" is-link>
        </mt-cell>
      </li>
    </ul>
    <div class="buttons">
      <span class="btn" @click="toDo('logout')">退出登录</span>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { Cell, MessageBox } from 'mint-ui'
Vue.component(Cell.name, Cell)

export default {
  name: 'userSet',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  methods: {
    toDo (where) {
      switch (where) {
        case 'withdraw':
          this.$router.push({ name: 'withdrawSet' })
          break
        case 'changePass':
          this.$router.push({ name: 'forget' })
          break
        case 'logout':
          MessageBox.confirm('确定退出登录?').then((action) => {
            this.$router.push({ name: 'login' })
          }).catch((err) => {
            console.log(err)
          })
          break
        default:
          break
      }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.userSet
  width 100%
  height 100%
  overflow auto
  background #EFF0F2
  >ul
    margin-top 1.2rem
    li
      background #ffffff
  .title
    color #08090A
    min-height 5rem
    font-size 1.4rem
  .contText
    font-size 1.2rem
    line-height 2rem
    color #666666
  .gold
    font-size 1.6rem
    color #E6A545
    line-height 2.4rem
  .leave
    text-align right
    margin-top 1.8rem
    margin-bottom 1.8rem
  .userInfo
    .headImg
      width 5.4rem
      height 5.4rem
      border-radius 50%
      margin-top 0.8rem
      margin-bottom 0.8rem
  .buttons
    padding 2rem 1.6rem
    .btn
      background #FF3341
</style>