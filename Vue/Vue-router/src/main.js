// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import './assets/icon/iconfont.css';

Vue.config.productionTip = false;
router.beforeEach((to, from, next) => {
  console.log(to.path, from.path);
  next(console.log(0));
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
