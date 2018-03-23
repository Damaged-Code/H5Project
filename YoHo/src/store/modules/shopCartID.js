const shopCartID = {
  state:{
    shopCart_ID:[],
  },
  mutations:{
    SET_SHOPCARTID:(state,shop_ID)=>{
      state.shopCart_ID.push(shop_ID)
    }
  },
  actions:{
    //设置当前页面
    setShopCartID({commit},shop_ID){
      commit('SET_SHOPCARTID',shop_ID)
    }
  }
}
export default shopCartID
