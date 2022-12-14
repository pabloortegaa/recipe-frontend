import Vue from 'vue'
import VueRouter from 'vue-router'

import AppRecipes from '../components/AppRecipes.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, 

  
  {
    path: '/recipes',
    name: 'AppRecipes',
    component: AppRecipes
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router