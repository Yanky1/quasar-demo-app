
export const state = {
  carsInventory: [],
  isThereNewCar: false
}

export const mutations = {
  PUSH_CAR (state, car) {
    state.carsInventory.push(car)
  },
  UPDATE_CARS (state, cars) {
    state.carsInventory = cars
  },
  SET_IF_NEW_CAR (state, definedBoolean) {
    state.isThereNewCar = definedBoolean
  }
}

export const actions = {
  pushCar ({ commit, state }, car) {
    commit('PUSH_CAR', car)
  },
  updateInventory ({ commit, state }, cars) {
    commit('UPDATE_CARS', cars)
  },
  setIfNewCar ({ commit, state }, definedBoolean) {
    commit('SET_IF_NEW_CAR', definedBoolean)
  }

}

export default {
  state,
  mutations
}
