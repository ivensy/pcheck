import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Blacks from '../views/Blacks.vue'
import BlackEdit from '../views/BlackEdit.vue'
import BlackDetail from '../views/BlackDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    redirect: {name:'Blacks'}
  },
  {
    path: '/blacks',
    name: 'Blacks',
    component: Blacks
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/black/add',
    name: 'BlackAdd',
    component: BlackEdit
  },
  {
    path: '/black/:blackId',
    name: 'BlackDetail',
    component: BlackDetail
  },
  {
    path: '/black/:blackId/edit',
    name: 'BlackEdit',
    component: BlackEdit
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
