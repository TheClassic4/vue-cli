import { axios } from '@/http/request'
import { stringify } from 'qs'

/* login登录接口 */
export function login(parameter) {
  return axios({
    url: '/user/login',
    method: 'post',
    data: stringify(parameter)
  })
}
