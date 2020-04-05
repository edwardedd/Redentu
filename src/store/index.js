import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pink: 'pink',
    yellow: 'yellow',
    colorFirst: 'purple',
    colorSecond: 'white',
    bigFont: '54px',
    smallFont: '34px'
  },
  mutations: {
    set_pink: (state,payload) => {
      state.pink = payload
    },
    set_yellow: (state,payload) => {
      state.yellow = payload
    },
    set_colorFirst: (state, payload) => {
      state.colorFirst = payload
    },
    set_colorSecond: (state, payload) => {
      state.colorSecond = payload
    },
    set_bigFont: (state,payload) => {
      state.bigFont = payload
    },
    set_smallFont: (state,payload) => {
      state.smallFont = payload
    }
  },
  actions: {
    SET_PINK: (context,payload) => {
      context.commit('set_pink', payload)
    },
    SET_YELLOW: (context,payload) => {
      context.commit('set_yellow', payload)
    }
  },
  getters: {
    pink: state => state.pink,
    yellow: state => state.yellow,
    colorFirst: state => state.colorFirst,
    colorSecond: state => state.colorSecond,
    bigFont: state => state.bigFont,
    smallFont: state => state.smallFont,
  }
})
