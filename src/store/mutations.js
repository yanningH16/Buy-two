import * as types from './mutation-types'
import { clearUserInfo, clearUserToken } from '../assets/js/cache'
const mutations = {
  [types.SET_USER_INFO] (state, query) {
    state.userInfo = query
  },
  [types.SET_USER_TOKEN] (state, query) {
    state.userToken = query
  },
  [types.CLEAR_USER_INFO] (state) {
    state.userInfo = clearUserInfo()
  },
  [types.CLEAR_USER_TOKEN] (state) {
    state.userToken = clearUserToken()
  },
  [types.ERROR_TIME_LIST] (state, arr) {
    state.errorTimeList = arr
  }
}
export default mutations
