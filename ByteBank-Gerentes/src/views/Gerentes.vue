<template>
  <div class="container">
    <h1>Gerentes</h1>
    <div class="row">
      <Gerente v-for="gerente in gerentes" :key="gerente.numero" :gerente="gerente" />
    </div>
  </div>
</template>

<script>
import Gerente from '@/components/Gerente.vue'

export default {
  components: {
    Gerente
  },

  data() {
    return {
      gerentes: []
    }
  },

  mounted(){ //Quando este componente for montado, carregado, execute
    if(!this.$store.state.token && !localStorage.getItem('token')){ //Se eu não tiver um token, faça
      this.$router.push({ name: 'login' }) //Redirecione o usuario para a rota de login
    }
    this.$http.get('gerentes') //Fazendo uma requisição para a API, com os dados dos gerentes
      .then(res => this.gerentes = res.data) //Se der sucesso, o array gerentes, recebe os dados
      .catch(err => console.log(err)) //Se der erro, irá ser impresso o erro no console

  },

  beforeRouteEnter(to, from, next){ //Usando um método do VueRouter para fazer a validação de login ao chamar a rota, ele é carregado antes que o componente seja montado, sem que o navegador faça uma requisição, este método recebe 3 parametro, para onde vai, de onde ele vem e o que fazer em seguida
    if(!this.$store.state.token && !localStorage.getItem('token')){ //Se eu não tiver um token, faça
      next({ name: 'login' }) //Redirecione o usuario para a rota de login
    }
    next() //Se tiver o token, siga
  }
}
</script>

<style>

</style>