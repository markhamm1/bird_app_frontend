import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import UsersIndex from '../views/UsersIndex.vue'
import UsersCreate from '../views/UsersCreate.vue'
import UsersShow from '../views/UsersShow.vue'
import Login from '../views/Login.vue'
import SessionNew from '../views/SessionNew.vue'
import UserSessions from '../views/UserSessions.vue'
import SessionShow from '../views/SessionShow.vue'
import Logout from "../views/Logout.vue";
import ViewBird from "../views/ViewBird.vue";
import mapboxgl from 'mapbox-gl';
import moment from "moment";

mapboxgl.accessToken = 'pk.eyJ1IjoibWFya2hhbW0xIiwiYSI6ImNrZHo3Nzc5ZzBpeTYycWswdWlmNTJ5eDMifQ.vEJcB-Br21nXtIJ9S5z2zg';
var map = new mapboxgl.Map({
  container: 'app',
  style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9 // starting zoom
});


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
    path: '/new',
    name: 'SessionNew',
    component: SessionNew
  },
  {
    path: '/sessions/:id',
    name: 'SessionShow',
    component: SessionShow
  },
  {
    path: '/sessions',
    name: 'UserSessions',
    component: UserSessions
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout
  },
  {
    path: "/bird",
    name: "ViewBird",
    component: ViewBird
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
