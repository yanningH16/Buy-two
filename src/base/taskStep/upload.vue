<template>
  <div class="upload">
    <h2>{{ title }}
      <i class="wanderIcon" @click="wander"></i>
    </h2>
    <p>{{ tip }}</p>
    <div class='finish_room'>
      <div class='finish_room2'>
        <div v-for='(item ,index ) in imgs' class='room_img' :key="index">
          <img :src="item">
          <span @click='delete_img(index)' class="removeImg"><img src="../../assets/images/delete.svg" ref="deleteBox"></span>
        </div>
        <div class='room_add_img' v-show="isMax">
          <span><img src="./imgs/add_img.png"></span>
          <span v-if="isShow">{{ imgs.length + 1 }} / {{ max }}</span>
          <input @change='add_img' type="file" ref="chooseImg">
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import { uploadPromise, uploadFile } from '../../assets/js/upload'
import { MessageBox, Toast } from 'mint-ui'
export default {
  name: 'upload',
  data () {
    return {
      imgs: [],
      isMax: true,
      lastImg: [],
      uploadImgs: []
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    tip: {
      type: String,
      default: ''
    },
    isShow: {
      type: Boolean,
      default: true
    },
    myimgs: {
      type: Array,
      default: () => {
        return []
      }
    },
    max: {
      type: Number,
      default: 3
    }
  },
  mounted () {
    this.imgs = this.myimgs
  },
  watch: {
    imgs (newVal) {
      console.log(newVal)
      if (newVal.length === this.max) {
        this.isMax = false
      }
      this.$emit('upload-change', newVal)
    },
    myimgs (newVal) {
      this.imgs = newVal
    }
  },
  methods: {
    delete_img (item) {
      this.$refs.chooseImg.value = '' // 修复upload删除之后无法选取上一个
      this.imgs.splice(item, 1)
      if (this.imgs.length < this.max) {
        this.isMax = true
      }
    },
    add_img (event) {
      let img1 = event.target.files[0]
      if (!(/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(img1.name))) {
        MessageBox('错误提示', '图片格式只能为gif，jpg，jpeg，png')
        return false
      } else {
        this.uploadImg(img1)
      }
    },
    uploadImg (img) {
      uploadPromise.then((res) => {
        if (res.statusText === 'OK') {
          uploadFile(res.data, img).then((res) => {
            this.imgs.push(res)
          }).catch((err) => {
            console.log(err)
            Toast({
              message: '上传失败!',
              position: 'bottom'
            })
          })
        }
      }).catch((err) => {
        console.log(err)
        Toast({
          message: '上传失败!',
          position: 'bottom'
        })
      })
    },
    // 疑问
    wander () {
      this.$emit('wander')
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.upload
  h2
    font-size 1.6rem
    color #08090A
    line-height 1
    margin-bottom 1rem
    i
      display inline-block
      width 1.6rem
      height 1.6rem
      font-size 1.6rem
      text-align center
      vertical-align top
  p
    font-size 1.2rem
    color #666666
    line-height 1.6rem
  .finish_room
    width 100%
    margin-top 2rem
  .finish_room2
    height auto
    /* padding: 1.2rem; */
    display flex
    align-items center
    flex-wrap wrap
  .finish_room2 .room_img
    width 5.8rem
    height 5.8rem
    margin-right 1.2rem
    margin-top 1.2rem
    position relative
    border-radius 2px
    /* overflow: hidden; */
  .finish_room2 .room_img img
    border-radius 2px
    width 100%
    height 100%
  .finish_room2 > .room_img span
    width 2rem
    height 2rem
    position absolute
    right -1rem
    top -1rem
  .room_add_img
    width 5.8rem
    height 5.8rem
    border-radius 2px
    margin-right 1.2rem
    margin-top 1.2rem
    border 1px solid #e1e1e1
    box-sizing border-box
    display flex
    align-items center
    position relative
    flex-direction column
    justify-content center
  .room_add_img > span > img
    width 100%
    height 100%
  .room_add_img > span:nth-child(1)
    flex 0 0 2.8rem
    width 2.8rem
    height 2.8rem
    overflow hidden
  .room_add_img > span:nth-child(2)
    flex 0 0 1rem
    margin-top 0.5rem
    color gray
    font-size 1rem
  .room_add_img input
    position absolute
    top 0px
    left 0px
    width 100%
    height 100%
    z-index 99999
    opacity 0
</style>