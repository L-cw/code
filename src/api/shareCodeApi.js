import request from '../axios/index'

export function getShareInfo (data) {
  return request({
    url: '/',
    method: 'post',
    data
  })
}
