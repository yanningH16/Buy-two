<template>
  <div class="myTask">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">待下单</mt-tab-item>
        <mt-tab-item id="2">待返款</mt-tab-item>
        <mt-tab-item id="3">待评价</mt-tab-item>
        <mt-tab-item id="4">待返佣</mt-tab-item>
        <mt-tab-item id="5">全部</mt-tab-item>
      </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        第一个内容
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        第二个内容
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        第三个内容
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        第三个内容
      </mt-tab-container-item>
      <mt-tab-container-item id="5">
        第三个内容
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'myTask',
  data () {
    return {
      selected: '1'
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.mint-tab-item-label
  font-size 2.8rem
</style>