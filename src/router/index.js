import Vue from 'vue'
import Router from 'vue-router'

const showEverything = () => import('@/views/showEverything')
const makeComplaints = () => import('@/views/makeComplaints')

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
        },
        {
          path: 'show-everything',
          component: showEverything
        },
        {
          path: 'makeComplaints',
          component: makeComplaints
        }
      ]
    }
  ]
})
