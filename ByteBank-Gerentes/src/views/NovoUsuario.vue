<template>
    <div class="container">
        <h1>Novo Usuário</h1>
        <form @submit.prevent="enviarFormulario">
            <div class="form-group">
                <label for="name">Nome</label>
                <input type="text" class="form-control" id="name" v-model="usuario.nome"/>
            </div>
            <div class="form-group">
                <label for="email">E-mail</label>
                <input type="email" class="form-control" id="email" v-model="usuario.email"/>
            </div>
            <div class="form-group">
                <label for="senha">Senha</label>
                <input type="password" class="form-control" id="senha" v-model="usuario.senha"/>
            </div>
            <button type="submit" class="btn btn-primary">Salvar</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios' //Importando o modulo axios

export default {
    data(){
        return {
            usuario: {
                nome: '',
                senha: '',
                email: ''
            }
        }
    },

    methods: {
        enviarFormulario(){
            //Usando o axios para inserir dados na API com POST, 1 parametro é a para onde enviar os dados e o 2 são os dados
            axios.post('http://localhost:8082/auth/register', this.usuario)
                .then(res => {
                    console.log(res)
                    this.$router.push({ name: 'login' })
                })
                .catch(err => console.log(err))
        }
    }
}
</script>

<style>

</style>