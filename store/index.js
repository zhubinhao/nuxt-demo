import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const state = {
  todo: 1,
  path: '/',
  list: [1],
  show: true
}

const getters = { // 获取state里的数据，并对其做过滤等一些操作
}
const mutations = { // 改变state里的数据，
  changePath (state, str) {
    state.path = str
  },
  setData (state, obj) {
    state.list = obj.detail
  }
}
const actions = {
  async GET_STARS ({ commit }) {
    const { data } = await axios.get('banners?type=1')
    commit('setData', data)
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
