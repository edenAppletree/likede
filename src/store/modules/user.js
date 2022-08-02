
export default {
  namespaced: true,
  state: {
    token: "",
    userInfo:{}
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
    getUserInfo(state, payload) {
      state.userInfo = payload;
    },
  },
  actions: {
    getToken(context, payload) {
      console.log(payload);
      context.commit("setToken", payload);
    },
    logout(context) {
      context.commit("setToken", "");
    },
    getUserInfo(context, payload) {
      context.commit("getUserInfo", payload);
    },
  },
  getters: {},
};