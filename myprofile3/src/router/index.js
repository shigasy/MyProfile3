import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/templates/MyHome'
import About from '@/components/templates/MyAbout'
import Work from '@/components/templates/MyWork'
import Contact from '@/components/templates/MyContact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/work',
      component: Work,
    },
    {
      path: '/contact',
      component: Contact
    },
  ]
})
