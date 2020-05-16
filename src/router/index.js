import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main.vue'
import Preview from '../components/Preview.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,    
  },
  {
    path: '/preview',
    component: Preview,
  },  
]

const router = new VueRouter({
  routes
})

export default router
