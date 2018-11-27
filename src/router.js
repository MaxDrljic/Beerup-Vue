import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Join from './views/Join.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/join',
      name: 'join',
      component: Join
    }

  ]
})
