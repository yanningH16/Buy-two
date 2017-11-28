<template>
  <div class="operateTask">
    <div class="reject" v-if="$route.query.rb">
      <p>驳回原因：截图有误</p>
      <p>修改方案：上传正确截图</p>
    </div>
    <div class="step">
      <step :stepArr="stpesObj.stepArr" :stepIndex="0"></step>
    </div>
    <ul class="cont">
      <li>
        <findGoods :title="stpesObj.step1Title" :value="stpesObj.step1Key"></findGoods>
      </li>
      <li>
        <upload :title="stpesObj.step2Title" :tip="stpesObj.step2Tip" :myImgs="stpesObj.step2ImgArr" :max="1" :isShow="false"></upload>
      </li>
      <li>
        <findGoods :title="stpesObj.step3Title" :onlyTitle="true"></findGoods>
      </li>
      <li>
        <upload :title="stpesObj.step4Title" :tip="stpesObj.step4Tip" :myImgs="stpesObj.step4ImgArr" :max="2" :isShow="true"></upload>
      </li>
      <li>
        <search :title="stpesObj.step5Title" :condition="stpesObj.step5Arr" @giveup="giveup"></search>
      </li>
      <li>
        <check :title="stpesObj.step6Title" :infoArr="stpesObj.step6Arr"></check>
      </li>
      <li>
        <shopName :title="stpesObj.step7Title" :value="stpesObj.step7Value"></shopName>
      </li>
    </ul>
    <div class="next">
      <span class="btn" :class="{ 'btn-gray':!isPass }" @click="doNext">下一步</span>
    </div>
    <p>如遇问题，请联系在线客服QQ: 2256825635</p>
  </div>
</template>
<script type="text/ecmascript-6">
import Step from '../../base/step/step'
import FindGoods from '../../base/taskStep/findGoods'
import Upload from '../../base/taskStep/upload'
import Search from '../../base/taskStep/search'
import Check from '../../base/taskStep/check'
import ShopName from '../../base/taskStep/shopName'

export default {
  name: 'operateTask',
  components: {
    Step,
    FindGoods,
    Upload,
    Search,
    Check,
    ShopName
  },
  data () {
    return {
      isPass: false,
      stpesObj: {
        stepArr: ['货比三家', '填写订单信息'],
        step1Title: '一、打开手机京东，查找商品',
        step1Key: '水洗毛边短裤前短后水洗水洗毛边短裤前短后水洗',
        step2Title: '二、上传搜索结果截图',
        step2Tip: '请把输入框内的搜索关键词也截到图片中',
        step2ImgArr: [],
        step3Title: '三、下划商品列表，随机查看2件商品',
        step4Title: '四、上传任意2件商品截图',
        step4Tip: '依次点开列表中任意2个商品，分别截图',
        step5Title: '五、精确搜索，设置搜索条件',
        step5Arr: ['价格排序', '一折', '20.00-50.00元', '河南'],
        step6Title: '六、核对商品参数',
        step6Arr: ['美丽哈撒发美丽哈撒发美丽哈撒发', '事故多发司法所', '1件', '任意规格', '49.00'],
        step7Title: '七、输入店铺全称，验证店铺',
        step7Value: ''
      }
    }
  },
  methods: {
    giveup () {
      console.log('giveup')
    },
    doNext () {
      if (this.isPass) {
        this.$router.push({ name: 'operateTask2' })
      }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.operateTask
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
  .next
    padding 2rem 1.6rem
  >p
    padding 0 1.6rem 2rem
    color #666666
    font-size 1.2rem
    line-height 1
</style>