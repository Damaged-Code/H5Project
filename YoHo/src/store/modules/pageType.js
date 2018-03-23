const pageType = {
  state:{
    page_type:'',
  },
  mutations:{
    SET_PAGETYPE:(state,page_type)=>{
      state.page_type = page_type
    }
  },
  actions:{
    //设置当前页面
    setPage({commit},pageInfo){}
  }
}
