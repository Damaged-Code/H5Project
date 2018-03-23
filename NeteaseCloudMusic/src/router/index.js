import Vue    from 'vue'
import Router from 'vue-router'
import Hello  from '../components/Hello'

Vue.use(Router)

export const constantRouterMap = [
  {
    path     : '/',
    name     : 'index',
    component: Hello,
   
  },{
    path      :'/hotSongs',
    name      :'hotSongs',
    component: resolve => require(['../components/HotSongs'], resolve),

  },{
    path      :'/search',
    name      :'search',
    component: resolve => require(['../components/Search'], resolve),

  }
  ,{
    path      :'/musicPlay',
    name      :'musicPlay',
    component: resolve => require(['../components/musicPlay'], resolve),

  },
]

export default new Router({
   routes: constantRouterMap
})
