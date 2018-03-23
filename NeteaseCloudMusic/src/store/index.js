import Vue        from 'vue'
import Vuex       from 'vuex'
import getters    from './getter'
import navTab     from './modules/navTab'
import search     from './modules/search'


Vue.use(Vuex)

const store = new Vuex.Store({
     modules: {
       navTab,
       search,
     },
     getters
            })
export default store
