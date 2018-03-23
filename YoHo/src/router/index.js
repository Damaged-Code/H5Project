import Vue    from 'vue'
import Router from 'vue-router'
import index  from '../components/page/yohoIndex'

Vue.use(Router)

export const constantRouterMap = [
  {
    path     : '/',
    name     : 'index',
    component: index,
  },
  {
    path: '/page/yohoGirls',
    name: 'yohoGirls',
    component: resolve => require(['../components/page/yohoGirls'],resolve),
  },
  {
    path: '/page/yohoKids',
    name: 'yohoKids',
    component: resolve => require(['../components/page/yohoKids'],resolve),
  },
  {
    path: '/page/yohoLifeSty',
    name: 'yohoLifeSty',
    component: resolve => require(['../components/page/yohoLifeSty'],resolve),
  },
  {
    path: '/page/login',
    name: 'yohoLogin',
    component: resolve => require(['../components/page/login'],resolve),
  },
  {
    path: '/page/registered',
    name: 'yohoRegistered',
    component: resolve => require(['../components/page/registered'],resolve),
  },
  {
    path: '/page/yohoProduct',
    name: 'yohoProduct',
    component: resolve => require(['../components/page/yohoProduct'],resolve),
  },
  {
    path: '/page/shopInfo',
    name: 'shopInfo',
    component: resolve => require(['../components/page/shopInfo'],resolve),
  },
  {
    path: '/page/shopCart',
    name: 'shopCart',
    component: resolve => require(['../components/page/shopCart'],resolve),
  },
]

export default new Router({
  routes: constantRouterMap,
})
export const asyncRouterMap = []
