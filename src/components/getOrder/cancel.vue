<template>
  <div class="wrap">
    <div class="wrap_bg">
      <h2>亲，为什么要取消我们的任务呢?</h2>
      <mt-checklist align="right" v-model="arr" :options="options">
      </mt-checklist>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Vue from 'vue'
import { Checklist } from 'mint-ui'
Vue.component(Checklist.name, Checklist)
export default {
  name: 'cancel',
  data () {
    return {
      arr: [],
      options: [
        {
          label: '1.时间冲突，现在没时间',
          value: 'first'
        },
        {
          label: '2.任性，现在就是不想做',
          value: 'two'
        },
        {
          label: '3.贫穷限制我做单热情(本金不够)',
          value: 'thress'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.wrap
  background #F5F5F5
  width 100%
  height 100%
  .wrap_bg
    background #ffffff
    margin-top 1rem
    h2
      font-size 1.4rem
      color #08090a
      padding 1.6rem
      border-bottom 1px solid #d4d5d8
      padding-bottom 1.75rem
</style>