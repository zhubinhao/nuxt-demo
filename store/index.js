import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const state = {
  todo: 1,
  path: '/',
  list: [1],
  show: true,
  audio: []
}

const getters = { // 获取state里的数据，并对其做过滤等一些操作
}
const mutations = { // 改变state里的数据，
  changePath (state, str) {
    state.path = str
  },
  setData (state, obj) {
    state[obj.key] = obj.value
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
