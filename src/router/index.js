import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Raccoonal from '@/components/Raccoonal'
import JsaWebsite from '@/components/JsaWebsite'
import Pantry from '@/components/Pantry'
import CV from '@/components/CV'

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
        },
        {
            path: '/Raccoonal',
            name: 'Raccoonal',
            component: Raccoonal
        },
        {
            path: '/JSA',
            name: 'UCSD JSA',
            component: JsaWebsite
        },
        {
            path: '/CV',
            name: 'CV',
            component: CV
        },
        {
            path: '/Pantry',
            name: 'Pantry',
            component: Pantry
        }
    ]
})
