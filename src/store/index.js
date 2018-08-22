import Vue from 'vue'
import Vuex from 'vuex'
import main from './main'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rootTxt: 'rootState words',
    rootCount: 0
  },
  getters: {
    getTxt: state => {
      return state.rootTxt + 'its me'
    }
  },
  mutations: {
    increment (state, num) {
      state.rootCount += num
    }
  },
  actions: {
    increment ({ commit }, num) {
      commit('increment', num)
    }
  },
  modules: {
    main
  }
})
