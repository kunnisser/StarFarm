<template>
    <div class="app-wrap">
      <transition name="routeTransform">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
      </transition>
      <transition name="routeTransform">
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </transition>
      <loading></loading>
    </div>
</template>

<script type="text/ecmascript-6">
import loading from './components/feedback/loadingView';
export default {
    name: 'app',
    components: {
      loading
    }
    };
</script>

<style rel="stylesheet/stylus" lang="stylus">
  @import "assets/css/index.styl";
  body
    position relative
    .app-wrap
      background-color #ffffff
      position absolute
      width rpx(750)
      top 0
      left 50%
      margin-left rpx(-375)
      height 100%
      box-shadow 0 0 rpx(4) rgba(0, 0, 0, 0.6)
      .routeTransform-enter-active
        transition opacity 500ms cubic-bezier(0.55, 0, 0.1, 1)
      .routeTransform-leave-to, .routeTransform-enter
        opacity 0
      .routeTransform-leave, .routeTransform-enter-to
        opacity 1
</style>
