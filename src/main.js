// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css'

Vue.use(ElementUI)

hljs.initHighlightingOnLoad()
Vue.directive('hljs', el => { // highlight code directive
  let blocks = el.querySelectorAll('pre code')
  Array.prototype.forEach.call(blocks, hljs.highlightBlock)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
