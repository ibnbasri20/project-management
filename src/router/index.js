import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../layouts/main.vue'

// Quran //
import Quran from '../views/Quran/Index.vue'
import Read from '../views/Quran/Read.vue'
import Surah from '../views/Quran/Surah.vue'
// Quran //
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children:
    [
      {
        path:'/',
        name:'dashboard',
        component:Home
      },
      {
        path:'/quran',
        component:Quran,
        children:
        [
          {
            path:'/quran',
            name:'quran_surah',
            component:Surah
          },
          {
            path:'/quran/read/:id',
            name:'read_surah',
            component: Read
          }
        ]
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'router-active',
  base: process.env.BASE_URL,
  routes
})

export default router
