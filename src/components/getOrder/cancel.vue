<template>
  <div class="wrap">
    <div class="wrap_bg">
      <h2>亲，为什么要取消我们的任务呢?</h2>
      <mt-radio align="right" v-model="value" :options="options">
      </mt-radio>
    </div>
    <p class="point">平台会根据您的信用等级与做单情况，优先将本金转至 您的账号</p>
    <div style="text-align:center">
      <button class="btnsure" @click="sureCancel">确认取消</button>
      <p class="apply" v-show="apply" @click="applyDF">申请垫付></p>
    </div>
    <div class="addressWrap" v-show="showAddress">
      <div class="address">
        <div class="buttonsss border-bottom-1px">
          <span @click="showAddress=false">取消</span>
          <span @click="showAddress=false">确定</span>
        </div>
        <!-- <mt-picker ref='pickerObj' :slots="slots" :visibleItemCount="7" @change="onValuesChange"></mt-picker> -->
        <mt-picker ref='pickerObj' :slots="slots" :visibleItemCount="5" value-key="name" @change="setSlotValue"></mt-picker>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { Radio, MessageBox, Picker, Toast } from 'mint-ui'
Vue.component(Radio.name, Radio, Picker)
export default {
  name: 'cancel',
  data () {
    return {
      value: '',
      firstValue: '',
      apply: false,
      showAddress: false,
      slots: [{
        flex: 1,
        values: ['上午可以考虑再接单做', '下午可以考虑再接单做', '晚上可以考虑再接单做', '今天都没时间做了'],
        className: 'slot',
        textAlign: 'center'
      }],
      options: [
        {
          label: '1.时间冲突，现在没时间',
          value: '时间冲突，现在没时间'
        },
        {
          label: '2.任性，现在就是不想做',
          value: '任性，现在就是不想做'
        },
        {
          label: '3.贫穷限制我做单热情(本金不够)',
          value: '贫穷限制我做单热情(本金不够)'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  watch: {
    value () {
      if (this.value === '时间冲突，现在没时间') {
        // this.slots[0].values = []
        this.showAddress = true
        this.apply = false
      } else if (this.value === '任性，现在就是不想做') {
        MessageBox('提示', '任性，那咱今天就不做了')
        this.apply = false
      } else if (this.value === '贫穷限制我做单热情(本金不够)') {
        MessageBox('提示', '本金不够，可以先申请垫付')
        this.apply = true
      }
    }
  },
  methods: {
    setSlotValue (picker, values) {
      console.log(picker, values)
      this.firstValue = values[0]
    },
    sureCancel () {
      if (this.value === '') {
        alert('请选择原因')
        return false
      }
      this.$ajax.post('/api/order/buyerRejectPackage', {
        assignedUserId: this.userInfo.buyerUserAccountId,
        platformPackageId: this.$route.query.platformPackageId,
        memo: this.value === '时间冲突，现在没时间' ? this.firstValue : this.value
      }).then((data) => {
        if (data.data.code === '200') {
          this.$router.push({ name: 'submit', query: { state: 3 } })
        } else {
          Toast({
            message: data.data.message,
            position: 'bottom'
          })
        }
      }).catch((err) => {
        Toast({
          message: err,
          position: 'bottom'
        })
      })
    },
    applyDF () {
      this.$ajax.post('/api/advanceApply/apply', {
        buyerAccountId: this.userInfo.buyerUserAccountId,
        packageId: this.$route.query.platformPackageId,
        operateUserId: this.userInfo.buyerUserAccountId
      }).then((data) => {
        if (data.data.code === '200') {
          this.$router.push({ name: 'submit', query: { state: 4 } })
          Toast({
            message: data.data.message,
            position: 'bottom'
          })
        }
      }).catch((err) => {
        Toast({
          message: err,
          position: 'bottom'
        })
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.wrap
  background #F5F5F5
  width 100%
  height 100%
  .wrap_bg
    background #ffffff
    margin-top 1rem
    h2
      font-size 1.4rem
      color #08090a
      padding 1.6rem
      border-bottom 1px solid #d4d5d8
      padding-bottom 1.75rem
  .point
    padding 1.6rem
    font-size 1.2rem
    color #666666
    line-height 2rem
  .apply
    color #ff3341
    font-size 1.6rem
    margin-top 3rem
  .addressWrap
    position fixed
    z-index 100
    width 100%
    height 100%
    top 0
    left 0
    background rgba(0, 0, 0, 0.6)
    animation fadeIn 0.2s ease-out
    transition 0.2s
    @keyframes fadeIn
      from
        opacity 0
    .address
      position absolute
      bottom 0
      left 0
      width 100%
      background #ffffff
      animation slideUp 0.2s ease-out
      transition 0.2s
      @keyframes slideUp
        from
          transform translate3d(0, 20rem, 0)
      .buttonsss
        display flex
        span
          flex 1
          font-size 1.2rem
          line-height 3.2rem
          color #26a2ff
          text-align center
</style>