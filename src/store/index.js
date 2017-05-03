/**
 * Created by beck.zhang on 5/2/2017.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import getters from './getters.js'
import mutations from './mutations.js'
import state from './states.js'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: debug,
  modules: {}
})
