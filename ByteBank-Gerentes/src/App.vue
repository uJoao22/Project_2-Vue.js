<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-bytebank">
      <a class="navbar-brand" href="#">ByteBank</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" v-for="(route, index) of routes" :key="index">
            <router-link class="nav-link" :to="route.path ? route.path : '/'"> {{ route.titulo }} </router-link>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" @click.prevent="efetuarLogout">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import { routes } from './router'

export default {
  data(){
    return {
      routes: routes
    }
  },

  methods: {
    efetuarLogout(){
      localStorage.removeItem('token')
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style>
.navbar {
  background: #27ae60;
}
.navbar-bytebank a {
  color: #fff;
}
.navbar-bytebank a:hover {
  color: #000;
}
</style>
