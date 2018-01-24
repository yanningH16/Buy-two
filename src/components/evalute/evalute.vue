<template>
  <div class="evalute">
    <div class="reject" v-if="$route.query.rbBuyerTaskId">
      <p>驳回原因：{{ infoObj.rejectReason }}</p>
      <p>备注：{{ infoObj.comment }}</p>
    </div>
    <ul class="cont">
      <li>
        <taskListSmall :infoImg="evaluateObj.productUrl" :infoArr="evaluateObj.infoArr"></taskListSmall>
      </li>
      <li>
        <check :title="evaluateObj.step1Title" :goodsImg="evaluateObj.productUrl" :infoArr="evaluateObj.step1Arr"></check>
      </li>
      <li>
        <upload :title="evaluateObj.step2Title" :myimgs="evaluateObj.step2Arr" :max="1" :isShow="false"></upload>
      </li>
      <li>
        <findGoods :title="evaluateObj.step3Title" :onlyTitle="true"></findGoods>
      </li>
      <li v-if="evaluateObj.step4Text!==''">
        <inputArea :title="evaluateObj.step4Title" :text="evaluateObj.step4Text"></inputArea>
      </li>
      <li v-if="evaluateObj.step5Arr.length!==0">
        <upImgs :title="evaluateObj.step5Title" :imgsArr="evaluateObj.step5Arr"></upImgs>
      </li>
      <li>
        <upload :title="evaluateObj.step6Title" :myimgs="evaluateObj.step6Arr" :max="1" :isShow="false"></upload>
      </li>
    </ul>
    <div class="footer">
      <p>若京东快递未签收，就提前在平台或京东店铺确认好 评，平台将扣除本次任务本金作为处罚</p>
      <span class="btn hand" @click="sureToPost">提交并返回我的任务</span>
      <p>如遇问题，请微信联系您的专属客服</p>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import TaskListSmall from '../../base/taskList/taskListSmall'
import Check from '../../base/taskStep/check'
import Upload from '../../base/taskStep/upload'
import FindGoods from '../../base/taskStep/findGoods'
import InputArea from '../../base/taskStep/inputArea'
import UpImgs from '../../base/taskStep/upImgs'
import { Toast } from 'mint-ui'

export default {
  name: 'evalute',
  components: {
    TaskListSmall,
    Check,
    Upload,
    FindGoods,
    InputArea,
    UpImgs
  },
  data () {
    return {
      evaluateObj: {
        infoArr: ['RKHL小温 秋冬新款韩版RKHL小温 秋冬新款韩版', '10.00', '100.00', '9823786563387066-f07750'],
        step1Title: '一、核对商品参数',
        step1Arr: ['RKHL小温 秋冬新RKHL小温 秋冬新', '紫*儿*饰紫*儿*饰', '1件', '任意规格', '49.00'],
        step2Title: '二、上传物流截图',
        step2Arr: [],
        step3Title: '三、五星好评',
        step4Title: '四、将以下评价内容打字到手机京东',
        step4Text: '',
        step5Title: '五、将以下图片上传到手机京东',
        step5Arr: [],
        step6Title: '六、上传评价页面截图',
        step6Arr: []
      },
      // 商品信息对象
      infoObj: {}
    }
  },
  methods: {
    getInfo () {
      this.$ajax.post('/api/buyer/task/getTaskDetail', {
        buyerTaskId: this.$route.query.buyerTaskId || this.$route.query.rbBuyerTaskId
      }).then((data) => {
        if (data.data.code === '200') {
          let obj = data.data.data
          this.infoObj = obj
          this.evaluateObj.productUrl = obj.productPicUrl
          this.evaluateObj.infoArr = [obj.productName, obj.commision, obj.productOrderPrice, obj.taskDayId] || []
          this.evaluateObj.step1Arr = [obj.productName, obj.shopName, obj.numPerOrder, obj.productFormat, obj.productUnitPrice] || []
          this.evaluateObj.step4Text = obj.sellerFavor
          this.evaluateObj.step5Arr = JSON.parse(obj.sellerFavorPicUrl) || []
          if (this.$route.query.rbBuyerTaskId) {
            this.evaluateObj.step2Arr = JSON.parse(obj.logisticsPicId) || []
            this.evaluateObj.step6Arr = JSON.parse(obj.buyerFavorPicUrl) || []
          }
          if (this.evaluateObj.step4Text === '') { // 默认好评
            this.evaluateObj.step6Title = '四、上传评价页面截图'
          } else if (this.evaluateObj.step5Arr.length === 0) { // 文字好评
            this.evaluateObj.step6Title = '五、上传评价页面截图'
          }
          if (parseInt(obj.taskSubType) === 3) {
            this.evaluateObj.step4Title = '四、将以下评价内容打字到手机淘宝'
            this.evaluateObj.step5Title = '五、将以下图片上传到手机京东'
          }
        } else {
          Toast({
            message: data.data.message
          })
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    sureToPost () {
      if (this.evaluateObj.step2Arr.length === 0) {
        Toast({
          message: '请上传物流截图!'
        })
      } else if (this.evaluateObj.step6Arr.length === 0) {
        Toast({
          message: '请上传好评截图!'
        })
      } else {
        this.$ajax.post('/api/buyer/task/doFavorTask', {
          buyerTaskId: this.$route.query.buyerTaskId || this.$route.query.rbBuyerTaskId,
          logisticsPicUrl: this.evaluateObj.step2Arr,
          favorPicUrl: this.evaluateObj.step6Arr
        }).then((data) => {
          if (data.data.code === '200') {
            Toast({
              message: '提交成功!'
            })
            if (parseInt(this.infoObj.taskSubType) === 3) {
              this.$router.push({ name: 'taobaoTask' })
            } else {
              this.$router.push({ name: 'myTask' })
            }
          } else {
            Toast({
              message: data.data.message
            })
          }
        }).catch((err) => {
          console.log(err)
        })
      }
    }
  },
  mounted () {
    this.getInfo()
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.evalute
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
  .cont
    li
      padding 2rem 1.6rem
      background #ffffff
      margin-bottom 1.2rem
  .footer
    padding 0 1.6rem 2rem
    p
      font-size 1.2rem
      line-height 2rem
      color #666666
    .hand
      margin 2rem 0
</style>