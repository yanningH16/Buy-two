<template>
  <div class="myTask" ref="myTask">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1,6,7">待下单
        <mt-badge type="error" style="position: absolute;margin-top:-10px;margin-left:-10px" v-if="order">{{this.toPlaceOrderNum}}</mt-badge>
      </mt-tab-item>
      <mt-tab-item id="3">待返款
        <mt-badge type="error" style="position: absolute;margin-top:-10px;margin-left:-10px" v-if="money">{{this.waitMoneyNum}}</mt-badge>
      </mt-tab-item>
      <mt-tab-item id="10">待评价
        <mt-badge type="error" style="position: absolute;margin-top:-10px;margin-left:-10px" v-if="favor">{{this.toFavorNum}}</mt-badge>
      </mt-tab-item>
      <mt-tab-item id="11">待返佣
        <mt-badge type="error" style="position: absolute;margin-top:-10px;margin-left:-10px" v-if="commision">{{this.waitCommision}}</mt-badge>
      </mt-tab-item>
      <mt-tab-item id="0">全部</mt-tab-item>
    </mt-navbar>
    <div class="bg" ref="myTaskCont">
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1,6,7">
          <taskList :datas='tableData' @myrouter="show"></taskList>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <taskList :datas='tableData' @myrouter="show"></taskList>
        </mt-tab-container-item>
        <mt-tab-container-item id="10">
          <taskList :datas='tableData' @myrouter="show"></taskList>
        </mt-tab-container-item>
        <mt-tab-container-item id="11">
          <taskList :datas='tableData' @myrouter="show"></taskList>
        </mt-tab-container-item>
        <mt-tab-container-item id="0">
          <taskList :datas='tableData' @myrouter="show"></taskList>
        </mt-tab-container-item>
      </mt-tab-container>
      <div class="spinnerWrap" v-show="showMore">
        <div class="spinner">
          <mt-spinner type="fading-circle" color="rgba(0,0,0,0.8)" :size="20"></mt-spinner>
        </div>
      </div>
      <noCont v-if="tableData.length===0"></noCont>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import TaskList from '../../base/taskList/taskList'
import NoCont from '../../base/noCont/noCont'
import { MessageBox, InfiniteScroll, Toast, Spinner } from 'mint-ui'
Vue.use(InfiniteScroll)
Vue.component(Spinner.name, Spinner)
export default {
  name: 'myTask',
  components: {
    TaskList,
    NoCont
  },
  data () {
    return {
      selected: '1,6,7',
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
      pageNos: 1,
      showMore: false
    }
  },
  watch: {
    selected (value) {
      this.taskList()
    }
  },
  computed: {
    ...mapGetters([
      'userInfo',
      'userToken'
    ])
  },
  methods: {
    show (index) {
      console.log(index, this.tableData[index])
      if (this.tableData[index].slot === '1') {
        this.$router.push({ name: 'operateTask', query: { buyerTaskId: this.tableData[index].buyerTaskId } })
      } else if (this.tableData[index].slot === '10') {
        MessageBox.confirm(
          '请务必确认物流信息已显示签收,需上传截图',
          '确定快递已签收'
        ).then((data) => {
          this.$router.push({ name: 'evalute', query: { buyerTaskId: this.tableData[index].buyerTaskId } })
        }).catch((error) => {
          console.log(error)
        })
      } else if (this.tableData[index].slot === '6') {
        this.$router.push({ name: 'operateTask', query: { rbBuyerTaskId: this.tableData[index].buyerTaskId } })
      } else if (this.tableData[index].slot === '7') {
        this.$router.push({ name: 'operateTask2', query: { rbBuyerTaskId: this.tableData[index].buyerTaskId } })
      } else if (this.tableData[index].slot === '12') {
        this.$router.push({ name: 'evalute', query: { rbBuyerTaskId: this.tableData[index].buyerTaskId } })
      } else if (this.tableData[index].slot === '5') {
        this.$router.push({ name: 'operateTask2', query: { buyerTaskId: this.tableData[index].buyerTaskId } })
      } else {
        MessageBox.confirm(
          '删除后不可再恢复',
          '确定删除?'
        ).then((data) => {
          this.$ajax.post('/api/buyer/task/deleteOrder', {
            buyerTaskId: this.tableData[index].buyerTaskId
          }).then((data) => {
            console.log(data)
            let res = data.data
            if (res.code === '200') {
              Toast('删除成功')
              this.taskList(1, this.pageSize)
            } else {
              Toast(res.message)
            }
          }).catch((err) => {
            console.log(err)
            Toast('未知错误')
          })
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
    taskList (type) {
      this.$ajax.post('/api/buyer/task/getTaskListByStatus', {
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        status: this.selected,
        buyerUserId: this.userInfo.buyerUserAccountId
      }).then((data) => {
        let res = data.data
        if (res.code === '200') {
          let arr = []
          for (let word of res.data.datas) {
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
              buyerTaskId: word.buyerTaskId,
              rejectReason: word.rejectReason || '暂未填写驳回原因',
              solution: word.solution || '暂未填写解决方案'
            }
            arr.push(obj)
          }
          if (type === 1) { // 加载更多数据
            this.tableData = this.tableData.concat(arr)
          } else {
            this.tableData = arr
          }
          this.showMore = false
          this.pageNos = res.data.pageNos
        } else {
          Toast(res.message)
        }
      }).catch((err) => {
        console.log(err)
        Toast(err)
      })
    },
    handleScroll () {
      let scrollTop = this.$refs.myTask.scrollTop
      let clientHeight = this.$refs.myTask.clientHeight
      let scrollHeight = this.$refs.myTask.scrollHeight
      if ((scrollHeight - clientHeight - scrollTop <= 10) && (this.pageNos > this.pageNo) && !this.showMore) {
        this.showMore = true
        this.pageNo = this.pageNo + 1
        setTimeout(() => {
          this.taskList(1)
        }, 600)
      }
    }
  },
  mounted () {
    this.pointNum()
    this.taskList()
    this.$refs.myTask.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    // this.$refs.myTask.removeEventListener('scroll', this.handleScroll)
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
  .spinnerWrap
    background #ffffff
    .spinner
      text-align center
      width 28px
      height 28px
      margin 0 auto
</style>