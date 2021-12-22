import Vue from 'vue'
import VueRouter from 'vue-router'
import Gerentes from '../views/Gerentes.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import provedor from '@/provedor'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: Home
  },
  {
    path: '/gerentes',
    name: 'gerentes',
    component: Gerentes
  },
  {
    path: '/cadastre-se',
    name: 'novo.usuario',
    component: () => import( /* webpackChunkName: "registrar" */ '../views/NovoUsuario.vue'),
    meta: { //Usando esta propriedade para definir que a rota é publica
      publica: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      publica: true
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((routeTo, routeFrom, next) => { //Antes de acessar cada rota este método será invocado, tendo como parametro, a rota de origem, a rota de destino e o que fazer em seguida
  if(!routeTo.meta.publica && !provedor.state.token && !localStorage.getItem('token')){ //Caso a minha meta de destino não seja publica e meu token não estiver configurado no provedor e no localStorage, faça
      return next({ path: '/login' }) //Retorne para a função a rota de login como destino
  }
  next() //Caso seja privada e o token exista, faça
})

export default router
