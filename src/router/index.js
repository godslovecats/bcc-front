import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import decidePage from '@/components/view/decidePage'
import projectPage from '@/components/view/projectPage'
import projectAbout from '@/components/view/projectAbout'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/decidePage',
      name: 'decidePage',
      component: decidePage
    },
    {
      path: '/projectPage',
      name: 'projectPage',
      component: projectPage
    },
    {
      path: '/projectAbout',
      name: 'projectAbout',
      component: projectAbout
    }
  ]
})
