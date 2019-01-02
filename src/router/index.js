import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'

Vue.use(Router)

/* eslint-disable */
export default new Router({
    routes: [
        {
            path: '/',
            name: 'Portfolio',
            component: Portfolio
        },
        {
            path: '/About',
            name: 'About',
            component: About
        }
    ]
})
