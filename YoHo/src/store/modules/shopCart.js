const shopCart = {
  state:{
    shops:[],
  },
  mutations:{
    SET_SHOPCART:(state,shopId)=>{
      state.shops.push(shopId)
    }
  },
  actions:{
    //设置当前页面
    setShopCart({commit},shopId){
      commit('SET_SHOPCART',shopId)
    }
  }
}
export default shopCart
