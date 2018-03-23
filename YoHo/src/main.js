// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import './styles/index.scss'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
  preLoad:1.3,
  attempt:1,
  loading:'../../assets/loading.gif',
  error:'../../assets/error.png',
  throttleWait: 3000,
  observer: true,
})
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(VueAwesomeSwiper)
new Vue({
  el: '#app',
  router,
  store,
  axios,
  components: { App },
  template: '<App/>'
})
