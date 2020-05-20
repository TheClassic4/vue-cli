import { asyncRouterMap, constantRouterMap } from '@/config/router.config'

/* 单账户多角色时，使用该方法可过滤角色不存在的菜单 */
// function hasRole(roles, route) {
// 	if(route.meta && route.meta.roles) {
// 		return route.meta.roles.includes(roles.id)
// 	} else {
// 		return true
// 	}
// }

/* 过滤账户是否拥有某一个权限，并将菜单从加载列表移除 */
function hasPermission(route, permission) {
  if (route.meta && route.meta.permission) {
    let flag = false
    for (let i = 0, len = permission.length; i < len; i++) {
      flag = route.meta.permission.includes(permission[i])
      if (flag) {
        return true
      }
    }
    return false
  }
  return true
}

/* 遍历过滤routes */
function filterAsyncRouter(routerMap, roles) {
  const accessedRouters = routerMap.filter(route => {
    if (hasPermission(route, roles)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        let roles = [];
        data.res.map(item => {
          if (item.id) {
            roles.push(item.id)
          }
          if (item.subList && item.subList.length > 0) {
            item.subList.map(subItem => {
              if (subItem.id) {
                roles.push(subItem.id)
              }
            })
          }
        })
        const accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission