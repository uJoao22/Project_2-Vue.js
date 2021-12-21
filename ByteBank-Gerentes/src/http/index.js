import axios from 'axios'

const http = axios.create({ //Criando uma instania de axios e configurando-a
    baseURL: 'http://localhost:8082/',
    headers: {
        'Accept': 'application/json',
        'Content': 'application/json'
    }
})

http.interceptors.request.use(config => { //Usando o interceptors.request para ficar interceptando quando tiver alguma requisição do http
    const token = localStorage.getItem('token') //Pegando o valor do token no localStorage
    if(token){ //Se existir este token, faça
        config.headers.Authorization = `Bearer ${token}` //Configurando a autorização no cabeçalho com a palavra bearer e o token para ter acesso a API, que só me disponibiliza acesso se estives configurando corretamente
    }
    return config //Retornando a config para o interceptador
}, error => {
    return Promise.reject(error) //Em caso de erro, ele retorna uma promise com erro
})

export default http