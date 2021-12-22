<template>
  <div class="container">
      <h1>Login</h1>
      <form @submit.prevent="efetuarLogin">
          <div class="form-group">
              <label for="email">E-mail</label>
              <input type="email" class="form-control" id="email" v-model="usuario.email"/>
          </div>
          <div class="form-group">
              <label for="senha">Senha</label>
              <input type="password" class="form-control" id="senha" v-model="usuario.senha"/>
          </div>
          <p class="alert alert-danger" v-if="mensagemErro">{{ mensagemErro }}</p>
          <button type="submit" class="btn btn-primary brn-block">Logar</button>

          <router-link :to="{ name: 'novo.usuario' }">
              Cadastre-se
          </router-link>
      </form>
  </div>
</template>

<script>
export default {
    data(){
        return {
            usuario: {},
            mensagemErro: ''
        }
    },

    methods: {
        efetuarLogin(){
            //Disparando a ação efetuarLogin com o .dispatch e enviando os dados do usuario como parametro, se a ação for bem sucedida o usuario será redirecionado para a rota gerentes
            this.$store.dispatch('efetuarLogin', this.usuario)
                .then(() => {
                    this.$router.push({ name: 'gerentes' })
                    this.mensagemErro = ''
                })
                .catch(erro => { //Se der erro no login, faça
                    if(erro.request.status === 401){ //Se o status da requisição for igual a 401, faça
                        this.mensagemErro = 'Login ou senha inválido(s)'
                    }
                })
        }
    }
}
</script>

<style>

</style>