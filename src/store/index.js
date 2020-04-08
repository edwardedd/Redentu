import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // pink: 'pink',
    // yellow: 'yellow',
    // colorFirst: 'purple',
    // colorSecond: 'white',
    // bigFont: '54px',
    // smallFont: '34px'
    JSON: []
  },
  mutations: {
    set_JSON: (state,payload) => {
      state.JSON = payload
    }
  },
  getters: {
    JSON: state => state.JSON
  }
})
