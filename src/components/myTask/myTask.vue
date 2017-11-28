<template>
  <div class="myTask">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">待下单</mt-tab-item>
      <mt-tab-item id="2">待返款</mt-tab-item>
      <mt-tab-item id="3">待评价</mt-tab-item>
      <mt-tab-item id="4">待返佣</mt-tab-item>
      <mt-tab-item id="5">全部</mt-tab-item>
    </mt-navbar>
    <div class="bg">
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <taskList :datas='aaa' @myrouter="show"></taskList>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <taskList :datas='bbb' @myrouter="show"></taskList>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <taskList :datas='ccc' @myrouter="show"></taskList>
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
          <taskList :datas='eee' @myrouter="show"></taskList>
        </mt-tab-container-item>
        <mt-tab-container-item id="5">
          <taskList :datas='fff' @myrouter="show"></taskList>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import TaskList from '../../base/taskList/taskList'
import { MessageBox } from 'mint-ui'
export default {
  name: 'myTask',
  components: {
    TaskList
  },
  data () {
    return {
      selected: '1',
      aaa: [{
        slot: {
          state: ''
        },
        shopName: '店铺的名字名字的呃呃鹅鹅鹅',
        imgSrc: 'http://cdn.static.linlangxiu.com/upload/trade/20171013/6046914754984d09d7496b13537c978d.jpg',
        myMoney: 550.00,
        yongMoney: 100.00,
        task: 0,
        prom: 1,
        proms: 0,
        btn: {
          state: 2
        }
      },
      {
        slot: {
          state: ''
        },
        shopName: '店铺的名字名字的呃呃鹅鹅鹅',
        imgSrc: 'http://cdn.static.linlangxiu.com/upload/trade/20171013/6046914754984d09d7496b13537c978d.jpg',
        myMoney: 550.00,
        yongMoney: 100.00,
        task: 0,
        prom: 1,
        proms: 0,
        btn: {
          state: 2
        }
      }],
      bbb: [{
        slot: {
          state: 1
        },
        shopName: '店铺的名字名字的呃呃鹅鹅鹅',
        imgSrc: 'http://cdn.static.linlangxiu.com/upload/trade/20171013/6046914754984d09d7496b13537c978d.jpg',
        myMoney: 550.00,
        yongMoney: 100.00,
        task: 0,
        prom: 2,
        proms: 1,
        btn: {
          state: 3
        }
      },
      {
        slot: {
          state: ''
        },
        shopName: '店铺的名字名字的呃呃鹅鹅鹅',
        imgSrc: 'http://cdn.static.linlangxiu.com/upload/trade/20171013/6046914754984d09d7496b13537c978d.jpg',
        myMoney: 550.00,
        yongMoney: 100.00,
        task: 0,
        prom: 1,
        proms: 0,
        btn: {
          state: 2
        }
      }]
    }
  },
  methods: {
    show (index) {
      MessageBox.confirm(
        '请务必确认物流信息已显示签收,需上传截图',
        '确定快递已签收'
      ).then((data) => {
        // alert(data)
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../assets/stylus/mixin'
@import '../../assets/stylus/font'
.myTask
  width 100%
  height 100%
  overflow auto
  .bg
    background #f5f5f5
    border-top 1px solid #D4D5D8
    margin-top 0.2rem
</style>