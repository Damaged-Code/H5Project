import Vue  from 'vue'
import Vuex from 'vuex'
import getters from './getter'
import tabChoose from './modules/tabChoose'
import getUrl from './modules/getUrl'
import userInfo from './modules/userInfo'
import shopID from './modules/shopID'
import shopCart from './modules/shopCart'
import shopCartID from './modules/shopCartID'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    tabChoose,
    getUrl,
    userInfo,
    shopID,
    shopCart,
    shopCartID
  },
  getters
})
export default store
