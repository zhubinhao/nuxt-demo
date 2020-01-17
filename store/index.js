import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const state = {
  todo: 1,
  path: '/',
  list: [1],
  show: true,
  audio: [],
  visits: []
}

const getters = { // 获取state里的数据，并对其做过滤等一些操作
  getParams (state) {
    return state.visits[state.visits.length - 1].params
  }
}
const mutations = { // 改变state里的数据，
  setData (state, obj) {
    state[obj.key] = obj.value
  },
  setVisits (state, value) {
    state.visits.push(value)
    state.path = value.path
  }
}
const actions = {
  async GET_AUDIO ({ commit }) {
    const { data } = await axios.get('banners?type=3')
    commit('setData', { key: 'audio', value: data.detail })
  }
}
const store = () => new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
  }
})

export default store
