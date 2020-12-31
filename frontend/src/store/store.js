import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

import * as carsInventory from './modules/carsInventory.js'

export default new Vuex.Store({
  plugins: [createPersistedState(
    {
      paths: ['carsInventory']
    }
  )],
  modules: {
    carsInventory
  }
})
