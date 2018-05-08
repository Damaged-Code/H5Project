import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/:aid?/TitleContent',
      name: 'TitleContent',
      component: () => import('@/view/TitleContent/TitleContent'),
    },
    { path: '*', component: () => import('@/view/home/Home') },
  ],
})
