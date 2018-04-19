import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';

const myVue = () => import('../components/myVue.vue');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/myVue',
      name: 'myVue',
      component: myVue,
    },
  ],
});
