import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import UsersIndex from '../views/UsersIndex.vue'
import UsersCreate from '../views/UsersCreate.vue'
import UsersShow from '../views/UsersShow.vue'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/users',
    name: 'UsersIndex',
    component: UsersIndex
  },
  {
    path: '/users/new',
    name: 'UsersCreate',
    component: UsersCreate
  },
  {
    path: '/users/:id',
    name: 'UsersShow',
    component: UsersShow
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
