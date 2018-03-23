const shopID = {
  state:{
    shop_ID:'',
  },
  mutations:{
    SET_SHOPID:(state,shop_ID)=>{
      state.shop_ID = shop_ID
    }
  },
  actions:{
    //设置当前页面
    setShopID({commit},shop_ID){
      commit('SET_SHOPID',shop_ID)
    }
  }
}
export default shopID
