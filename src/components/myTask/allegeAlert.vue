<template>
  <div class="allegeAlert">
    <ul class="cont">
      <li class="border-bottom-1px">
        <input type="text" placeholder="订单编号" v-model="taskNumber">
      </li>
      <li class="border-bottom-1px">
        <input type="text" placeholder="申述原因" v-model="reason">
      </li>
      <li>
        <h2>申述截图</h2>
        <upload :myimgs='imgArr' :max='3' :isShow='false'></upload>
      </li>
    </ul>
    <div class="buttons">
      <span class="btn" @click="sureToPost">确认</span>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'
import Upload from '../../base/taskStep/upload'
import { MessageBox, Toast, Indicator } from 'mint-ui'
export default {
  name: 'allegeAlert',
  components: {
    Upload
  },
  data () {
    return {
      imgArr: [],
      taskNumber: '',
      reason: ''
    }
  },
  computed: {
    ...mapGetters([
      'userInfo',
      'userToken'
    ])
  },
  methods: {
    sureToPost () {
      if (this.taskNumber === '' || this.taskNumber.length === 0) {
        Toast('请正确填写内容,不能为空')
        return false
      }
      Indicator.open('申诉提交中...')
      this.$ajax.post('/api/buyer/complain/complainSeller', {
        complainReason: this.reason,
        picUrls: this.imgArr,
        complainPhone: this.userInfo.telephone,
        complainId: this.userInfo.buyerUserAccountId,
        orderId: this.taskNumber
      }).then((data) => {
        if (data.data.code === '200') {
          Indicator.close()
          MessageBox({
            title: '提交申诉成功!',
            message: '您可以在我的>申诉里查看申诉状态',
            showCancelButton: true,
            confirmButtonText: '查看申述',
            cancelButtonText: '返回'
          }).then(() => {
            this.$router.push({ name: 'allege' })
          }).catch(() => {
            window.history.go(-1)
          })
        } else {
          Toast(data.data.message)
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.allegeAlert
  width 100%
  height 100%
  overflow auto
  background #EFF0F2
  .cont
    // margin-top 1rem
    background #ffffff
    li
      padding 1.5rem 2.8rem
      input
        font-size 1.4rem
        color #75787F
        line-height 1.6rem
        outline none
      h2
        font-size 1.6rem
  .buttons
    padding 2rem
</style>