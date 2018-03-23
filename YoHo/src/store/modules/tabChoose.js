const tabChoose = {
  state:{
    tab:'',
  },
  mutations:{
    SET_TAB:(state,tab)=>{
      state.tab = tab
    },
  },
  actions:{
    setTab({commit},tab){
      commit('SET_TAB',tab)
    },
  }
}
export default tabChoose
