import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from "@/store.js"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: "/details/:slug",
    name: "DestinationDetails",
    component: () => import('../views/DestinationDetails.vue'),
    props: true,
    children: [
      {
        path: ":experienceSlug",
        name: "ExperienceDetails",
        component: () => import('../views/ExperienceDetails.vue'),
        props: true
      }
    ],
    beforeEnter: (to, from, next) => {
      const exists = store.destinations.find(
        destination => destination.slug === to.params.slug
      )
      if (exists) {
        next()
      } else {
        next({name: "notFound"})
      }
    }
  },
  {
    path: "/user",
    name: "user",
    component: () => import("../views/User.vue"),
    meta: {requiresAuth: true}
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/invoices",
    name: "invoices",
    component: () => import("../views/Invoices.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/404",
    alias: "*",
    name: "notFound",
    component: () => import("../views/NotFound.vue")
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(!store.user) {
      next({
        name: "login",
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
