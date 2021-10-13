/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/layouts/index'),
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: '首页', keepAlive: false }
      },
      {
        path: '/personal',
        name: 'Personal',
        component: () => import('@/views/personal/index'),
        meta: { title: '我的', keepAlive: false }
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/personal/about'),
        meta: { title: '关于我们', keepAlive: false }
      }
    ]
  }
]
