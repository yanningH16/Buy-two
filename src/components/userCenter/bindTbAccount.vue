<template>
  <div class="bindTbAccount">
    <div class="reject" v-if="$route.query.returnBack">
      <p>驳回原因：{{ userInfo.tbRejectComment || '' }}</p>
    </div>
    <h2>
      <i class="taobaoIcon"></i>
      绑定淘宝帐号
    </h2>
    <div class="cont">
      <h6>案例</h6>
      <ul class="imgs">
        <li>
          <img @click="show(tb1Img)" style="margin-right:2rem;" :src="tb1Img" alt="">
          <!-- <img @click="show(tb2Img)" :src="tb2Img" alt=""> -->
          <!-- <p>帐号截图</p> -->
        </li>
      </ul>
    </div>
    <div @click="showImg=false" class="imgLook" v-if="showImg">
      <img :src="showUrl" alt="">
    </div>
    <div class="cont">
      <h6>上传截图</h6>
      <ul class="uploadShot">
        <li>
          <upload :myimgs="img1" :max="1" :isShow="false"></upload>
          <p>帐号截图</p>
        </li>
        <li>
          <upload :myimgs="img2" :max="1" :isShow="false"></upload>
          <p>帐号设置截图</p>
        </li>
      </ul>
      <ul class="chooseArea">
        <li class="border-bottom-1px" @click="showChoose(1)">
          {{ ageRound ? ageRound.name : '年龄段' }}
          <i></i>
        </li>
        <li @click="showChoose(2)">
          {{ address ? address.name : '填写地址' }}
          <i></i>
        </li>
      </ul>
    </div>
    <div class="addressWrap" v-show="showAddress">
      <div class="address">
        <div class="buttonsss border-bottom-1px">
          <span @click="showAddress=false">取消</span>
          <span @click="showAddress=false">确定</span>
        </div>
        <!-- <mt-picker ref='pickerObj' :slots="slots" :visibleItemCount="7" @change="onValuesChange"></mt-picker> -->
        <mt-picker ref='pickerObj' :slots="slots" :visibleItemCount="7" value-key="name" @change="onValuesChange"></mt-picker>
      </div>
    </div>
    <div class="huabei">
      <h6>是否开通花呗</h6>
      <mt-radio title="" v-model="isOpenHuabei" :options="['是', '否']">
      </mt-radio>
    </div>
    <div class="cont" v-if="isOpenHuabei=='是'">
      <h6>案例</h6>
      <ul class="imgs">
        <li>
          <img @click="show(tb2Img)" :src="tb2Img" alt="">
          <!-- <p>帐号截图</p> -->
        </li>
      </ul>
    </div>
    <div class="cont" v-if="isOpenHuabei=='是'">
      <h6>上传截图</h6>
      <ul class="uploadShot">
        <li>
          <upload :myimgs="img3" :max="1" :isShow="false"></upload>
          <p>花呗截图</p>
        </li>
      </ul>
    </div>
    <div class="buttons">
      <span class="btn" @click="bindAccount">提交</span>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Vue from 'vue'
