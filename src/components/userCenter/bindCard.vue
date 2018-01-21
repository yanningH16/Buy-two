<template>
  <div class="bindCard">
    <ul class="cont">
      <li class="border-bottom-1px">
        <input type="text" v-model="name" placeholder="姓名">
      </li>
      <li class="border-bottom-1px" @click="chooseBank">
        <input type="text" v-model="bank" style="width:70%" readonly placeholder="银行">
        <i></i>
      </li>
      <li v-if="bank=='其他银行'" class="border-bottom-1px">
        <input type="text" v-model="otherBank" placeholder="银行名称">
      </li>
      <li>
        <input type="text" v-model="bankNum" placeholder="银行卡号">
      </li>
    </ul>
    <div class="addressWrap" v-show="showBank">
      <div class="address">
        <div class="buttons border-bottom-1px">
          <span @click="showBank=false">取消</span>
          <span @click="sureBank">确定</span>
        </div>
        <mt-picker ref='pickerObj' :slots="slots" :visibleItemCount="7" value-key="bankName" @change="onValuesChange"></mt-picker>
      </div>
    </div>
    <div class="sureBtn">
      <span class="btn">确认</span>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Vue from 'vue'
import { Picker, Toast } from 'mint-ui'
Vue.component(Picker.name, Picker)
export default {
  name: 'bindCard',
  data () {
    return {
      name: '',
      bank: '',
      bankNum: '',
      checkBank: '',
      otherBank: '',
      showBank: false,
      slots: [
        {
          flex: 1,
          values: [{ id: '1', bankName: '中国工商银行' }],
          className: 'slot1',
          textAlign: 'center'
        }
      ]
    }
  },
  methods: {
    onValuesChange (picker, values) {
      // console.log(values)
      this.checkBank = values[0]
    },
    chooseBank () {
      this.$ajax.post('/api/config/bankCard/getBankInfoList', {
      }).then((data) => {
        if (data.data.code === '200') {
          this.showBank = true
          let res = data.data.data
          res.push({
            bankName: '其他银行',
            id: '0'
          })
          this.slots[0].values = res
        } else {
          Toast({
            message: data.data.message,
            position: 'bottom'
          })
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    sureBank () {
      this.showBank = false
      this.bank = this.checkBank.bankName
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.bindCard
  width 100%
  height 100%
  overflow auto
  background #EFF0F2
  position relative
  .cont
    margin-top 1.2rem
    background #ffffff
    padding-left 1.6rem
    li
      height 1.4rem
      padding-top 1.8rem
      padding-right 1rem
      padding-bottom 1.8rem
      font-size 1.4rem
      input
        width 100%
        outline none
      i
        position relative
        float right
        &:after
          border solid 2px #999999
          border-bottom-width 0
          border-left-width 0
          content ''
          top 0.75rem
          right 0.75rem
          position absolute
          width 5px
          height 5px
          -webkit-transform translateY(-50%) rotate(135deg)
          transform translateY(-50%) rotate(135deg)
        &:before
          content '选择银行'
          font-size 1.2rem
          color #666666
          margin-right 2rem
          vertical-align middle
  .addressWrap
    position fixed
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
      .buttons
        display flex
        span
          flex 1
          font-size 1.2rem
          line-height 3.2rem
          color #26a2ff
          text-align center
  .sureBtn
    padding 2rem 1.6rem
</style>