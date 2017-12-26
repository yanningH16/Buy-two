<template>
  <div class="operateTask2">
    <div class="reject" v-if="$route.query.rbBuyerTaskId">
      <p>驳回原因：{{ rbObj.rejectReason || '' }}</p>
      <p>修改方案：{{ rbObj.solution || ''}}</p>
    </div>
    <div class="step">
      <step :stepArr="stpesObj.stepArr" :stepIndex="1"></step>
    </div>
    <ul class="cont">
      <li>
        <pay :title="stpesObj.step8Title" :allowArr="stpesObj.step8Arr"></pay>
      </li>
      <li>
        <payOrder :title="stpesObj.step9Title" :orderInfo="stpesObj.step9Arr"></payOrder>
      </li>
      <!-- <li>
        <upload :title="stpesObj.step10Title" :myimgs="stpesObj.step10Arr" :max="1" :isShow="false"></upload>
      </li> -->
    </ul>
    <div class="footer">
      <p>提示：<br />商家将在72小时内操作发货，请耐心等待，不要找客 服催商家</p>
      <span class="btn" @click="submit">提交</span>
      <span class="rb btn border-1px" v-if="$route.query.rbBuyerTaskId" @click="toPreStep">返回货比三家</span>
      <p>如遇问题，请微信联系您的专属客服</p>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Step from '../../base/step/step'
import Pay from '../../base/taskStep/pay'
import PayOrder from '../../base/taskStep/payOrder'
import Upload from '../../base/taskStep/upload'
import { Toast } from 'mint-ui'

export default {
  name: 'operateTask2',
  components: {
    Step,
    Pay,
    PayOrder,
    Upload
  },
  data () {
    return {
      stpesObj: {
        stepArr: ['货比三家', '填写订单信息'],
        step8Title: '六、付款',
        step8Arr: [0, 1, 0],
        step9Title: '七、填写付款订单信息',
        step9Arr: ['', ''],
        step10Title: '八、上传订单详情截图',
        step10Arr: []
      },
      rbObj: {}
    }
  },
  methods: {
    submit () {
      if (this.stpesObj.step9Arr[0] === '') {
        Toast({
          message: '请输入订单号!'
        })
      } else if (this.stpesObj.step9Arr[1] === '') {
        Toast({
          message: '请输入实付金额!'
        })
      } else {
        this.toPost()
      }
    },
    toPost () {
      this.$ajax.post('/api/buyer/task/doTaskSecond', {
        buyerTaskId: this.$route.query.buyerTaskId || this.$route.query.rbBuyerTaskId || this.$route.query.backBuyerTaskId,
        realOrderId: this.stpesObj.step9Arr[0],
        realPayment: this.stpesObj.step9Arr[1],
        realOrderPicUrl: this.stpesObj.step10Arr
      }).then((data) => {
        if (data.data.code === '200') {
          Toast({
            message: '提交成功!'
          })
          this.$router.push({ name: 'myTask' })
        } else {
          Toast({
            message: data.data.message
          })
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    // 返回上一步
    toPreStep () {
      this.$router.push({ name: 'operateTask', query: { backBuyerTaskId: (this.$route.query.buyerTaskId || this.$route.query.rbBuyerTaskId || this.$route.query.backBuyerTaskId) } })
    },
    // 获取商品信息详情
    getTaskInfo () {
      this.$ajax.post('/api/buyer/task/getTaskDetail', {
        buyerTaskId: this.$route.query.buyerTaskId || this.$route.query.rbBuyerTaskId || this.$route.query.backBuyerTaskId
      }).then((data) => {
        if (data.data.code === '200') {
          let res = data.data.data
          this.stpesObj.step8Arr = [parseInt(res.isSupportBlankNote), parseInt(res.isSupprotCreditCard), parseInt(res.isSupportTicket)]
        } else {
          Toast({
            message: data.data.message
          })
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    getRbInfo () {
      this.$ajax.post('/api/buyer/task/getOrderTaskSecond', {
        buyerTaskId: this.$route.query.buyerTaskId || this.$route.query.rbBuyerTaskId || this.$route.query.backBuyerTaskId
      }).then((data) => {
        if (data.data.code === '200') {
          let res = data.data.data
          this.rbObj = res
          this.stpesObj.step9Arr = [res.realOrderId, res.realPayment]
          this.stpesObj.step10Arr = JSON.parse(res.realOrderPicUrl)
        } else {
          Toast({
            message: data.data.message
          })
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getTaskInfo()
    if (this.$route.query.rbBuyerTaskId || this.$route.query.backBuyerTaskId) {
      this.getRbInfo()
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.operateTask2
  background #EFF0F2
  width 100%
  height 100%
  overflow auto
  .reject
    padding 1.2rem 1.6rem
    background #FFEAEB
    >p
      font-size 1.2rem
      line-height 1.6rem
      color #FF3341
      vertical-align top
  li
    margin-top 1.2rem
    background #ffffff
    padding 2rem 1.6rem
  .footer
    padding 0 1.6rem 2rem
    >p
      margin-top 2rem
      font-size 1.2rem
      color #666666
      line-height 2rem
    .btn
      margin-top 2rem
    .rb
      margin-top 1.2rem
      background #ffffff
      color #000000
      display inline-block
</style>