import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: '导航页' }
  },
  {
    path: '/story-store',
    name: 'storyStore',
    component: () => import('../views/StoryStore.vue'),
    meta: { title: '故事杂货铺' }
  }
]

const router = new VueRouter({
  routes
})

export default router
