<template>
  <div class="operateTask2">
    <div class="reject" v-if="$route.query.rb">
      <p>驳回原因：截图有误</p>
      <p>修改方案：上传正确截图</p>
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
      <li>
        <upload :title="stpesObj.step10Title" :myImgs="stpesObj.step10Arr"></upload>
      </li>
    </ul>
    <div class="footer">
      <p>提示：<br />商家将在72小时内操作发货，请耐心等待，不要找客 服催商家</p>
      <span class="btn">提交</span>
      <p>如遇问题，请联系在线客服QQ: 2256825635</p>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Step from '../../base/step/step'
import Pay from '../../base/taskStep/pay'
import PayOrder from '../../base/taskStep/payOrder'
import Upload from '../../base/taskStep/upload'

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
        step8Title: '八、付款',
        step8Arr: [0, 1, 0],
        step9Title: '九、填写付款订单信息',
        step9Arr: ['', ''],
        step10Title: '十、上传订单详情截图',
        step10Arr: []
      }
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
</style>