export default {
    namespaced: true,
    state: {
        token:''
    },
    mutations: {
        setToken(state, payload) {
            state.clToken= payload
        }
    },
    actions: {
        getToken(context, payload) {
            context.commit("setToken", payload);
        },
        logout(context) {
            context.commit("setToken",'');
        }
    },
    getters:{}
}