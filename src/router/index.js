import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Login from "../views/Login.vue";
import Dashboard from "../views/admin/Dashboard.vue";
import Profile from "../views/admin/Profile.vue";
import Posting from "../views/admin/Posting.vue";
import Archives from "../views/admin/Archives.vue";
import Settings from "../views/admin/Settings.vue";
import Help from "../views/admin/Help.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/auth/login",
    name: "Login",
    component: Login,
    meta: {
      layout: 'unauth'
    }
  },
  {
    path: "/admin/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      layout: 'secret'
    }
  },
  {
    path: "/admin/profile",
    name: "Profile",
    component: Profile,
    meta: {
      layout: 'secret'
    }
  },
  {
    path: "/admin/posting",
    name: "Write a Post",
    component: Posting,
    meta: {
      layout: 'secret'
    }
  },
  {
    path: "/admin/archives",
    name: "All Posts",
    component: Archives,
    meta: {
      layout: 'secret'
    }
  },
  {
    path: "/admin/settings",
    name: "Settings",
    component: Settings,
    meta: {
      layout: 'secret'
    }
  },
  {
    path: "/admin/help",
    name: "Help",
    component: Help,
    meta: {
      layout: 'secret'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
