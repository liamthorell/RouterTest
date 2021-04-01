import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/brazil",
    name: "brazil",
    component: () => import('../views/About.vue')
  },
  {
    path: "/hawaii",
    name: "hawaii",
    component: () => import('../views/Hawaii.vue')
  },
  {
    path: "/panama",
    name: "panama",
    component: () => import('../views/Panama.vue')
  },
  {
    path: "/jamaica",
    name: "jamaica",
    component: () => import('../views/Jamaica.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
