import axios from '../plugins/axios'

export const login = (params = {}) => axios({
    method: 'post',
    url: '/account/user/checklogin',
    data: params
})