import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: resolve => {
        require(['@/views/common/layout.vue'], resolve)
      },
      children: [
        {
          path: '/',
          component: resolve => {
            require(['@/views/index.vue'], resolve)
          },
          meta: {
            title: {
              'cn': '首页',
              'en': 'Home Page'
            },
            requireAuth: false
          },
          name: 'index'
        }
      ]
    }
  ]
})
