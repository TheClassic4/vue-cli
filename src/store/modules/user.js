// import Vue from 'vue'
import { login } from '@/api/login'

const user = {
  state: {
    csessionId: ''
  },

  mutations: {
    SET_CSESSIONID: (state, csessionId) => {
      sessionStorage.setItem('csessionId', csessionId)
      state.csessionId = csessionId
    }
  },

  actions: {
    /* 登陆 */
    GetInfo({
      commit
    }) {
      return new Promise((resolve, reject) => {
        login().then(res => {
          if (res.success && res.data.length > 0) {
            commit('SET_CSESSIONID', res.data.csessionId)
          } else {
            reject(res)
          }
          resolve(res.data)
        }).catch(err => {
          reject(err)
        })
      })
    },

    /* 退出登录 */
    Logout({
      commit,
      state
    }) {
      return new Promise((resolve) => {
        commit('SET_CSESSIONID', '')
        commit('SET_ROLES', [])
        sessionStorage.removeItem('csessionId')
        sessionStorage.removeItem('info')
        resolve()
      })
    }

  }
}

export default user
