import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue';
import Blogs from '../views/Blogs.vue';
import Archive from '../views/Archive.vue';

import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import HomeAd from "../views/admin/Home.vue";
import Profile from "../views/admin/Profile.vue";
import Posting from "../views/admin/Posting.vue";
import Archives from "../views/admin/Archives.vue";
import About from "../views/admin/About.vue";
import Contact from "../views/admin/Contact.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs
  },
  {
    path: '/blogs/:id',
    component: Archive
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
    path: "/auth/register",
    name: "Register",
    component: Register,
    meta: {
      layout: 'unauth'
    }
  },
  {
    path: "/admin/home",
    name: "Home",
    component: HomeAd,
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
    path: "/admin/about",
    name: "About",
    component: About,
    meta: {
      layout: 'secret'
    }
  },
  {
    path: "/admin/contact",
    name: "Contact",
    component: Contact,
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
