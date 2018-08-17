import Vue from 'vue'
import Router from 'vue-router'

import index from '@/views/index'
import KeepAlive from '@/views/KeepAlive'
import AnimateCss from '@/views/AnimateCss'
import Mock from '@/views/Mock'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/keepalive',
      name: 'KeepAlive',
      component: KeepAlive,
      meta: {
        title: 'keep-alive'
      }
    },
    {
      path: '/AnimateCss',
      name: 'AnimateCss',
      component: AnimateCss,
      meta: {
        title: 'AnimateCss'
      }
    },
    {
      path: '/Mock',
      name: 'Mock',
      component: Mock,
      meta: {
        title: 'Mock'
      }
    }
  ]
})
