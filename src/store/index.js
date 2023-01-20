import { createStore } from 'vuex'

export default createStore({
  state: {
    authentication: 'login'
  },
  getters: {
    AUTH: (state) => state.authentication
  },
  mutations: {
    toRegister: (state) => {
      state.authentication = 'register'
    },
    toLogin: (state) => {
      state.authentication = 'login'
    }

  },
  modules: {
  }
})
