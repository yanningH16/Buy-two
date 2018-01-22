<template>
  <div class="allege">
    <ul class="cont" ref="myTask">
      <li class="border-bottom-1px" v-for="(item,index) in tableData" :key="index">
        <div class="left">
          <strong>{{item.messageComplainId}}</strong>
          <p>{{item.time}}</p>
        </div>
        <div class="right">
          <strong class="red" v-if="item.status==='0'">未处理</strong>
          <strong class="success" v-if="item.status==='1'">已处理</strong>
          <p @click="deteli(item)">详情</p>
        </div>
      </li>
      <div class="spinnerWrap" v-show="showMore">
        <div class="spinner">
          <mt-spinner type="fading-circle" color="rgba(0,0,0,0.8)" :size="20"></mt-spinner>
        </div>
      </div>
      <!-- <div class="nocont">
        <noCont v-if="tableData.length===0"></noCont>
      </div> -->
    </ul>
    <div class="buttons">
      <span class="btn" @click="$router.push({name: 'allegeAlert'})">我要申述</span>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { Toast, InfiniteScroll, Spinner } from 'mint-ui'
import noCont from '../../base/noCont/noCont'
Vue.use(InfiniteScroll)
Vue.component(Spinner.name, Spinner)
export default {
  name: 'allege',
  components: {
    noCont
  },
  data () {
    return {
      pageSize: 9,
      tableData: [],
      pageNo: 1,
      showMore: false,
      pageNos: 1,
      freeze: false
    }
  },
  computed: {
    ...mapGetters([
      'userInfo',
      'userToken'
    ])
  },
  mounted () {
    this.getData()
    this.$refs.myTask.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    getData (type) {
      this.$ajax.post('/api/buyer/complain/getComplainListByBuyerUserId', {
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        buyerUserId: this.userInfo.buyerUserAccountId
      }).then((data) => {
        console.log(data)
        let res = data.data
        if (res.code === '200') {
          let arr = []
          for (let word of res.data.datas) {
            let obj = {
              messageComplainId: word.messageComplainId,
              time: word.time,
              status: word.status,
              statusDetail: word.statusDetail
            }
            arr.push(obj)
          }
          if (type === 1) {
            // concat() 方法用于连接两个或多个数组。
            this.tableData = this.tableData.concat(arr)
          } else {
            this.tableData = arr
          }
          this.showMore = false
          this.pageNos = Math.ceil(res.data.total / this.pageSize)
        } else {
          Toast(res.message)
        }
      }).catch((err) => {
        console.log(err)
        Toast('未知错误')
      })
    },
    handleScroll () {
      let scrollTop = this.$refs.myTask.scrollTop
      let clientHeight = this.$refs.myTask.clientHeight
      let scrollHeight = this.$refs.myTask.scrollHeight
      if ((scrollHeight - clientHeight - scrollTop <= 10) && (this.pageNos > this.pageNo) && !this.showMore) {
        this.showMore = true
        this.pageNo++
        setTimeout(() => {
          this.getData(1)
        }, 600)
      }
    },
    deteli (val) {
      console.log(val)
      this.$router.push({ name: 'allegeDetail', query: { id: val.messageComplainId, status: val.statusDetail } })
    }

  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.allege
  width 100%
  height 100%
  overflow auto
  background #EFF0F2
  padding-top 1rem
  display flex
  flex-direction column
  position relative
  .red
    color #FF3341
  .success
    color #00CC88
  .cont
    background #ffffff
    flex 1
    overflow auto
    position relative
    li
      display flex
      padding 1.6rem
      .left
        flex 1
        strong
          display inline-block
          width 20rem
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
          font-size 1.4rem
          color #08090A
        p
          margin-top 0.8rem
          font-size 1.2rem
          color #75787F
      .right
        width 6rem
        min-width 6rem
        text-align right
        strong
          font-size 2rem
        .green
          margin-top 0.6rem
          font-size 1.2rem
          color #666666
        p
          margin-top 0.5rem
    .spinnerWrap
      background #ffffff
      .spinner
        text-align center
        width 28px
        height 28px
        margin 0 auto
  .buttons
    padding 2rem
</style>