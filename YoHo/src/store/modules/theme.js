const theme = {
  state:{
    color:'',
  },
  mutations:{
    SET_COLOR:(state,color)=>{
      console.log(color)
      state.color = color
    },
  },
  actions:{
    setColor({commit},color){
      commit('SET_COLOR',color)
    },
  }
}
export default theme
