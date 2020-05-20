export const asyncRouterMap = [{
  path: '/',
  name: 'index',
  // component: ,
  meta: {
    title: '首页'
  },
  redirect: '/home/default',
  children: [{
    path: '/home',
    name: 'home',
    // component: ,
    redirect: '/home/default',
    hideChildrenInMenu: true,
    meta: {
      title: '工作台',
      keepAlive: true,
      permission: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 18, 19]
    },
    children: [{
      path: '/home/default',
      name: 'homeDefault',
      component: () => import('@/views/Home'),
      meta: {
        title: '首页',
        keepAlive: false,
        permission: [1]
      }
    }]
  }]
},
{
  path: '*',
  redirect: '/404',
  hidden: true
}]
/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [{
  path: '/user',
  // component: ,
  redirect: '/user/login',
  hidden: true,
  children: [{
    path: 'login',
    name: 'login',
    component: () => import('@/views/user/Login')
  }]
},
{
  path: '/404',
  component: () => import('@/views/exception/404')
}]
