import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import Login from "../views/LoginView.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('../layout/Layout.vue'),
      redirect: "/home",
      children: [
        {
          path: '/home',
          name: 'home',
          // component: HomeView,
          component: () => import("../views/HomeView.vue")
        },
        {
          path: '/category/:id',
          name: 'category',
          component: () => import("../views/CategoryView.vue"),
        },
        {
          path: '/article/:id',
          name: 'article',
          component: () => import("../views/ArticleDetail.vue"),
        },
        {
          path: '/search',
          name: 'search',
          component: () => import("../views/SearchView.vue"),
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("../views/LoginView.vue")
    }
  ]
})

export default router
