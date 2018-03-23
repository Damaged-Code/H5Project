import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/order',
      name: 'order',
      component: resolve => require(['../components/Order'], resolve),
    },
    {
      path: '/delivery',
      name: 'delivery',
      component: resolve => require(['../components/distribution/delivery'], resolve),
      children: []
    },
    {
      path: '/distribution_info',
      name: 'distribution_info',
      component: resolve => require(['../components/distribution/distribution_info'], resolve),
    },
    {
      path: '/acquire',
      name: 'acquire',
      component: resolve => require(['../components/distribution/acquire'], resolve),
    },
    {
      path: '/menu',
      name: 'menu',
      component: resolve => require(['../components/menu/Menu'], resolve),
    },
    {
      path: '/shopdetail',
      name: 'shopdetail',
      component: resolve => require(['../components/shop/ShopDetail'], resolve),
    },
    {
      path: '/orderseat',
      name: 'orderseat',
      component: resolve => require(['../components/order/OrderSeat'], resolve),
    },
    {
      path: '/myorderseat',
      name: 'myorderseat',
      component: resolve => require(['../components/order/MyOrder'], resolve),
    },

  ]
})

