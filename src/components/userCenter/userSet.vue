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
          <span class="contText">辛巴达</span>
        </mt-cell>
      </li>
      <li class="border-bottom-1px">
        <mt-cell title="旺旺等级" class="title">
          <div class="leave">
            <strong class="gold">金牌会员</strong>
            <p class="contText">Plus到期日：2017-12-11</p>
          </div>
        </mt-cell>
      </li>
      <li class="border-bottom-1px">
        <mt-cell title="性别" class="title">
          <span class="contText">女</span>
        </mt-cell>
      </li>
      <li>
        <mt-cell title="职业" class="title">
          <span class="contText">白领</span>
        </mt-cell>
      </li>
    </ul>
    <ul class="cashSet">
      <li>
        <mt-cell title="提现设置" is-link>
          <span slot="label" class="label">买号通过审核后方可设置</span>
          <span class="contText">未设置</span>
        </mt-cell>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
import Vue from 'vue'
import { Cell } from 'mint-ui'
Vue.component(Cell.name, Cell)

export default {
  name: 'userSet',
  data () {
    return {
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
</style>