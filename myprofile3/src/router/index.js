import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/templates/MyHomeView'
import About from '@/components/templates/MyAboutView'
import Work from '@/components/templates/MyWorksView'
import Contact from '@/components/templates/MyContactView'
import VueTyper from 'vue-typer'

Vue.use(Router)
Vue.use(VueTyper)

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
    {
      path: '/*',
      component: Home
    },
  ]
})
