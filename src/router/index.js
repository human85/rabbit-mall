import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('@/views/Layout/index.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/Home/index.vue')
        },
        {
          path: 'category/:id',
          name: 'category',
          component: () => import('@/views/Category/index.vue')
        },
        {
          path: 'category/sub/:id',
          name: 'subCategory',
          component: () => import('@/views/Category/SubCategory/index.vue')
        },
        {
          path: 'detail/:id',
          name: 'detail',
          component: () => import('@/views/Detail/index.vue')
        },
        {
          path: 'cartlist',
          name: 'cartList',
          component: () => import('@/views/CartList/index.vue')
        },
        {
          path: 'checkout',
          name: 'checkout',
          component: () => import('@/views/Checkout/index.vue')
        },
        {
          path: 'pay',
          name: 'pay',
          component: () => import('@/views/Pay/index.vue')
        },
        {
          path: 'paycallback',
          name: 'payback',
          component: () => import('@/views/Pay/PayBack.vue')
        },
        {
          path: 'member',
          name: 'member',
          redirect: 'member/user',
          component: () => import('@/views/Member/index.vue'),
          children: [
            {
              path: 'user',
              name: 'userInfo',
              component: () => import('@/views/Member/components/UserInfo.vue')
            },
            {
              path: 'order',
              name: 'userOrder',
              component: () => import('@/views/Member/components/UserOrder.vue')
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/index.vue')
    }
  ],
  scrollBehavior() {
    // 始终滚动到顶部
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
