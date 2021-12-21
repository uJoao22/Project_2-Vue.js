import Vue from 'vue'
import VueRouter from 'vue-router'
import Gerentes from '../views/Gerentes.vue'
import Home from '../views/Home.vue'
import NovoUsuario from '../views/NovoUsuario.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '',
    name: 'home',
    component: Home,
    titulo: 'Home'
  },
  {
    path: '/gerentes',
    name: 'gerentes',
    component: Gerentes,
    titulo: 'Gerentes'
  },
  {
    path: '/cadastre-se',
    name: 'novo.usuario',
    component: NovoUsuario,
    titulo: 'Cadastre-se'
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    titulo: 'Login'
  }
]

const router = new VueRouter({
  routes
})

export default router
