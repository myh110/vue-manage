
import * as types from './mutation-types'

export default {
    [types.TEST] (state, n){
         // 变更状态
      state.count += n
    }
}