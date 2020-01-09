import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BookManger from "../views/BookManger";

Vue.use(VueRouter)



const routes = [
  {
    path: '/',
    name: 'bookManager',
    component: BookManger
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/save',
    name: '',
    component: () => import('../views/Save.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/Test.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  }
]
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
