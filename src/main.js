// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import feather from 'vue-icon'
Vue.use(feather, {
    name: 'v-icon',
    props: {
        baseClass: {
            type: String,
            default: 'v-icon'
        }
    }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})