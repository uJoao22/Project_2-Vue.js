import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/http'

Vue.use(Vuex) //Registrando o Vuex no Vue

const estado = { //Criando o objeto estado
    token: localStorage.getItem('token') || null, //Com a chave token definida como null
    usuario: {} //E uma chave usuario com um objeto vazio
}

const mutations = {
    //O primeiro parametro recebe o state, e o segundo é os dados enviados para mutação em um objeto JS que será recebido a chave token e a chave usuario
    //O ECMA6 pega o objeto que está sendo recebido e destroi ele, e em seguida em separo ele em 2 chaves diferentes
    DEFINIR_USUARIO_LOGADO(state, { token, usuario }){
        state.token = token
        state.usuario = usuario
    },

    DESLOGAR_USUARIO(state){
        state.token = null,
        state.usuario = {}
    }
}

const actions = {
    efetuarLogin({ commit }, usuario){ //Pegando como primeiro parametro a ação commit e destruindo ela e como segundo parametro os dados do usuario
        return new Promise((resolve, reject) => {//Retornando uma promesa de que o usuário será logado
            http.post('auth/login', usuario) //Efetuando o metodo de post na API com os dados do user
                .then(res => { //Se a promesa der success, faça
                    commit('DEFINIR_USUARIO_LOGADO', { //Efetuando o commit, usando a mutation para alterar os dados, inserindo o token de login do usuario
                        token: res.data.access_token,
                        usuario: res.data.user
                    })
                    localStorage.setItem('token', res.data.access_token)
                    resolve(res.data) //Se a promesa for cumprida, retorne os dados do usuario logado
                })
                .catch(err => { //Se der erro, faça
                    console.log(err)
                    reject(err) //Se a promesa não for cumprida, retorne o erro
                })
        })
    }
}

const getters = {
    usuarioEstaLogado: state => Boolean(state.token) //A propriedade recebe state como parametro e retorna um Booleano se existir um token ou não
}

export default new Vuex.Store({ //Exportando uma instancia de Vuex.Store com o state definido com os valores de estado
    state: estado,
    //Quando o nome do valor é o mesmo que o da chave, ele poder omitir o valor e compactar
    mutations,
    actions,
    getters
})