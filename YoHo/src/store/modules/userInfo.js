const userInfo = {
  state:{
    user_Info:'',
  },
  mutations:{
    SET_USERINFO:(state,user_Info)=>{
      state.user_Info = user_Info
    }
  },
  actions:{
    //设置当前页面
    setUserInfo({commit},user_Info){
      commit('SET_USERINFO',user_Info)
    }
  }
}
export default userInfo
