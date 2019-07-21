import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

// 声明使用vuex
Vue.use(Vuex)

export default new Vuex.Store({
  store,
  state,
  actions,
  mutations,
  getters
})
