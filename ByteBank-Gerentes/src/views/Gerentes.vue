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
    this.$http.get('gerentes') //Fazendo uma requisição para a API, com os dados dos gerentes
      .then(res => this.gerentes = res.data) //Se der sucesso, o array gerentes, recebe os dados
      .catch(err => console.log(err)) //Se der erro, irá ser impresso o erro no console

  }
}
</script>

<style>

</style>