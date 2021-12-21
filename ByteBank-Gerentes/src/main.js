import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//Importando http no main para não ser necessario importa-lo em todo arquivo, apenas em 1, e usando o @ para dizer que está dentro de src e se o arquivo chamar index. não precisa ser escrito
import http from '@/http'

Vue.config.productionTip = false

Vue.prototype.$http = http

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
