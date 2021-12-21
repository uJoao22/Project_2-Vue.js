import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) //Registrando o Vuex no Vue

const estado = { //Criando o objeto estado
    token: null, //Com a chave token definida como null
    usuario: {} //E uma chave usuario com um objeto vazio
}

const mutations = {
    //O primeiro parametro recebe o state, e o segundo é os dados enviados para mutação em um objeto JS que será recebido a chave token e a chave usuario
    //O ECMA6 pega o objeto que está sendo recebido e destroi ele, e em seguida em separo ele em 2 chaves diferentes
    DEFINIR_USUARIO_LOGADO(state, { token, usuario }){
        state.token = token
        state.usuario = usuario
    }
}

export default new Vuex.Store({ //Exportando uma instancia de Vuex.Store com o state definido com os valores de estado
    state: estado,
    //Quando o nome do valor é o mesmo que o da chave, ele poder omitir o valor e compactar
    mutations
})