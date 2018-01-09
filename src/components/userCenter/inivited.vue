<template>
  <div class="inivited" ref="cont">
    <ul class="cont" v-show="listArr.length!=0">
      <li class="border-bottom-1px" v-for="(item, index) in listArr" :key="index">
        <mt-cell :title="item.userName" class="title" :label="item.telephone">
          <span class="contText">{{ item.createTime.split(' ')[0] }}</span>
        </mt-cell>
      </li>
    </ul>
    <div class="spinnerWrap" v-show="showMore">
      <div class="spinner">
        <mt-spinner type="fading-circle" color="rgba(0,0,0,0.8)" :size="20"></mt-spinner>
      </div>
    </div>
    <noCont v-if="listArr.length==0"></noCont>
  </div>
</template>
<script type="text/ecmascript-6">
import { Toast } from 'mint-ui'
import NoCont from '../../base/noCont/noCont'
export default {
  name: 'inivited',
  components: {
    NoCont
  },
  data () {
    return {
      listArr: [],
      showMore: false,
      pageNo: 1,
      pageNos: 1
    }
  },
  methods: {
    getList (type) {
      this.$ajax.post('/api/buyerAccount/getListByInviteCode', {
        inviteCode: this.$route.query.code,
        pageNo: this.pageNo,
        pageSize: 15
      }).then((data) => {
        if (data.data.code === '200') {
          let res = data.data.data
          if (type === 1) { // 加载更多数据
            this.listArr = this.listArr.concat(res.datas)
          } else {
            this.listArr = res.datas
          }
          this.$nextTick(() => {
            this.showMore = false
          })
          this.pageNos = data.data.data.pageNos
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
    handleScroll () {
      let scrollTop = this.$refs.cont.scrollTop
      let clientHeight = this.$refs.cont.clientHeight
      let scrollHeight = this.$refs.cont.scrollHeight
      console.log(scrollTop, clientHeight, scrollHeight)
      if ((scrollHeight - clientHeight - scrollTop <= 10) && (this.pageNos > this.pageNo) && !this.showMore) {
        this.$nextTick(() => {
          this.showMore = true
        })
        this.pageNo = this.pageNo + 1
        setTimeout(() => {
          this.getList(1)
        }, 600)
      }
    }
  },
  mounted () {
    this.getList()
    this.$refs.cont.addEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.inivited
  width 100%
  height 100%
  overflow auto
  background #EFF0F2
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
      .text
        font-size 1.4rem
      .copy
        padding 0.5rem
        font-size 1.4rem
      .url
        display inline-block
        max-width calc(100% - 3.5rem)
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
    .contText
      font-size 1.2rem
      line-height 2rem
      color #666666
  .spinnerWrap
    background #ffffff
    .spinner
      text-align center
      width 28px
      height 28px
      margin 0 auto
      padding 1rem 0
</style>