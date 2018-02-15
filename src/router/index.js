import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import decidePage from '@/components/view/decidePage'

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
        }
    ]
})