import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    web3: null,
  },
  mutations: {
    saveWeb3(state, payload) {
      state.web3 = payload;
    },
  },
  actions: {

  },
});
