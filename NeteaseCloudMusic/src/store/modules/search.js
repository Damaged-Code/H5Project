
const search = {
  state:{
    search_his:[],
  },
  mutations:{
    SET_HIS:(state,search_his)=>{
      state.search_his.push(search_his)
    }
  },
  actions:{
    //设置当前页面
    setHis({commit},search_his){
      commit('SET_HIS',search_his)
    }
  }
}
export default search
