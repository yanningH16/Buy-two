<template>
  <div class="shopName">
    <h2>{{ title }}
      <i class="wanderIcon"></i>
    </h2>
    <div class="inputs">
      <input type="text" placeholder="输入店铺名称" @input="onInput" v-model="value">
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'shopName',
  data () {
    return {
    }
  },
  computed: {
    value: {
      get (val) {
        return this.shopValue
      },
      set (val) {
        this.$emit('update:shopValue', val)
        return val
      }
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    shopValue: {
      type: String,
      default: ''
    }
  },
  methods: {
    onInput () {
      this.$emit('onInput')
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.shopName
  color #08090A
  h2
    font-size 1.6rem
    line-height 1
    i
      display inline-block
      font-size 1.6rem
      line-height 1
      width 1.6rem
      height 1.6rem
      vertical-align top
  .inputs
    margin-top 4rem
    input
      font-size 1.4rem
      outline none
      line-height 1
      width 100%
</style>