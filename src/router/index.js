import Vue from 'vue'
import VueRouter from 'vue-router'
import Boards from '../views/Boards.vue'
import BoardDetail from '../views/BoardDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Boards',
    component: Boards
  },
  {
    path: '/board/:id',
    name: 'BoardDetail',
    component: BoardDetail
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
