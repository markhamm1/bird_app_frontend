import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import UsersIndex from '../views/UsersIndex.vue'
import UsersCreate from '../views/UsersCreate.vue'
import UsersShow from '../views/UsersShow.vue'
import Login from '../views/Login.vue'
import SessionNew from '../views/SessionNew.vue'

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
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/users/:id',
    name: 'UsersShow',
    component: UsersShow
  },
  {
    path: '/sessions',
    name: 'SessionNew',
    component: SessionNew
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
