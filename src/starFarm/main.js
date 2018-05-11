import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './boot/router'
import device from 'current-device'

Vue.use(VueRouter)

// 设置dpr与rem适配
const docEl = document.documentElement
const metaEl = docEl.querySelector('meta[name = "viewport"]')
let dpr, rem, scale
let deviceWidth = docEl.clientWidth
dpr = window.devicePixelRatio || 1
device.desktop() && deviceWidth >= 750 && (deviceWidth = 750)
dpr === 1.5 && (dpr = 1) // 兼容低端安卓机型缩放的问题
scale = 1 / dpr
rem = deviceWidth * dpr / 10
docEl.setAttribute('data-dpr', dpr)
metaEl.setAttribute('content', 'initial-scale = ' + scale + ',maximum-scale=' + scale + ',minimum-scale=' + scale + ',user-scalable = no')
let resizeRem = device.desktop() ? 75 / dpr : deviceWidth * dpr / 10
docEl.style.fontSize = resizeRem + 'px'

// 设置函数防抖
let debounce = null

window.onresize = () => {
  // resize后设备宽度为 deviceWidth * dpr;
  clearTimeout(debounce)
  debounce = setTimeout(() => {
    let resizeRem = device.desktop() ? 75 / dpr : document.documentElement.clientWidth / 10
    docEl.style.fontSize = resizeRem + 'px'
  }, 500)
}

window.rem2px = function (v) {
  v = parseFloat(v)
  return v * rem
}

window.px2rem = function (v) {
  v = parseFloat(v)
  return v / rem
}

// 配置router
const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h('router-view')
})
