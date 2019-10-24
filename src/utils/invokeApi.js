import request from '@/utils/request'

export default {
  post(url, data) {
    return request({
      url,
      method: 'POST',
      data
    })
  },
  put(url, data) {
    return request({
      url,
      method: 'PUT',
      data
    })
  },
  delete(url, data) {
    return request({
      url,
      method: 'DELETE',
      data
    })
  },
  get(url, params) {
    return request({
      url,
      method: 'GET',
      params
    })
  }
}
