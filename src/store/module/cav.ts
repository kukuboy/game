import { CavState } from '@/types/views/cav.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as CavApi from '@/api/cav'

const state: CavState = {
  cav: {
   author: undefined
  }
}

// 强制使用getter获取state
const getters: GetterTree<CavState, any> = {
  author: (state: CavState) => state.cav.author
}

// 更改state
const mutations: MutationTree<CavState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: CavState, data: CavState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) { return }
      state[key] = data[key]
    }
  }
}

const actions: ActionTree<CavState, any> = {
  UPDATE_STATE_ASYN({ commit, state: CavState }, data: CavState) {
    commit('UPDATE_STATE', data)
  },
  // GET_DATA_ASYN({ commit, state: LoginState }) {
  //   Cav.getData()
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}