import Upload from '../../base/taskStep/upload'
import { Toast, Radio, Picker } from 'mint-ui'
import { mapGetters } from 'vuex'
Vue.component(Radio.name, Radio, Picker)
/* global BMap */
/* eslint no-undef: "error" */
export default {
  name: 'bindTbAccount',
  components: {
    Upload
  },
  data () {
    return {
      img1: [],
      img2: [],
      img3: [],
      showUrl: '',
      isOpenHuabei: '是',
      showAddress: false,
      ageRound: {
        code: '-1',
        name: '年龄段'
      },
      address: {
        code: '-1',
        name: '填写地址'
      },
      type: '',
      tb1Img: require('./img/t1.png'),
      tb2Img: require('./img/t2.png'),
      // tb3Img: require('./img/tb3.png'),
      showImg: false,
      slots: [
        {
          flex: 1,
          values: ['河南', '郑州'],
          className: 'slot',
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
  methods: {
    show (imgUrl) {
      this.showUrl = imgUrl
      this.showImg = true
    },
    showChoose (type) {
      if (type === 1) {
        this.type = 1
        this.slots[0].values = [{
          name: '18岁以下',
          code: 0
        }, {
          name: '18-25岁以下',
          code: 1
        }, {
          name: '25-35岁',
          code: 2
        }, {
          name: '35岁以上',
          code: 3
        }]
      } else {
        this.type = 2
        this.getAddress()
      }
      this.showAddress = true
    },
    onValuesChange (picker, values) {
      console.log(picker, values)
      if (this.type === 1) {
        this.ageRound = values[0]
      } else {
        this.address = values[0]
      }
    },
    bindAccount () {
      if (this.img1.length === 0 || this.img2.length === 0) {
        Toast({
          message: '请上传完整截图',
          position: 'bottom'
        })
      } else if (this.isOpenHuabei === '是' && this.img3.length === 0) {
        Toast({
          message: '请上传花呗截图',
          position: 'bottom'
        })
      } else if (this.ageRound.code === '-1') {
        Toast({
          message: '请选择年龄段',
          position: 'bottom'
        })
      } else if (this.address.code === '-1') {
        Toast({
          message: '请选择常驻省份',
          position: 'bottom'
        })
      } else {
        this.$ajax.post('/api/buyerAccount/bindTBAccount', {
          accountUrl: this.img1[0] || '',
          accountCenterUrl: this.img2[0] || '',
          isHuabei: this.isOpenHuabei === '是' ? 1 : 0,
          locationProvince: this.address.name,
          ageIndex: this.ageRound.code,
          huabeiUrl: this.img3[0] || '',
          buyerAccountId: this.$route.query.buyerAccountId
        }).then((data) => {
          if (data.data.code === '200') {
            if (this.$route.query.returnBack) {
              this.$router.push({ name: 'accountLink' })
            } else {
              sessionStorage.setItem('bindTbAccountObj', JSON.stringify(data.data.data))
              this.$router.push({ name: 'bindJdAccount', query: { weChatObj: 1, buyerAccountId: this.$route.query.buyerAccountId } })
            }
          } else {
            Toast({
              message: data.data.message,
              position: 'bottom'
            })
          }
        }).catch((err) => {
          console.error(err)
        })
      }
    },
    getAddress () {
      this.$ajax.post('/api/config/location/getProvinceList', {
      }).then((data) => {
        if (data.data.code === '200') {
          let res = data.data.data
          let arr = []
          for (let i of res) {
            arr.push({
              name: i.name,
              code: i.code
            })
          }
          this.slots[0].values = arr
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
    setAddress (point) {
      let x = point.split(',')[0]
      let y = point.split(',')[1]
      let myGeo = new BMap.Geocoder()
      myGeo.getLocation(new BMap.Point(x, y), (result) => {
        if (result) {
          console.log(result)
          this.address = {
            code: '111',
            name: result.address
          }
        }
      })
    },
    localMyCity (result) {
      let city = result.name
      this.address = {
        code: '111',
        name: city
      }
    }
  },
  mounted () {
    if (this.$route.query.returnBack) {
      // this.getAddress()
      this.img1 = [this.userInfo.taobaoAccountPicId || '']
      this.img2 = [this.userInfo.taobaoCenterPic || '']
      this.img3 = [this.userInfo.huabeiPicId || '']
      this.address = {
        code: '',
        name: this.userInfo.locationProvince
      }
      this.ageRound = (parseInt(this.userInfo.ageIndex) === 0 ? ({
        code: 0,
        name: '18岁以下'
      }) : parseInt(this.userInfo.ageIndex) === 1 ? ({
        code: 1,
        name: '18-25岁'
      }) : parseInt(this.userInfo.ageIndex) === 2 ? ({
        code: 2,
        name: '25-35岁'
      }) : parseInt(this.userInfo.ageIndex) === 3 ? ({
        code: 3,
        name: '35岁以上'
      }) : ({
        code: -1,
        name: '年龄段'
      }))
      this.isOpenHuabei = (parseInt(this.userInfo.isTbHuabei) === 1 ? '是' : '否')
    } else {
      let myCity = new BMap.LocalCity()
      myCity.get(this.localMyCity)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.bindTbAccount
  width 100%
  height 100%
  overflow auto
  background #EFF0F2
  .reject
    padding 1.2rem 1.6rem
    background #FFEAEB
    >p
      font-size 1.2rem
      line-height 1.6rem
      color #FF3341
      vertical-align top
  h2
    font-size 2rem
    color #08090A
    line-height 2.4rem
    padding 0 1.6rem
    margin 1.6rem 0
    i
      float left
      vertical-align middle
      line-height 2.4rem
      width 2.4rem
      height 2.4rem
      margin-right 1rem
  .cont
    background #ffffff
    padding 1.6rem
    margin-bottom 1.2rem
    h6
      font-size 1.4rem
      color #08090A
    .imgs
      // display flex
      // justify-content space-around
      // text-align center
      li
        // flex 1
        >img
          width 6rem
          height 6rem
          margin-top 1.6rem
        p
          font-size 1.2rem
          color #666666
          margin-top 1rem
    .uploadShot
      margin-top 1.6rem
      li
        margin-right 4rem
      p
        font-size 1.2rem
        color #666666
        margin-top 1rem
    .chooseArea
      margin-top 1.8rem
      li
        line-height 1
        padding 1.8rem 0
        font-size 1.4rem
        color #08090A
      i
        position relative
        float right
        width 2rem
        height 2rem
        &:after
          border solid 2px #999999
          border-bottom-width 0
          border-left-width 0
          content ' '
          top 1rem
          right 0.75rem
          position absolute
          width 5px
          height 5px
          -webkit-transform translateY(-50%) rotate(45deg)
          transform translateY(-50%) rotate(45deg)
  .huabei
    background #ffffff
    margin 1.2rem 0
    h6
      font-size 1.4rem
      padding 0 1.6rem
      line-height 5rem
      color #08090A
  .imgLook
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    background rgba(0, 0, 0, 0.8)
    z-index 9999999
    overflow auto
    img
      position absolute
      top 0
      left 0
      max-width 100%
  .buttons
    padding 2rem
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