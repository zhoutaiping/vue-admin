/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap 过滤路由
 * @param 用户路由
 */
function filterUserRouter(asyncRouterMap, userRouter) {
  const res = []
  asyncRouterMap.forEach(route => {
    const tmp = { ...route }
    if (hasUserPermission(userRouter, tmp)) {
      if (tmp.children) {
        tmp.children = filterUserRouter(tmp.children, userRouter)
      }
      res.push(tmp)
    }
  })
  return res
}
/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasUserPermission(roles, route) {
  if (route.path && route.path !== '') {
    return roles.some(role => [route.path].includes(role.router))
  } else {
    return false
  }
}

/**
 * 通过meta.role判断是否与当前用户权限匹配
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
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routes asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(routes, roles) {
  const res = []
  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRouter(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

const adminList = ['zhoutaiping', 'huangkeke', 'zhaojinlei', 'lixuan', 'lijing', 'hujinyong', 'zhuchuanjiang', 'gaolu', 'kongfanbo']

export {
  filterUserRouter, hasUserPermission, filterAsyncRouter, hasPermission, adminList
}
