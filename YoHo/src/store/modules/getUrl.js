import tabChoose from './tabChoose';

const getUrl = {
  state: {
    index_url: '',
  },
  mutations: {
    SET_URL: (state, index_url) => {
      state.index_url = index_url;
    },
  },
  actions: {
    //设置当前页面
    setUrl({ commit }, index_url) {
      commit('SET_URL', index_url);
    },
  },
};
export default getUrl;
