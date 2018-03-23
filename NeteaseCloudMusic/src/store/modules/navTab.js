
const navTab = {
  state:{
    nav_tab:'推荐音乐',
  },
  mutations:{
    SET_NAV_TAB:(state,nav_tab)=>{
      state.nav_tab = nav_tab
    }
  },
  actions:{
    //设置当前页面
    setNavTab({commit},nav_tab){
      commit('SET_NAV_TAB',nav_tab)
    }
  }
}
export default navTab
