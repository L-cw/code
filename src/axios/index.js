/* eslint-disable */
import axios from 'axios'
import conf from '../config.js'
import vm from '../main.js'

const postApi = axios.create({
  baseURL: conf.apiBaseURL
})
const getApi = axios.create({
  baseURL: conf.apiBaseURL
})
const uploadApi = axios.create({
  baseURL: conf.apiBaseURL
})
// 请求前拦截
postApi.interceptors.request.use((config) => {
  // config.data.userToken = localStorage.getItem('token') ? localStorage.getItem('token') : ''
  return config
}, (err) => {
  return Promise.reject(err)
})
uploadApi.interceptors.request.use((config) => {
  // config.headers.userToken = localStorage.getItem('token') ? localStorage.getItem('token') : ''
  return config
}, (err) => {
  return Promise.reject(err)
})

// 响应拦截
postApi.interceptors.response.use(function (response) {
  return response
}, function (error) {
  // 处理响应失败
  return Promise.reject(error)
})
uploadApi.interceptors.response.use(function (response) {
  if (response.status === 200) {
    response.data.data.uploadPath = conf.imgDomain + response.data.data.uploadPath
  }
  return response
}, function (error) {
  // 处理响应失败
  return Promise.reject(error)
})
var req = {
  post: (params) => {
    postApi.request({
      url: params.url,
      method: params.type || 'post',
      data: params.data || {},
      headers: params.headers || { 'Content-Type': 'application/json' }
    }).then((res) => {
      if (res.data.err_code === '400009') {
        vm.$store.commit('removeToken', '')
        vm.$router.push({path: '/login', query: {redirect: vm.$route.fullPath}})
      } else {
        params.success(res)
      }
    }).catch((err) => {
      if (params.fail) {
        params.fail(err)
      } else {
        console.log(err)
      }
    })
  },
  upload: (params) => {
    var formdata = new FormData()
    for (var img in params.data) {
      formdata.append(img, params.data[img])
    }
    uploadApi.request({
      url: params.url,
      method: params.type || 'post',
      data: formdata,
      headers: params.headers || { 'Content-Type': 'multipart/form-data' }
    }).then((res) => {
      if (res.data.err_code === '400009') {
        vm.$store.commit('removeToken', '')
        vm.$router.push({path: '/login', query: {redirect: vm.$route.fullPath}})
      } else {
        params.success(res)
      }
    }).catch((err) => {
      if (params.fail) {
        params.fail(err)
      } else {
        console.log(err)
      }
    })
  },
  get: (params) => {
    getApi.request({
      url: params.url,
      method: params.type || 'get',
      params: params.data || {}
    }).then((res) => {
      params.success(res)
    }).catch((err) => {
      if (params.fail) {
        params.fail(err)
      }
    })
  },
  initCheckToken: (params) => {
    postApi.request({
      url: params.url,
      method: params.type || 'post',
      data: params.data || {},
      headers: params.headers || { 'Content-Type': 'application/json' }
    }).then((res) => {
      params.success(res)
    }).catch((err) => {
      if (params.fail) {
        params.fail(err)
      } else {
        console.log(err)
      }
    })
  }
}
export default req
