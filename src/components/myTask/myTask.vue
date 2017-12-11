<template>
  <div class="myTask">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">待下单
        <mt-badge type="error" style="position: absolute;margin-top:-10px;margin-left:-10px" v-if="order">{{this.toPlaceOrderNum}}</mt-badge>
      </mt-tab-item>
      <mt-tab-item id="3">待返款
        <mt-badge type="error" style="position: absolute;margin-top:-10px;margin-left:-10px" v-if="money">{{this.waitMoneyNum}}</mt-badge>
      </mt-tab-item>
      <mt-tab-item id="10">待评价
        <mt-badge type="error" style="position: absolute;margin-top:-10px;margin-left:-10px" v-if="favor">{{this.toFavorNum}}</mt-badge>
      </mt-tab-item>
      <mt-tab-item id="13">待返佣
        <mt-badge type="error" style="position: absolute;margin-top:-10px;margin-left:-10px" v-if="commision">{{this.waitCommision}}</mt-badge>
      </mt-tab-item>
      <mt-tab-item id="0">全部</mt-tab-item>
    </mt-navbar>
    <div class="bg">
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <taskList :datas='tableData' @myrouter="show"></taskList>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <taskList :datas='tableData' @myrouter="show"></taskList>
        </mt-tab-container-item>
        <mt-tab-container-item id="10">
          <taskList :datas='tableData' @myrouter="show"></taskList>
        </mt-tab-container-item>
        <mt-tab-container-item id="13">
          <taskList :datas='tableData' @myrouter="show"></taskList>
        </mt-tab-container-item>
        <mt-tab-container-item id="0">
          <taskList :datas='tableData' @myrouter="show"></taskList>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import TaskList from '../../base/taskList/taskList'
import { MessageBox, InfiniteScroll } from 'mint-ui'

Vue.use(InfiniteScroll)

export default {
  name: 'myTask',
  components: {
    TaskList
  },
  data () {
    return {
      selected: '1',
      toFavorNum: '',
      toPlaceOrderNum: '',
      waitCommision: '',
      waitMoneyNum: '',
      order: true,
      money: true,
      favor: true,
      commision: true,
      pageSize: 5,
      // 每次累加总的数据
      tableData: [],
      loadAllData: [],
      bottomText: '上拉加载更多...',
      totalCount: '',
      getScoreLog: [],
      pageNo: 1,
      allLoaded: false
    }
  },
  watch: {
    selected (value) {
      this.taskList(1, this.pageSize)
    }
  },
  computed: {
    ...mapGetters([
      'userInfo',
      'userToken'
    ])
  },
  created () {
    this.pointNum()
    this.taskList(1, this.pageSize)
  },
  methods: {
    loadBottom () {
      // 加载更多数据
      // this.pageNo++
      // let oldArr = this.tableData
      // this.taskList(this.pageNo, this.pageSize)
      // let newArr = this.tableData
      // oldArr.concat(newArr)
      // this.tableData = oldArr
      console.log(123456)
      this.allLoaded = true // 若数据已全部获取完毕
      this.$refs.loadmore.onBottomLoaded()
    },
    show (index) {
      console.log(index, this.tableData[index])
      if (this.tableData[index].slot === '1') {
        this.$router.push({ name: 'operateTask', query: { buyerTaskId: this.tableData[index].buyerTaskId } })
      } else if (this.tableData[index].slot === '10') {
        MessageBox.confirm(
          '请务必确认物流信息已显示签收,需上传截图',
          '确定快递已签收'
        ).then((data) => {
          // alert(data)
        }).catch((error) => {
          console.log(error)
        })
      } else {
        MessageBox.confirm(
          '删除后不可再恢复',
          '确定删除?'
        ).then((data) => {
          // alert(data)
        }).catch((error) => {
          console.log(error)
        })
      }
    },
    pointNum () {
      this.$ajax.post('/api/buyer/task/getTodoNumList', {
        buyerUserId: this.userInfo.buyerUserAccountId
      }).then((data) => {
        let res = data.data
        if (res.code === '200') {
          // 待评价
          this.toFavorNum = res.data.toFavorNum
          // 待下单
          this.toPlaceOrderNum = res.data.toPlaceOrderNum
          // 待返佣
          this.waitCommision = res.data.waitCommision
          // 待返款
          this.waitMoneyNum = res.data.waitMoneyNum
        } else {
        }
        if (this.toPlaceOrderNum === 0) {
          this.order = false
        }
        if (this.waitMoneyNum === 0) {
          this.money = false
        }
        if (this.toFavorNum === 0) {
          this.favor = false
        }
        if (this.waitCommision === 0) {
          this.commision = false
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    taskList (pageNo, pageSize) {
      this.$ajax.post('/api/buyer/task/getTaskListByStatus', {
        pageNo: pageNo,
        pageSize: pageSize,
        status: this.selected,
        buyerUserId: this.userInfo.buyerUserAccountId
      }).then((data) => {
        console.log(data)
        let res = data.data
        if (res.code === '200') {
          let arr = []
          for (let word of res.data) {
            let obj = {
              jdTask: word.taskTypeDetail || '暂无数据',
              slot: word.status || '暂无数据',
              shopName: word.productName || '暂无数据',
              wchat: word.wechatNum || '暂无数据',
              imgSrc: word.productPicUrl || '暂无数据',
              myMoney: word.payment || '暂无数据',
              yongMoney: word.commision || '暂无数据',
              taskNumber: word.sellerTaskDayId || '暂无数据',
              city: word.postCity || '暂无数据',
              money: word.jdMonthIncome || '暂无数据',
              sellerUserId: word.buyerUserAccountId || '暂无数据',
              btn: word.status || '暂无数据',
              prom: word.status || '暂无数据',
              buyerTaskId: word.buyerTaskId
            }
            arr.push(obj)
          }
          this.tableData = arr
        } else {
          this.$message({
            type: 'error',
            message: res.message
          })
        }
      }).catch((err) => {
        console.log(err)
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
  position relative
  .bg
    background #f5f5f5
    border-top 1px solid #D4D5D8
    margin-top 0.2rem
</style>