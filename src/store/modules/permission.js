import { asyncRoutes, constantRoutes } from '@/router'
import store from '@/store'
import InvokeAllApi from '@/utils/invokeAllApi'
import * as filterRouter from '@/utils/filterRouter.js'
/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  generateRoutes({ commit }, data) {
    return new Promise(resolve => {
      let accessedRoutes = []
      const loginUser = store.state.user.loginUser
      console.log('accessedRoutes------', loginUser)
      if (Number(loginUser.is_admin) === 1) {
        accessedRoutes = asyncRoutes || []
      } else {
        InvokeAllApi.get('/V4/rbac.user.get.resource.list', { id: loginUser.id }).then(res => {
          const list = JSON.parse(JSON.stringify(res.list)) || []
          accessedRoutes = filterRouter.filterUserRouter(asyncRoutes, list)
        }).catch(e => {
          accessedRoutes = []
        })
      }
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
