<template>
    <div class="modal-wrap" v-show="open">
      <h3>{{title}}</h3>
      <slot name="modal-content">
      </slot>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'modal',
        props: {
          title: {
            type: String,
            default: '标题'
          },
          open: {
            type: Boolean,
            default: !1
          }
        }
    }
</script>

<style rel="stylesheet/stylus" lang="stylus">
  @import '../../assets/css/mixin.styl';
  .modal-wrap
    position absolute
    right 0
    top 50%
    width rpx(720)
    height rpx(996)
    margin-top rpx(-498)
    background url("../assets/img/modal_bg.png") no-repeat;
    background-size 100% 100%
    z-index 9999
    padding-right rpx(40)
    box-sizing border-box
    & h3
      width 100%
      text-align center
      height rpx(108)
      line-height rpx(108)
      font-size rpx(48)
      color #6e3900
      font-family "GrilledCheeseBTNToasted"
</style>
