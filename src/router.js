import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Favorites from './views/Favorites.vue'
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
      path: '/favorites',
      name: 'favorites',
      component: Favorites
    },
    {
      path: '/join',
      name: 'join',
      component: Join
    }
  ]
})
