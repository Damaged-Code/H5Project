import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/view/home/Home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/TitleContent',
      name: 'TitleContent',
      component: () => import('../view/TitleContent/TitleContent'),
    },
  ],
});
