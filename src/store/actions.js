import * as types from './mutation-types'


export const add =  async ({ commit, state }, { value }) => {
    commit(types.TEST, value)
}