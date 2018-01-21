<template>
  <div class="bindAddress">
    <ul class="cont">
      <li class="border-bottom-1px">
        <input type="text" v-model="getName" placeholder="收货人姓名">
      </li>
      <li class="border-bottom-1px">
        <input type="number" v-model="phoneNum" placeholder="手机号">
      </li>
      <li class="border-bottom-1px" @click="chooseAddress">
        <input type="text" v-model="pcName" style="width:80%" readonly placeholder="省份、城市、区县">
        <i></i>
      </li>
      <li>
        <input type="text" v-model="addressDetail" placeholder="详细地址, 如街道, 楼牌号等">
      </li>
    </ul>
    <div class="footer">
      <p>备注：
        <br />我们会不定期的派发实物礼物，请填写您的 收货地址</p>
      <span class="btn" @click="doNext">保存</span>
    </div>
    <div class="addressWrap" v-show="showAddress">
      <div class="address">
        <div class="buttons border-bottom-1px">
          <span @click="showAddress=false">取消</span>
          <span @click="sureTheAddress">确定</span>
        </div>
        <mt-picker ref='pickerObj' :slots="slots" :visibleItemCount="7" value-key="name" @change="onValuesChange"></mt-picker>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { Picker, Toast } from 'mint-ui'
Vue.component(Picker.name, Picker)

export default {
  name: 'bindAddress',
  data () {
    return {
      getName: '',
      phoneNum: '',
      addressDetail: '',
      pcName: '',
      showAddress: false,
      provinceObj: {},
      cityObj: {},
      addressArr: [],
      slots: [
        {
          flex: 1,
          values: [{ code: '110000', id: 1, name: '北京市' }],
          className: 'slot1',
          textAlign: 'center'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: [],
          className: 'slot3',
          textAlign: 'center'
        }, {
          divider: true,
          content: '-',
          className: 'slot4'
        }, {
          flex: 1,
          values: [],
          className: 'slot5',
          textAlign: 'center'
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
    provinceObj (val) {
      if (val) {
        this.getCity(val.code)
      }
    },
    cityObj (val) {
      if (val) {
        this.getstree(val.code)
      }
    }
  },
  methods: {
    onValuesChange (picker, values) {
      console.log(values)
      this.provinceObj = values[0]
      this.cityObj = values[1]
      this.addressArr = values
    },
    chooseAddress () {
      this.getProvince()
    },
    getProvince () {
      this.$ajax.post('/api/config/location/getProvinceList', {
      }).then((data) => {
        if (data.data.code === '200') {
          this.showAddress = true
          this.slots[0].values = data.data.data
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
    getCity (provinceCode) {
      this.$ajax.post('/api/config/location/getCityListByProvinceCode', {
        provinceCode: provinceCode
      }).then((data) => {
        if (data.data.code === '200') {
          this.slots[2].values = data.data.data
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
    getstree (cityCode) {
      this.$ajax.post('/api/config/location/getAreaListByCityCode', {
        cityCode: cityCode
      }).then((data) => {
        if (data.data.code === '200') {
          this.slots[4].values = data.data.data
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
    sureTheAddress () {
      this.showAddress = false
      this.pcName = (this.addressArr[0].name) + (this.addressArr[1] ? this.addressArr[1].name : '') + (this.addressArr[2] ? this.addressArr[2].name : '')
    },
    doNext () {
      this.$ajax.post('', {
        buyerUserAccountId: this.userInfo.buyerUserAccountId
      }).then((data) => {
        if (data.data.code === '200') {
          this.$router.push({ name: 'withdrawSet2' })
        } else {
          Toast({
            message: data.data.message,
            position: 'bottom'
          })
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.bindAddress
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
  .footer
    padding 0 1.6rem
    p
      font-size 1.2rem
      color #75787F
      line-height 2.4rem
      margin-top 1.2rem
    .btn
      margin-top 2rem
      margin-bottom 2rem
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
</style>