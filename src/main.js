// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
//import Vuetify from 'vuetify'
//import 'vuetify/dist/vuetify.min.css'
import VueImg from 'v-img'
import pimg from 'pimg/vue'
import BackToTop from 'vue-backtotop'
Vue.use(VueImg)
Vue.use(pimg)
Vue.use(BackToTop)

//Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
