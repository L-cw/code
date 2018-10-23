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
          path: 'showEverything',
          component: showEverything
        },
        {
          path: 'makeComplaints',
          component: makeComplaints
        },
        {
          path: '/shareCode',
          component: resolve => {
            require(['@/views/shareCode/index.vue'], resolve)
          },
          meta: {
            title: {
              'cn': '代码分享',
              'en': 'Share Code'
            },
            requireAuth: false
          },
          name: 'sharecode'
        },
        {
          path: '/shareCode/detail',
          component: resolve => {
            require(['@/views/shareCode/codeContent.vue'], resolve)
          },
          meta: {
            title: {
              'cn': '代码详情',
              'en': 'Code Detail'
            },
            requireAuth: false
          },
          name: 'codecontent'
        }
      ]
    }
  ]
})
