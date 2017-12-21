<template>
  <div class="operateTask">
    <div class="reject" v-if="$route.query.rbBuyerTaskId">
      <p>驳回原因：{{ rbObj.rejectReason || '' }}</p>
      <p>修改方案：{{ rbObj.solution || ''}}</p>
    </div>
    <div class="step">
      <step :stepArr="stpesObj.stepArr" :stepIndex="0"></step>
    </div>
    <ul class="cont">
      <li>
        <findGoods :title="stpesObj.step1Title" @refresh="randomKey" :value="stpesObj.step1Key"></findGoods>
      </li>
      <li>
        <upload :title="stpesObj.step2Title" :tip="stpesObj.step2Tip" :myimgs="stpesObj.step2ImgArr" :max="1" :isShow="false"></upload>
      </li>
      <li>
        <findGoods :title="stpesObj.step3Title" :onlyTitle="true"></findGoods>
      </li>
      <li>
        <upload :title="stpesObj.step4Title" :tip="stpesObj.step4Tip" :myimgs="stpesObj.step4ImgArr" :max="2" :isShow="true"></upload>
      </li>
      <li>
        <search :title="stpesObj.step5Title" @lookMore="randomKey" :condition="stpesObj.step5Arr" @giveup="giveup"></search>
      </li>
      <li>
        <check :title="stpesObj.step6Title" :goodsImg="stpesObj.step6Url" :infoArr="stpesObj.step6Arr"></check>
      </li>
      <li>
        <shopName :title="stpesObj.step7Title" @onBlur="testShop" :shopValue.sync="shopName"></shopName>
      </li>
    </ul>
    <div class="next">
      <span v-if="$route.query.buyerTaskId || $route.query.backBuyerTaskId" class="btn" :class="{ 'btn-gray':!isPass }" @click="doNext">下一步</span>
      <span v-if="$route.query.rbBuyerTaskId" class="btn" :class="{ 'btn-gray':!isPass }" @click="doNext">下一步</span>
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
import { Toast, MessageBox } from 'mint-ui'

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
  computed: {
    shopName: {
      get () {
        return this.stpesObj.step7Value
      },
      set (val) {
        this.stpesObj.step7Value = val
        return val
      }
    }
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
        step4ImgArr: [],
        step5Title: '五、精确搜索，设置搜索条件',
        step5Arr: ['价格排序', '阿迪', '20.00-50.00元', '河南'],
        step6Title: '六、核对商品参数',
        step6Arr: ['美丽哈撒发美丽哈撒发美丽哈撒发', '事故多发司法所', '1件', '任意规格', '49.00'],
        step6Url: '',
        step7Title: '七、输入店铺全称，验证店铺',
        step7Value: ''
      },
      taskInfoObj: {},
      rbObj: {}
    }
  },
  methods: {
    giveup () {
      MessageBox({
        title: '提示',
        message: '确定放弃该任务?',
        showCancelButton: true
      }).then(() => {
        this.toGive()
      }).catch((err) => {
        console.log(err)
      })
    },
    // 调取放弃任务接口
    toGive () {
      this.$ajax.post('/api/buyer/task/cancelTask', {
        buyerTaskId: this.$route.query.buyerTaskId || this.$route.query.rbBuyerTaskId || this.$route.query.backBuyerTaskId
      }).then((data) => {
        if (data.data.code === '200') {
          Toast({
            message: '放弃任务成功!'
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
    // 验证店铺
    testShop () {
      if (this.stpesObj.step7Value !== this.taskInfoObj.shopName) {
        Toast({
          message: '店铺输入有误'
        })
      } else {
        this.isPass = true
      }
    },
    randomKey () {
      let keyList = JSON.parse(this.taskInfoObj.searchWordList)
      let num = keyList.length
      let index = Math.floor(Math.random() * (num))
      let thisKeyObj = keyList[index]
      this.stpesObj.step1Key = thisKeyObj.keyword || '暂无'
      this.stpesObj.step5Arr = [thisKeyObj.sortClass === '0' ? '综合排序' : '其他排序', thisKeyObj.brand || '暂无', thisKeyObj.priceLow + '-' + thisKeyObj.priceHigh + '元', thisKeyObj.postLocation]
    },
    // 获取商品信息详情
    getTaskInfo () {
      this.$ajax.post('/api/buyer/task/getTaskDetail', {
        buyerTaskId: this.$route.query.buyerTaskId || this.$route.query.rbBuyerTaskId || this.$route.query.backBuyerTaskId
      }).then((data) => {
        if (data.data.code === '200') {
          let res = data.data.data
          this.taskInfoObj = data.data.data
          if (this.taskInfoObj.taskSubType === '1') {
            this.stpesObj.step1Title = '一、打开手机京东app，查找商品'
          } else if (this.taskInfoObj.taskSubType === '2') {
            this.stpesObj.step1Title = '一、打开手机京东微信，查找商品'
          }
          this.stpesObj.step6Arr = [res.productName, res.shopName, res.numPerOrder, res.productFormat, res.productUnitPrice]
          this.stpesObj.step6Url = res.productPicUrl
          this.randomKey()
        } else {
          Toast({
            message: data.data.message
          })
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    doNext () {
      if (this.stpesObj.step2ImgArr.length === 0) {
        Toast({
          message: '请上传搜索截图'
        })
        return false
      } else if (this.stpesObj.step4ImgArr.length === 0) {
        Toast({
          message: '请上传任意商品截图'
        })
        return false
      } else {
        if (this.isPass) {
          this.submit()
        }
      }
    },
    submit () {
      if (this.$route.query.backBuyerTaskId) {
        this.$router.push({ name: 'operateTask2', query: { rbBuyerTaskId: this.$route.query.backBuyerTaskId } })
      } else {
        this.$ajax.post('/api/buyer/task/doTaskFirst', {
          buyerTaskId: this.$route.query.buyerTaskId || this.$route.query.rbBuyerTaskId || this.$route.query.backBuyerTaskId,
          searchPicUrl: this.stpesObj.step2ImgArr,
          otherPicUrl: this.stpesObj.step4ImgArr
        }).then((data) => {
          if (data.data.code === '200') {
            if (this.$route.query.buyerTaskId) {
              this.$router.push({ name: 'operateTask2', query: { buyerTaskId: this.$route.query.buyerTaskId } })
            } else if (this.$route.query.rbBuyerTaskId) {
              this.$router.push({ name: 'operateTask2', query: { backBuyerTaskId: this.$route.query.rbBuyerTaskId } })
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
    },
    // 获取驳回的信息
    getRbInfo () {
      this.$ajax.post('/api/buyer/task/getOrderTaskFirst', {
        buyerTaskId: this.$route.query.rbBuyerTaskId || this.$route.query.backBuyerTaskId
      }).then((data) => {
        if (data.data.code === '200') {
          this.rbObj = data.data.data
          let obj = data.data.data
          this.stpesObj.step2ImgArr = JSON.parse(obj.searchPicUrl) || []
          this.stpesObj.step4ImgArr = JSON.parse(obj.otherPicUrl) || []
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