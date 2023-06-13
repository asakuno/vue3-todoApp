import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// createRouter メソッドでルーターを生成
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // routes オプションに指定した path で描画するコンポーネントのルート（route）を定義
  routes: [
    {
      path: '/',  //リクエスパス
      name: 'home', //このルートの名前
      component: HomeView  //呼び出されるコンポーネント
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('../components/TodoApp.vue')
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('../views/PostListView.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../views/UserListView.vue')
    },
  ]
})

export default router